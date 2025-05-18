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
import { InputText } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { AlumnoRequest } from '../../../domain/entities/alumno_request';

@Component({
    selector: 'app-empty',
    standalone: true,
    imports: [AppFloatingConfigurator, Select, FormsModule, Button, PrimeTemplate, NgIf, UIChart, ChartModule, InputText, TableModule],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    // Select
    periodos: any[] | undefined;
    selectedPeriodo: string | undefined;

    // Grafico
    barData: any;
    barOptions: any;

    // Tabla
    alumnos: AlumnoRequest[] = []
    alumnoSeleccionado?: AlumnoRequest;

    ngOnInit() {
        this.periodos = [
            { name: 'Ene 24 - Ago 24', code: 'AU' },
            { name: 'Sep 24 - Dic 24', code: 'BR' },
            { name: 'Ene 25 - Ago 25', code: 'CN' }
        ];

        this.initChart();
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
                    borderColor: documentStyle.getPropertyValue('--p-primary-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                    borderColor: documentStyle.getPropertyValue('--p-primary-200'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.barOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    // Método para aplicar el filtro global
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    onRowSelect(){

    }
}

