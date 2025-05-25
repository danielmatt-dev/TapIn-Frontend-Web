import { UseCase } from '../../../shared/utils/use_case';
import { Either } from 'fp-ts/Either';
import { Injectable } from '@angular/core';
import { AlumnoMapperImp } from '../../data/mapper/alumno_mapper_imp';
import { AlumnoRequest } from '../entities/alumno_request';
import { DataSourceRemoteImpl } from '../../data/data_sources/remote/impl/data_source_impl';

@Injectable({ providedIn: 'root' })
export class RegistrarAsistenciaAlumno implements UseCase<boolean, AlumnoRequest>{
    constructor(
        private readonly dataSource: DataSourceRemoteImpl,
        private readonly mapper: AlumnoMapperImp,
    ) {
    }

    async call(params: AlumnoRequest): Promise<Either<Error, boolean>> {
        return this.dataSource.registrarAsistenciaAlumno(this.mapper.toModel(params))
    }
}
