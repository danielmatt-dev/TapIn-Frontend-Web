import { Injectable } from '@angular/core';
import { NoParams, UseCase } from '../../../shared/utils/use_case';
import { DataSourceRemoteImpl } from '../../data/data_sources/remote/impl/data_source_impl';
import { Either, right } from 'fp-ts/Either';
import { PeriodoMapperImp } from '../../data/mapper/periodo_mapper_imp';
import { Periodo } from '../entities/periodo';

@Injectable({ providedIn: 'root' })
export class BuscarPeriodos implements UseCase<Periodo[] , NoParams>{
    constructor(
        private readonly dataSource: DataSourceRemoteImpl,
        private readonly mapper: PeriodoMapperImp
    ) {
    }

    async call(_: NoParams): Promise<Either<Error, Periodo[]>> {
        const result = await this.dataSource.buscarPeriodos()

        if (result._tag === 'Left') {
            return result
        }

        const mapped = result.right.map(m => this.mapper.toEntity(m));
        return right(mapped)
    }
}
