import { Expose } from 'class-transformer';

export class AlertaResponseModel {
    @Expose({name: 'id_alerta'})
    idAlerta?: string;
    titulo: string;
    descripcion: string;
    tipo: string;

    constructor(options: {
        idAlerta?: string,
        titulo?: string,
        descripcion?: string,
        tipo?: string,
    } = {} as any) {
        this.idAlerta = options.idAlerta || undefined;
        this.titulo = options.titulo || '';
        this.descripcion = options.descripcion || '';
        this.tipo = options.tipo || ''
    }
}
