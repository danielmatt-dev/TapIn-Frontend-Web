import { UseCase } from '../../../shared/utils/use_case';
import { Either } from 'fp-ts/Either';
import { Error } from '../../presentation/pages/auth/error';
import { DataSourcesRemote } from '../../data/data_sources/remote/data_sources';
import { Injectable } from '@angular/core';
import { AlumnoMapperImp } from '../../data/mapper/alumno_mapper_imp';

@Injectable({ providedIn: 'root' })

class RegistrarAsistenciaAlumno implements UseCase<boolean, AlumnoRequest>{
    constructor(
        private readonly dataSource: DataSourcesRemote,
        private readonly mapper: AlumnoMapperImp,
    ) {
    }

    async call(params: AlumnoRequest): Promise<Either<Error, boolean>> {
        return this.dataSource.registrarAsistenciaAlumno(this.mapper.toModel(params))
    }
}
