import { AlumnoRequest } from '../../domain/entities/alumno_request';
import { InscripcionResponse } from '../../domain/entities/inscripcion_response';
import { AlertaResponse } from '../../domain/entities/alerta_response';

export class AsistenciasRespondeModel{
    alumnos: AlumnoRequest[];
    inscripciones: InscripcionResponse[];
    alertas: AlertaResponse[];

    constructor(options: {
        alumnos?: AlumnoRequest[],
        inscripciones?: InscripcionResponse[],
        alertas?: AlertaResponse[],
    } = {} as any) {
        this.alumnos = options.alumnos || [];
        this.inscripciones = options.inscripciones || [];
        this.alertas = options.alertas || [];
    }
}
