import { Expose } from 'class-transformer';

export class AlertaResponseModel {
    @Expose({name: 'id_alerta'})
    idAlerta?: number;
    titulo: string;
    descripcion: string;
    tipo: string;

    constructor(options: {
        idAlerta?: number,
        titulo?: string,
        descripcion?: string,
        tipo?: string,
    } = {} as any) {
        this.idAlerta = options.idAlerta || 0;
        this.titulo = options.titulo || '';
        this.descripcion = options.descripcion || '';
        this.tipo = options.tipo || ''
    }
}
