import { Component, OnInit } from '@angular/core';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { PrimeTemplate } from 'primeng/api';
import { NgForOf, NgIf } from '@angular/common';
import { ChartModule, UIChart } from 'primeng/chart';
import { InputText } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { BuscarAsistencias, BuscarAsistenciasParams } from '../../../domain/use_cases/buscar_asistencias';
import { AsistenciaResponse } from '../../../domain/entities/asistencia_response';
import { AlertaResponse } from '../../../domain/entities/alerta_response';

@Component({
    selector: 'app-empty',
    standalone: true,
    imports: [Select, FormsModule, PrimeTemplate, NgIf, UIChart, ChartModule, InputText, TableModule, NgForOf],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    es: any = {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Limpiar',
        dateFormat: 'yy-mm-dd'
    };

    value: any;

    // Select
    periodos: any[] = [
        {
            label: '01 Ago 24 - 31 Ene 25',
            code: 'P2',
            inicio: '2024-08-01',
            fin: '2025-01-31',
            horaEntrada: '07:00:00',
            horaSalida: '14:00:00',
            estado: 'Deshabilitado'
        },
        {
            label: '01 Feb 25 - 31 Jul 25',
            code: 'P1',
            inicio: '2025-02-01',
            fin: '2025-07-31',
            horaEntrada: '07:00:00',
            horaSalida: '14:00:00',
            estado: 'Habilitado'
        }
    ];
    selectedPeriodo = this.periodos[1].code;

    // Grafico
    barData: any;
    barOptions: any;
    notifications: AlertaResponse[] = [];

    // Tabla
    asistencias: AsistenciaResponse[] = [];
    asistenciaResponse?: AsistenciaResponse;

    asistenciasFiltradas = this.asistencias;

    constructor(private readonly buscarAsistencias: BuscarAsistencias) {}

    async ngOnInit() {
        await this.buscarData('2025-02-01', '2025-07-31');
    }

    async buscarData(inicio: string, fin: string) {
        const eitherAsistencias = await this.buscarAsistencias.call(new BuscarAsistenciasParams(inicio, fin));

        if (eitherAsistencias._tag === 'Left') {
            console.log(eitherAsistencias.left);
        }

        if (eitherAsistencias._tag === 'Right') {
            console.log(eitherAsistencias.right);
            this.asistenciasFiltradas = eitherAsistencias.right.asistencias;
            this.notifications = eitherAsistencias.right.alertas
        }

        this.initChart();
    }

    initChart() {
        const docStyle = getComputedStyle(document.documentElement);
        const colors = [docStyle.getPropertyValue('--p-primary-500'), docStyle.getPropertyValue('--p-primary-400'), docStyle.getPropertyValue('--p-primary-300'), docStyle.getPropertyValue('--p-primary-200')];
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const tiposRegistro = ['Normal', 'Justificada', 'Extraordinario', 'Tardío'];

        // 1) Extraer meses únicos (0–11) de todas las fechas ISO
        const mesesSet = new Set<number>();
        this.asistenciasFiltradas.forEach((a) => {
            const date = new Date(a.fecha);
            mesesSet.add(date.getMonth());
        });
        const meses = Array.from(mesesSet).sort((a, b) => a - b);

        // 2) Labels en español
        const labels = meses.map((m) => monthNames[m]);

        // 3) Función de conteo
        const contar = (mesIndex: number, tipo: string) =>
            this.asistenciasFiltradas.filter((a) => {
                const date = new Date(a.fecha);
                return date.getMonth() === mesIndex && a.tipoRegistro === tipo;
            }).length;

        // 4) Datasets: uno por tipoRegistro
        const datasets = tiposRegistro.map((tipo, i) => ({
            label: tipo,
            data: meses.map((mi) => contar(mi, tipo)),
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

    onRowSelect(event: any) {
        console.log(event);
        this.asistenciaResponse = event.data;
    }

    async onPeriodChange(code: string) {
        this.selectedPeriodo = code;

        const p = this.periodos.find((x) => x.code === code)!;

        await this.buscarData(p.inicio, p.fin);
    }

    dateSort(event: { data: any[]; field: string; mode: string }): void {
        event.data.sort((a, b) => {
            const da = new Date(a[event.field]).getTime();
            const db = new Date(b[event.field]).getTime();
            return da < db ? -1 : da > db ? 1 : 0;
        });
    }

    dateFilter(value: string, filter: Date): boolean {
        if (!filter) {
            return true;
        }
        const item = new Date(value);
        // Elimina hora para comparar solo fecha
        return item.setHours(0, 0, 0, 0) === filter.setHours(0, 0, 0, 0);
    }
}

