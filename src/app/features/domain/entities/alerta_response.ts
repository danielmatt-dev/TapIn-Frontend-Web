import { AlertaResponseModel } from '../../data/models/alerta_response.model';

export class AlertaResponse extends AlertaResponseModel {
    constructor(
        idAlerta?: number,
        titulo?: string,
        descripcion?: string,
        tipo?: string
    ) {
        super({
            idAlerta: idAlerta,
            titulo: titulo,
            descripcion: descripcion,
            tipo: tipo
        });
    }
}
