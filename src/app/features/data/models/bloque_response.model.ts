import { Expose } from 'class-transformer';

export class BloqueResponseModel {
    @Expose({ name: 'id_bloque' })
    idBloque?: string;
    meses: string[];
    estado?: string;

    constructor(options: {
        idBloque?: string;
        meses?: string[];
        estado?: string;
    } = {} as any) {
        this.idBloque = options.idBloque || undefined;
        this.meses = options.meses || [];
        this.estado = options.estado || undefined;
    }
}
