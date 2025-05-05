import { InscripcionResponseModel } from '../../data/models/inscripcion_response.model';
import { Periodo } from './periodo';

export class InscripcionResponse extends InscripcionResponseModel {
    estadoInscripcionEnum?: EstadoInscripcion;

    constructor(
        idInscripcion?: string,
        periodos?: Periodo[],
        fecha?: Date,
        grado?: string,
        grupo?: string,
        estadoInscripcion?: string
    ) {
        super({
            idInscripcion: idInscripcion,
            periodos: periodos,
            fecha: fecha,
            grado: grado,
            grupo: grupo,
            estadoInscripcion: estadoInscripcion
        });

        if (estadoInscripcion != null) {
            this.estadoDeInscripcion = estadoInscripcion;
        }
    }

    set estadoDeInscripcion(estaadoInscripcion: string) {
        if (!estaadoInscripcion) {
            this.estadoInscripcionEnum = undefined;
            return;
        }
        if (estaadoInscripcion === 'Activo') {
            this.estadoInscripcionEnum = EstadoInscripcion.Activo;
        }
        if (estaadoInscripcion === 'Baja') {
            this.estadoInscripcionEnum = EstadoInscripcion.Baja;
        }
    }
}

export enum EstadoInscripcion {
    Activo,
    Baja
}
