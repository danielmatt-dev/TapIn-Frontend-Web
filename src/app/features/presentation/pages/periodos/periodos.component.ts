import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DatePipe, NgIf } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ListboxModule } from 'primeng/listbox';
import { SplitterModule } from 'primeng/splitter';

@Component({
    selector: 'app-periodos',
    imports: [DialogModule, ButtonModule, TableModule, NgIf, DatePickerModule, FormsModule, CalendarModule, InputTextModule, PanelModule, ListboxModule, SplitterModule],
    standalone: true,
    providers: [DatePipe],
    templateUrl: './periodos.component.html',
    styleUrl: './periodos.component.scss'
})
export class PeriodosComponent implements OnInit {
    showDialog = false;

    step: 'empty' | 'table' | 'form' = 'empty';
    fechaInicio!: Date;
    fechaFin!: Date;
    horaEntrada!: Date;
    horaSalida!: Date;

    periodos: any[] = [
        { id: 1, nombre: 'Periodo A', inicio: '19/04/25', fin: '04/07/25', entrada: '08:00', salida: '14:00' },
        { id: 2, nombre: 'Periodo B', inicio: '19/04/25', fin: '04/07/25', entrada: '08:00', salida: '14:00' },
        { id: 3, nombre: 'Periodo C', inicio: '19/04/25', fin: '04/07/25', entrada: '08:00', salida: '14:00' }
    ];
    selectedPeriodo?: any = this.periodos[0];

    periodoOptions: { label: string; value: any }[] = [];

    allBloques: any[] = [
        { id_bloque: 1, id_periodo: 1, nombre: 'Bloque A', meses: 'Abril', estado: 'Habilitado' },
        { id_bloque: 2, id_periodo: 1, nombre: 'Bloque B', meses: 'Mayo', estado: 'Habilitado' },
        { id_bloque: 3, id_periodo: 1, nombre: 'Bloque C', meses: 'Junio', estado: 'Deshabilitado' },
        { id_bloque: 4, id_periodo: 2, nombre: 'Bloque D', meses: 'Julio', estado: 'Habilitado' }
        // …más bloques
    ];

    bloques: any[] = [];
    selectedBloque?: any;

    constructor(private readonly datePipe: DatePipe) {}

    ngOnInit() {
        this.periodoOptions = this.periodos.map((p) => ({ label: `${p.inicio} – ${p.fin}`, value: p }));
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
        const formatoFecha = (d: Date) => this.datePipe.transform(d, 'dd/MM/yy')!;
        const formatoHora = (d: Date) => this.datePipe.transform(d, 'HH:mm')!;

        const nuevo = {
            id: this.periodos.length + 1,
            inicio: formatoFecha(this.fechaInicio),
            fin: formatoFecha(this.fechaFin),
            entrada: formatoHora(this.horaEntrada),
            salida: formatoHora(this.horaSalida)
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

    onSelect(event: any) {
        this.selectedPeriodo = event.value.value;
        this.bloques = this.allBloques.filter(b => b.id_periodo === this.selectedPeriodo.id);
    }

    onAddBloque() {
        // Lógica para abrir un diálogo o formulario y crear un nuevo bloque
        console.log('Añadir bloque para periodo', this.selectedPeriodo);
    }

    onRowSelect(event: any) {
        // event.data es el objeto periodo seleccionado
        this.selectedPeriodo = event.data;
        // ahora recargas los bloques asociados
        this.bloques = this.allBloques.filter(b => b.id_periodo === this.selectedPeriodo.id);
    }

}
