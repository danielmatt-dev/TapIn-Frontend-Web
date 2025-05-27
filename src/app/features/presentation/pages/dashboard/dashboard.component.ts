import { Component, OnInit } from '@angular/core';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { PrimeTemplate } from 'primeng/api';
import { formatDate, NgIf } from '@angular/common';
import { ChartModule, UIChart } from 'primeng/chart';
import { InputText } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { BuscarAsistencias, BuscarAsistenciasParams } from '../../../domain/use_cases/buscar_asistencias';
import { AsistenciaResponse } from '../../../domain/entities/asistencia_response';

@Component({
    selector: 'app-empty',
    standalone: true,
    imports: [Select, FormsModule, Button, PrimeTemplate, NgIf, UIChart, ChartModule, InputText, TableModule],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    // Select
    periodos: any[] | undefined;
    selectedPeriodo: string | undefined;

    // Grafico
    barData: any;
    barOptions: any;
    tiposRegistro = ['Normal', 'Justificada', 'Extraordinario', 'Tardío'];
    monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
        'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    paleta: string[] = [];


    // Tabla
    asistencias: AsistenciaResponse[] = []
    asistenciaResponse?: AsistenciaResponse;

    asistenciasFiltradas = this.asistencias

    constructor(private readonly buscarAsistencias: BuscarAsistencias) {}

    async ngOnInit() {
        this.periodos = [
            { name: 'Ene 24 - Ago 24', code: 'AU' },
            { name: 'Sep 24 - Dic 24', code: 'BR' },
            { name: 'Ene 25 - Ago 25', code: 'CN' }
        ];

        const eitherAsistencias = await this.buscarAsistencias.call(new BuscarAsistenciasParams('2025-02-01', '2025-08-01'))

        if (eitherAsistencias._tag === 'Left'){
            console.log(eitherAsistencias.left)
        }

        if (eitherAsistencias._tag === 'Right'){
            console.log(eitherAsistencias.right)
            this.asistenciasFiltradas = eitherAsistencias.right.asistencias
        }

        this.initChart();
    }

    initChart() {
        const docStyle = getComputedStyle(document.documentElement);
        const colors = [
            docStyle.getPropertyValue('--p-primary-500'),
            docStyle.getPropertyValue('--p-primary-400'),
            docStyle.getPropertyValue('--p-primary-300'),
            docStyle.getPropertyValue('--p-primary-200'),
        ];
        const monthNames = [
            'Enero','Febrero','Marzo','Abril','Mayo','Junio',
            'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
        ];
        const tiposRegistro = ['Normal','Justificada','Extraordinario','Tardío'];

        // 1) Extraer meses únicos (0–11) de todas las fechas ISO
        const mesesSet = new Set<number>();
        this.asistenciasFiltradas.forEach(a => {
            const date = new Date(a.fecha);
            mesesSet.add(date.getMonth());
        });
        const meses = Array.from(mesesSet).sort((a,b) => a - b);

        // 2) Labels en español
        const labels = meses.map(m => monthNames[m]);

        // 3) Función de conteo
        const contar = (mesIndex: number, tipo: string) =>
            this.asistenciasFiltradas.filter(a => {
                const date = new Date(a.fecha);
                return date.getMonth() === mesIndex && a.tipoRegistro === tipo;
            }).length;

        // 4) Datasets: uno por tipoRegistro
        const datasets = tiposRegistro.map((tipo, i) => ({
            label: tipo,
            data: meses.map(mi => contar(mi, tipo)),
            backgroundColor: colors[i],
            borderColor: colors[i]
        }));

        // 5) Asignar barData y barOptions
        this.barData = { labels, datasets };
        this.barOptions = {
            maintainAspectRatio: false,
            aspectRatio: 1,
            scales: {
                x: { stacked: false },
                y: { stacked: false, beginAtZero: true }
            },
            plugins: { legend: { position: 'top' } }
        };
    }

    // Método para aplicar el filtro global
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    onRowSelect(event: any){
        console.log(event)
        this.asistenciaResponse = event.data
    }
}

