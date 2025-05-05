import { NoParams, UseCase } from '../../../shared/utils/use_case';
import { Injectable } from '@angular/core';
import { AsistenciaResponse } from '../entities/asistencia_response';
import { DataSourcesRemote } from '../../data/data_sources/remote/data_sources';
import { AsistenciasResponseMapperImp } from '../../data/mapper/asistencias_mapper_imp';
import { Either } from 'fp-ts/Either';
import { Error } from '../../presentation/pages/auth/error';

@Injectable({ providedIn: 'root' })

export class BuscarAsistencias implements UseCase<AsistenciaResponse[] , NoParams>{
    constructor(
        private readonly dataSource: DataSourcesRemote,
        private readonly mapper: AsistenciasResponseMapperImp
    ) {
    }

    async call(params: NoParams): Promise<Either<Error, AsistenciaResponse[]>> {
        return this.dataSource.buscarAsistencias()
    }


}

