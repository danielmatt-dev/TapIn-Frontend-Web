import { ChangeDetectorRef, Component, effect, inject, OnInit } from '@angular/core';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { PrimeTemplate } from 'primeng/api';
import { NgIf } from '@angular/common';
import { ChartModule, UIChart } from 'primeng/chart';
import { ChartData, ChartOptions } from 'chart.js';
import { data } from 'autoprefixer';

@Component({
    selector: 'app-empty',
    standalone: true,
    imports: [AppFloatingConfigurator, Select, FormsModule, Button, PrimeTemplate, NgIf, UIChart, ChartModule],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    // Select
    periodos: any[] | undefined;
    selectedPeriodo: string | undefined;

    // Grafico
    // 1) Datos para el gráfico
    public barData!: ChartData<'bar'>;

    // 2) Opciones (ejes, leyenda, responsive…)
    public barOptions: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false    // ← ocultas la leyenda
            },
            tooltip: {
                enabled: true
            }
        }
    };

    ngOnInit() {
        this.periodos = [
            { name: 'Ene 24 - Ago 24', code: 'AU' },
            { name: 'Sep 24 - Dic 24', code: 'BR' },
            { name: 'Ene 25 - Ago 25', code: 'CN' }
        ];

        // 3) Inicializa barData con tus etiquetas y valores
        this.barData = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [
                {
                    label: 'Ventas 2025',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55]
                },
                {
                    label: 'Ventas 2024',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    borderWidth: 1,
                    data: [28, 48, 40, 19, 86, 27]
                }
            ]
        };
    }

    protected readonly data = data;
}

