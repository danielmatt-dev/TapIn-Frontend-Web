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

}
