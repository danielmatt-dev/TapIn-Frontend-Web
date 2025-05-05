import { AlertaResponseModel } from '../../data/models/alerta_response.model';

export class AlertaResponse extends AlertaResponseModel {
    constructor(
        idAlerta?: string,
        titulo?: string,
        descripcion?: string,
    ) {
        super({
            idAlerta: idAlerta,
            titulo: titulo,
            descripcion: descripcion,
        });
    }
}
