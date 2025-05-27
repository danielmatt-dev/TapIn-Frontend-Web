import { AlertaResponse } from '../../domain/entities/alerta_response';
import { Expose } from 'class-transformer';
import { AlertaResponseModel } from './alerta_response.model';

export class AsistenciasRespondeModel{
    asistencias: AsistenciaResponseModel[];
    alertas: AlertaResponseModel[];

    constructor(options: {
        asistencias?: AsistenciaResponseModel[],
        alertas?: AlertaResponse[],
    } = {} as any) {
        this.asistencias = options.asistencias || [];
        this.alertas = options.alertas || [];
    }
}

export class AsistenciaResponseModel {

    @Expose({name: 'id_registro_asistencia'})
    idRegistroAsistencia: number

    alumno: string

    correo: string

    grado: string

    grupo: string

    fecha: string

    hora: string

    @Expose({name: 'tipo_registro'})
    tipoRegistro: string

    @Expose({name: 'tipo_acceso'})
    tipoAcceso: string

    estado: string

    constructor(options: {
        idRegistroAsistencia?: number,
        alumno?: string,
        correo?: string
        grado?: string
        grupo?: string,
        fecha?: string,
        hora?: string,
        tipoRegistro?: string,
        tipoAcceso?: string,
        estado?: string
    } = {}) {
        this.idRegistroAsistencia = options.idRegistroAsistencia ?? 0
        this.alumno = options.alumno ?? ''
        this.correo = options.correo ?? ''
        this.grado = options.grado ?? ''
        this.grupo = options.grupo ?? ''
        this.fecha = options.fecha ?? ''
        this.hora = options.hora ?? ''
        this.tipoRegistro = options.tipoRegistro ?? ''
        this.tipoAcceso = options.tipoAcceso ?? ''
        this.estado = options.estado ?? ''
    }

}
