import { Expose, Transform } from 'class-transformer';


export class AlumnoRequestModel {
    @Expose({ name: 'id_nfc' })
    idNfc?: string;
    @Transform(({ value }) => (value ? new Date(value) : undefined), { toClassOnly: true })
    fecha?: Date;
    hora: string;
    @Expose({ name: 'tipo_acceso' })
    tipoAcceso?: string;

    constructor(options: {
        idNfc?: string;
        fecha?: Date;
        hora?: string;
        tipoAcceso?: string;
    } = {} as any) {
        this.idNfc = options.idNfc || undefined;
        this.fecha = options.fecha || undefined;
        this.hora = options.hora || '';
        this.tipoAcceso = options.tipoAcceso || undefined;
    }
}
