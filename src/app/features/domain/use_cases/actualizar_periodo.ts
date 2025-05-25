import { Injectable } from '@angular/core';
import { UseCase } from '../../../shared/utils/use_case';
import { Periodo } from '../entities/periodo';
import { Either } from 'fp-ts/Either';
import { PeriodoMapperImp } from '../../data/mapper/periodo_mapper_imp';
import { DataSourceRemoteImpl } from '../../data/data_sources/remote/impl/data_source_impl';

@Injectable({
    providedIn: 'root'
})
export class ActualizarPeriodo implements UseCase<boolean, Periodo> {
    constructor(
        private readonly dataSource: DataSourceRemoteImpl,
        private readonly mapper: PeriodoMapperImp
    ) {}

    async call(params: Periodo): Promise<Either<Error, boolean>> {
        return this.dataSource.actualizarPeriodo(this.mapper.toModel(params))
    }
}
