import { Expose } from 'class-transformer';


export class AlumnoRequestModel {
    @Expose({ name: 'id_nfc' })
    idNfc?: string;
    fecha: string;
    hora: string;
    @Expose({ name: 'tipo_acceso' })
    tipoAcceso?: string;

    constructor(options: {
        idNfc?: string;
        fecha?: string;
        hora?: string;
        tipoAcceso?: string;
    } = {} as any) {
        this.idNfc = options.idNfc || undefined;
        this.fecha = options.fecha || '';
        this.hora = options.hora || '';
        this.tipoAcceso = options.tipoAcceso || undefined;
    }
}
