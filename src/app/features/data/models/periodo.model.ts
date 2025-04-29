import { Expose } from 'class-transformer';
import { BloqueResponse } from '../../domain/entities/bloque_response';

export class PeriodoModel {
    @Expose({ name: 'id_periodo' })
    idPeriodo?: string;
    nombre: string;
    @Expose({ name: 'hora_entrada' })
    horaEntrada: string;
    @Expose({ name: 'hora_salida' })
    horaSalida: string;
    @Expose({ name: 'fecha_inicio' })
    fechaInicio: string;
    @Expose({ name: 'fecha_final' })
    fechaFinal: string;
    bloques: BloqueResponse[];
    estado?: string;

    constructor(options: {
        idPeriodo?: string;
        nombre?: string;
        horaEntrada?: string;
        horaSalida?: string;
        fechaInicio?: string;
        fechaFinal?: string;
        bloques?: BloqueResponse[];
        estado?: string;
    } = {} as any) {
        this.idPeriodo = options.idPeriodo || undefined;
        this.nombre = options.nombre || '';
        this.horaEntrada = options.horaEntrada || '';
        this.horaSalida = options.horaSalida || '';
        this.fechaInicio = options.fechaInicio || '';
        this.fechaFinal = options.fechaFinal || '';
        this.bloques = options.bloques || [];
        this.estado = options.estado || undefined;
    }
}
