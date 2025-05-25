import { Expose, Transform, Type } from 'class-transformer';
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
    @Transform(({ value }) => (value ? new Date(value) : undefined), { toClassOnly: true })
    fechaInicio?: Date;
    @Expose({ name: 'fecha_final' })
    @Transform(({ value }) => (value ? new Date(value) : undefined), { toClassOnly: true })
    fechaFinal?: Date;
    bloques: BloqueResponse[];
    private _estado?: string | undefined;
    public get estado(): string | undefined {
        return this._estado;
    }
    public set estado(value: string | undefined) {
        this._estado = value;
    }

    constructor(
        options: {
            idPeriodo?: string;
            nombre?: string;
            horaEntrada?: string;
            horaSalida?: string;
            fechaInicio?: Date;
            fechaFinal?: Date;
            bloques?: BloqueResponse[];
            estado?: string;
        } = {} as any
    ) {
        this.idPeriodo = options.idPeriodo || undefined;
        this.nombre = options.nombre || '';
        this.horaEntrada = options.horaEntrada || '';
        this.horaSalida = options.horaSalida || '';
        this.fechaInicio = options.fechaInicio || undefined;
        this.fechaFinal = options.fechaFinal || undefined;
        this.bloques = options.bloques || [];
        this.estado = options.estado || undefined;
    }
}
