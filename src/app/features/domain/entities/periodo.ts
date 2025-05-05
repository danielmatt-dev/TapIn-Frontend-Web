import { PeriodoModel } from '../../data/models/periodo.model';
import { BloqueResponse, Estado } from './bloque_response';

export class Periodo extends PeriodoModel {
    estadoEnum?: Estado;

    constructor(
        idPeriodo?: string,
        nombre?: string,
        horaEntrada?: string,
        horaSalida?: string,
        fechaInicio?: Date,
        fechaFinal?: Date,
        bloques?: BloqueResponse[],
        estado?: string
    ) {
        super({
            idPeriodo: idPeriodo,
            nombre: nombre,
            horaEntrada: horaEntrada,
            horaSalida: horaSalida,
            fechaInicio: fechaInicio,
            fechaFinal: fechaFinal,
            bloques: bloques,
            estado: estado
        });

        if (estado != null) {
            this.estado = estado;
        }
    }

    set estado(estado?: string) {
        if (!estado) {
            return this.estadoEnum = undefined;
        }
        if (estado === 'Habilitado') {
            this.estadoEnum = Estado.Habilitado;
        }
        if (estado === 'Deshabilitado') {
            this.estadoEnum = Estado.Deshabilitado;
        }
    }
}
