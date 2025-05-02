import { InscripcionResponseModel } from '../../data/models/inscripcion_response.model';
import { Periodo } from './periodo';

export enum EstadoInscripcion {
    Activo = 'Activo',
    Baja   = 'Baja'
}

export class InscripcionResponse extends InscripcionResponseModel {
    estadoInscripcionEnum?: EstadoInscripcion;

    constructor(options: {
        idInscripcion?:      string;
        periodos?:           Periodo[];
        fecha?:              Date;
        grado?:              string;
        grupo?:              string;
        estadoInscripcion?:  string;
    } = {}) {
        super({
            idInscripcion:     options.idInscripcion,
            periodos:          options.periodos,
            fecha:             options.fecha,
            grado:             options.grado,
            grupo:             options.grupo,
            estadoInscripcion: options.estadoInscripcion
        });

        // 2) Si vino estadoInscripcion, convierto a enum
        if (options.estadoInscripcion) {
            this.setEstado(options.estadoInscripcion);
        }
    }

    /** Convierte un string a EstadoInscripcion, o deja undefined */
    private setEstado(value: string) {
        // “keyof typeof EstadoInscripcion” solo permite "Activo"|"Baja"
        const key = value as keyof typeof EstadoInscripcion;
        this.estadoInscripcionEnum =
            key in EstadoInscripcion
                ? EstadoInscripcion[key]
                : undefined;
    }
}
