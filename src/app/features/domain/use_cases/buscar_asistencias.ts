import { UseCase } from '../../../shared/utils/use_case';
import { Injectable } from '@angular/core';
import { AsistenciasResponse } from '../entities/asistencia_response';
import { Either } from 'fp-ts/Either';
import { DataSourceRemoteImpl } from '../../data/data_sources/remote/impl/data_source_impl';

@Injectable({ providedIn: 'root' })
export class BuscarAsistencias implements UseCase<AsistenciasResponse , BuscarAsistenciasParams>{
    constructor(
        private readonly dataSource: DataSourceRemoteImpl
    ) {
    }

    async call(buscarAsistenciasParams: BuscarAsistenciasParams): Promise<Either<Error, AsistenciasResponse>> {
       return await this.dataSource.buscarAsistencias(buscarAsistenciasParams.fechaInicio, buscarAsistenciasParams.fechaFin)
    }
}

export class BuscarAsistenciasParams {
    fechaInicio: string;
    fechaFin: string;

    constructor(fechaInicio: string, fechaFin: string) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}

