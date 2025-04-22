import { Either } from 'fp-ts/Either';
import { AlumnoRequestModel } from '../../models/alumno_request.model';

export interface DataSourcesRemote {
    registrarAsistenciaAlumno(alumno: AlumnoRequestModel): Promise<Either<Error, boolean>>;
}
