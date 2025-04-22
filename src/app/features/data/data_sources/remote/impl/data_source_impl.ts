import { DataSourcesRemote } from '../data_sources';
import { Either } from 'fp-ts/Either';
import { AlumnoRequestModel } from '../../../models/alumno_request.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
