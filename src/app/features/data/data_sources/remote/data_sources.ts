import { Either } from 'fp-ts/Either';
import { AlumnoRequestModel } from '../../models/alumno_request.model';
import { PeriodoModel } from '../../models/periodo.model';
import { AsistenciasResponse } from '../../../domain/entities/asistencia_response';

export interface DataSourcesRemote {
    registrarAsistenciaAlumno(alumno: AlumnoRequestModel): Promise<Either<Error, boolean>>
    actualizarPeriodo(periodo: PeriodoModel): Promise<Either<Error, boolean>>
    buscarAsistencias(fechaInicio: string, fechaFin: string): Promise<Either<Error, AsistenciasResponse>>
    buscarPeriodos(): Promise<Either<Error, PeriodoModel[]>>
}

