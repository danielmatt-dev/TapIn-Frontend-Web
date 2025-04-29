import { Either } from 'fp-ts/Either';
import { AlumnoRequestModel } from '../../models/alumno_request.model';
import { Periodo } from '../../../domain/entities/periodo';
import { PeriodoModel } from '../../models/periodo.model';

export interface DataSourcesRemote {
    registrarAsistenciaAlumno(alumno: AlumnoRequestModel): Promise<Either<Error, boolean>>;
    actualizarPeriodo(periodo: PeriodoModel): Promise<Either<Error, boolean>>;
}
