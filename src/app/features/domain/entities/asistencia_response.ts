import { AsistenciaResponseModel, AsistenciasRespondeModel } from '../../data/models/asistencias_response.model';
import { AlertaResponse } from './alerta_response';

export class AsistenciasResponse extends AsistenciasRespondeModel {
    constructor(
        asistencias: AsistenciaResponse[],
        alertas: AlertaResponse[],
    ) {
        super({
            asistencias: asistencias,
            alertas: alertas,
        });
    }
}

export class AsistenciaResponse extends AsistenciaResponseModel {
    constructor(
        idRegistroAsistencia?: number,
        alumno?: string,
        correo?: string,
        grado?: string,
        grupo?: string,
        fecha?: string,
        hora?: string,
        tipoRegistro?: string,
        tipoAcceso?: string,
        estado?: string
    ) {
        super({
            idRegistroAsistencia: idRegistroAsistencia,
            alumno: alumno,
            correo: correo,
            grado: grado,
            grupo: grupo,
            fecha: fecha,
            hora: hora,
            tipoRegistro: tipoRegistro,
            tipoAcceso: tipoAcceso,
            estado: estado
        });
    }
}
