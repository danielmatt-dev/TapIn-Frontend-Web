import { Expose, Transform } from 'class-transformer';
import { Periodo } from '../../domain/entities/periodo';

export class InscripcionResponseModel {
    @Expose({name: 'id_inscripcion'})
    idInscripcion?: string;
    periodos: Periodo[];
    @Transform(({ value }) => (value ? new Date(value) : undefined), { toClassOnly: true })
    fecha?: Date;
    grado: string;
    grupo: string;
    @Expose({name: 'estado_inscripcion'})
    estadoInscripcion?: string;

    constructor(options: {
        idInscripcion?: string;
        periodos?: Periodo[],
        fecha?: Date;
        grado?: string,
        grupo?: string,
        estadoInscripcion?: string,
    } = {} as any) {
        this.idInscripcion = options.idInscripcion || undefined;
        this.periodos = options.periodos || [];
        this.fecha = options.fecha || undefined;
        this.grado = options.grupo || '';
        this.grupo = options.grupo || '';
        this.estadoInscripcion = options.estadoInscripcion || undefined;
    }
}
