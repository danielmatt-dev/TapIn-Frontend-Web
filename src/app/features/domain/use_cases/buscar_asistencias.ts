import { NoParams, UseCase } from '../../../shared/utils/use_case';
import { Injectable } from '@angular/core';
import { AsistenciaResponse } from '../entities/asistencia_response';
import { AsistenciasResponseMapperImp } from '../../data/mapper/asistencias_mapper_imp';
import { Either, right } from 'fp-ts/Either';
import { DataSourceRemoteImpl } from '../../data/data_sources/remote/impl/data_source_impl';

@Injectable({ providedIn: 'root' })
export class BuscarAsistencias implements UseCase<AsistenciaResponse[] , NoParams>{
    constructor(
        private readonly dataSource: DataSourceRemoteImpl,
        private readonly mapper: AsistenciasResponseMapperImp
    ) {
    }

    async call(_: NoParams): Promise<Either<Error, AsistenciaResponse[]>> {
        const result = await this.dataSource.buscarAsistencias()

        if (result._tag === 'Left') {
            return result
        }

        const mapped = result.right.map(m => this.mapper.toEntity(m));
        return right(mapped)
    }
}

