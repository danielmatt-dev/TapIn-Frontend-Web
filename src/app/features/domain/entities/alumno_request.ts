import { AlumnoRequestModel } from '../../data/models/alumno_request.model';

export class AlumnoRequest extends AlumnoRequestModel {
    tipoAccesoEnum?: TipoAcceso;

    constructor(
        idNfc?: string,
        fecha?: string,
        hora?: string,
        tipoAcceso?: string
    ) {
        super({
            idNfc: idNfc,
            fecha: fecha,
            hora: hora,
            tipoAcceso: tipoAcceso
        });
        if (tipoAcceso != null) {
            this.tipoDeAcceso = tipoAcceso;
        }
    }

    set tipoDeAcceso(tipoDeAcceso?: string) {
        if (!tipoDeAcceso) {
            this.tipoAccesoEnum = undefined;
            return;
        }
        if (tipoDeAcceso === 'Entrada') {
            this.tipoAccesoEnum = TipoAcceso.Entrada;
        }
        if (tipoDeAcceso === 'Salida') {
            this.tipoAccesoEnum = TipoAcceso.Salida;
        }
    }
}

export enum TipoAcceso {
    Entrada,
    Salida,
}



