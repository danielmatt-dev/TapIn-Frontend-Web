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

    set estado(estado?: string) {
        if (!estado) {
            return this.estadoEnum = undefined;
        }
        if (estado === 'Habilitado') {
            this.estadoEnum = Estado.Habilitado;
        }
        if (estado === 'Deshabilitado') {
            this.estadoEnum = Estado.Deshabilitado;
        }
    }
}

export enum Estado {
    Habilitado,
    Deshabilitado
}
