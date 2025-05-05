import { AsistenciasRespondeModel } from '../../data/models/asistencias_response.model';
import { AlumnoRequest } from './alumno_request';
import { InscripcionResponse } from './inscripcion_response';
import { AlertaResponse } from './alerta_response';

export class AsistenciaResponse extends AsistenciasRespondeModel {
    constructor(
        alumnos: AlumnoRequest[],
        inscripciones: InscripcionResponse[],
        alertas: AlertaResponse[],
    ) {
        super({
            alumnos: alumnos,
            inscripciones: inscripciones,
            alertas: alertas,
        });
    }
}
