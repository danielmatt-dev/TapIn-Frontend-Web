import { Injectable, OnInit } from '@angular/core';
import { UseCase } from '../../../shared/utils/use_case';
import { Periodo } from '../entities/periodo';
import { boolean } from 'fp-ts';
import { Either } from 'fp-ts/Either';
import { Error } from '../../presentation/pages/auth/error';
import { DataSourcesRemote } from '../../data/data_sources/remote/data_sources';
import { PeriodoMapperImp } from '../../data/mapper/periodo_mapper_imp';

@Injectable({
    providedIn: 'root'
})

export class ActualizarInscripcion implements UseCase<boolean, Periodo> {
    constructor(
        private readonly dataSource: DataSourcesRemote,
        private readonly mapper: PeriodoMapperImp,
    ) {
    }

    async call(params: Periodo): Promise<Either<Error, boolean>> {
        return this.dataSource.actualizarPeriodo(this.mapper.toModel(params))
    }
}
