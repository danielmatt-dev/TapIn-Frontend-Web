import { DataSourcesRemote } from '../data_sources';
import { Either } from 'fp-ts/Either';
import { AlumnoRequestModel } from '../../../models/alumno_request.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Error } from '../../../../presentation/pages/auth/error';
import { boolean } from 'fp-ts';
import { PeriodoModel } from '../../../models/periodo.model';
import { AsistenciasRespondeModel } from '../../../models/asistencias_response.model';
import { AsistenciaResponse } from '../../../../domain/entities/asistencia_response';

@Injectable({
    providedIn: 'root'
})

class DataSourceImpl implements DataSourcesRemote {
    constructor(
        private readonly http: HttpClient
    ) {
    }

    registrarAsistenciaAlumno(alumno: AlumnoRequestModel): Promise<Either<Error, boolean>> {
        return Promise.resolve(undefined);
    }

    actualizarPeriodo(periodo: PeriodoModel): Promise<Either<Error, boolean>> {
        return Promise.resolve(undefined);
    }

    buscarAsistencias(asistenciasRespondeModel: AsistenciasRespondeModel): Promise<Either<Error, AsistenciaResponse[]>> {
        return Promise.resolve(undefined);
    }

}
