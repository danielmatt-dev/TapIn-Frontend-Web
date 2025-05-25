import { Either } from 'fp-ts/Either';
import { AlumnoRequestModel } from '../../models/alumno_request.model';
import { PeriodoModel } from '../../models/periodo.model';
import { AsistenciaResponse } from '../../../domain/entities/asistencia_response';

export interface DataSourcesRemote {
    registrarAsistenciaAlumno(alumno: AlumnoRequestModel): Promise<Either<Error, boolean>>
    actualizarPeriodo(periodo: PeriodoModel): Promise<Either<Error, boolean>>
    buscarAsistencias(): Promise<Either<Error, AsistenciaResponse[]>>
    buscarPeriodos(): Promise<Either<Error, PeriodoModel[]>>
}

