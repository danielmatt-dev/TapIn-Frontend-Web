import { BloqueResponseModel } from '../../data/models/bloque_response.model';

export class BloqueResponse extends BloqueResponseModel {
    estadoEnum?: Estado;

    constructor(
        idBloque?: string,
        meses?: string[],
        estado?: string
    ) {
        super({
            idBloque: idBloque,
            meses: meses,
            estado: estado
        });
        if (estado != null) {
            this.estado = estado;
        }
    }

}

export enum Estado {
    Habilitado,
    Deshabilitado
}
