import { DataSourcesRemote } from '../data_sources';
import { Either, left, right } from 'fp-ts/Either';
import { AlumnoRequestModel } from '../../../models/alumno_request.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodoModel } from '../../../models/periodo.model';
import { AsistenciaResponse } from '../../../../domain/entities/asistencia_response';
import { DataSourceEndpoints } from './data_source.endpoints';
import {catchError, map} from "rxjs/operators";
import {firstValueFrom, of} from "rxjs";
import { instanceToPlain, plainToInstance } from 'class-transformer';
import {
    BadCredencialsException,
    BadRequestException, ForbiddenException, InternalServerException,
    ResourceNotFoundException, TimeoutException
} from '../../../../../shared/exceptions/exceptions';

@Injectable({
    providedIn: 'root'
})
export class DataSourceRemoteImpl implements DataSourcesRemote {
    constructor(private readonly http: HttpClient) {}

    buscarPeriodos(): Promise<Either<Error, PeriodoModel[]>> {
        const url = DataSourceEndpoints.getPeriodos;

        return firstValueFrom(
            this.http
                .get<any[]>(url)
                .pipe(
                    map((response: PeriodoModel[]) => {
                        const periodos = response.map((p) =>
                            plainToInstance(PeriodoModel, p))
                        return right(periodos)
                    }),
                    catchError((error: HttpErrorResponse) => {
                        let exception: Error = new Error(error.message);

                        if (error.status === 400) {
                            exception = new BadRequestException(error.message);
                        }
                        if (error.status === 401) {
                            exception = new BadCredencialsException(error.message);
                        }
                        if (error.status === 403) {
                            exception = new ForbiddenException(error.message);
                        }
                        if (error.status === 404) {
                            exception = new ResourceNotFoundException(error.message);
                        }
                        if (error.status === 408) {
                            exception = new TimeoutException(error.message);
                        }
                        if (error.status === 500) {
                            exception = new InternalServerException(error.message);
                        }

                        return of(left(exception));
                    })
        ))

    }

    async registrarAsistenciaAlumno(alumno: AlumnoRequestModel): Promise<Either<Error, boolean>> {
        const url = DataSourceEndpoints.postAsistencia;

        return firstValueFrom(
            this.http
                .post(url, instanceToPlain(alumno), { observe: 'response' })
                .pipe(
                    map((response) =>
                        (response.status === 200 ? right(true) : left(Error()))),
                    catchError((error: HttpErrorResponse) => {
                        let exception: Error = new Error(error.message);

                        if (error.status === 400) {
                            exception = new BadRequestException(error.message);
                        }
                        if (error.status === 401) {
                            exception = new BadCredencialsException(error.message);
                        }
                        if (error.status === 403) {
                            exception = new ForbiddenException(error.message);
                        }
                        if (error.status === 404) {
                            exception = new ResourceNotFoundException(error.message);
                        }
                        if (error.status === 408) {
                            exception = new TimeoutException(error.message);
                        }
                        if (error.status === 500) {
                            exception = new InternalServerException(error.message);
                        }

                        return of(left(exception));
                    })
                )
        );
    }

    async actualizarPeriodo(periodo: PeriodoModel): Promise<Either<Error, boolean>> {
        const url = DataSourceEndpoints.updatePeriodo;

        return firstValueFrom(
            this.http
                .put(url, instanceToPlain(periodo), { observe: 'response' })
                .pipe(
                    map((response) =>
                        (response.status === 200 ? right(true) : left(Error()))),
                    catchError((error: HttpErrorResponse) => {
                        let exception: Error = new Error(error.message);

                        if (error.status === 400) {
                            exception = new BadRequestException(error.message);
                        }
                        if (error.status === 401) {
                            exception = new BadCredencialsException(error.message);
                        }
                        if (error.status === 403) {
                            exception = new ForbiddenException(error.message);
                        }
                        if (error.status === 404) {
                            exception = new ResourceNotFoundException(error.message);
                        }
                        if (error.status === 408) {
                            exception = new TimeoutException(error.message);
                        }
                        if (error.status === 500) {
                            exception = new InternalServerException(error.message);
                        }

                        return of(left(exception));
                    })
                )
        );
    }

    async buscarAsistencias(): Promise<Either<Error, AsistenciaResponse[]>> {
        const url = DataSourceEndpoints.getAsistencias;

        return firstValueFrom(
            this.http
                .get<any[]>(url)
                .pipe(
                    map((response: AsistenciaResponse[]) => {
                        const asistencias = response.map((p) =>
                            plainToInstance(AsistenciaResponse, p))
                        return right(asistencias)
                    }),
                    catchError((error: HttpErrorResponse) => {
                        let exception: Error = new Error(error.message);

                        if (error.status === 400) {
                            exception = new BadRequestException(error.message);
                        }
                        if (error.status === 401) {
                            exception = new BadCredencialsException(error.message);
                        }
                        if (error.status === 403) {
                            exception = new ForbiddenException(error.message);
                        }
                        if (error.status === 404) {
                            exception = new ResourceNotFoundException(error.message);
                        }
                        if (error.status === 408) {
                            exception = new TimeoutException(error.message);
                        }
                        if (error.status === 500) {
                            exception = new InternalServerException(error.message);
                        }

                        return of(left(exception));
                    })
                ))
    }
}
