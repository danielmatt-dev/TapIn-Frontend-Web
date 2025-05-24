import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DatePipe, NgIf } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
    selector: 'app-periodos',
    imports: [DialogModule, ButtonModule, TableModule, NgIf, DatePickerModule, FormsModule, CalendarModule],
    standalone: true,
    providers: [DatePipe],
    templateUrl: './periodos.component.html',
    styleUrl: './periodos.component.scss'
})
export class PeriodosComponent {
    showDialog = true;

    step: 'empty' | 'table' | 'form' = 'empty';
    fechaInicio!: Date;
    fechaFin!: Date;
    horaEntrada!: Date;
    horaSalida!: Date;

    periodos: any[] = [];
    selectedPeriodo?: any;

    constructor(private readonly datePipe: DatePipe) {
    }

    cerrarVentana() {
        this.showDialog = false;
        this.periodos = [];
        this.selectedPeriodo = undefined;
    }

    onAccept() {
        console.log('Seleccionado:', this.selectedPeriodo);
        this.cerrarVentana();
    }

    loadPeriodos() {
        this.periodos = [
            { id: 1, inicio: '19/04/25', fin: '04/07/25', entrada: '08:00', salida: '14:00' },
            { id: 2, inicio: '19/04/25', fin: '04/07/25', entrada: '08:00', salida: '14:00' },
            { id: 3, inicio: '19/04/25', fin: '04/07/25', entrada: '08:00', salida: '14:00' }
        ];
        this.step = 'table';
    }

    onAddNewPeriodo() {
        // inicializa valores por defecto si quieres
        this.fechaInicio = new Date();
        this.fechaFin = new Date();
        this.horaEntrada = new Date();
        this.horaSalida = new Date();
        this.step = 'form';
    }

    acceptForm() {

        const formatoFecha = (d: Date)  => this.datePipe.transform(d, 'dd/MM/yy')!;
        const formatoHora  = (d: Date)  => this.datePipe.transform(d, 'HH:mm')!;

        const nuevo = {
            id:       this.periodos.length + 1,
            inicio:   formatoFecha(this.fechaInicio),
            fin:      formatoFecha(this.fechaFin),
            entrada:  formatoHora(this.horaEntrada),
            salida:   formatoHora(this.horaSalida)
        };
        this.periodos = [...this.periodos, nuevo];
        this.step = 'table';
    }

    cancelForm() {
        this.step = 'table';
    }

    onAcceptTable() {
        console.log('Seleccionado:', this.selectedPeriodo);
        this.cerrarVentana();
    }
}
