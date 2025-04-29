import { Mapper } from '../../../shared/utils/mapper';
import { Periodo } from '../../domain/entities/periodo';
import { PeriodoModel } from '../models/periodo.model';
import { Injectable } from '@angular/core';
import { Estado } from '../../domain/entities/bloque_response';

@Injectable({
    providedIn: 'root'
})

export class PeriodoMapperImp
    implements Mapper<Periodo, PeriodoModel> {

    toEntity(model: PeriodoModel): Periodo {
        return new Periodo(
            model.idPeriodo,
            model.nombre,
            model.horaEntrada,
            model.horaSalida,
            model.fechaInicio,
            model.fechaFinal,
            model.bloques,
            model.estado
        );
    }

    toModel(entity: Periodo): PeriodoModel {
        const estadoStr = entity.estadoEnum != null
            ? Estado[entity.estadoEnum] : undefined;

        return new PeriodoModel({
            idPeriodo: entity.idPeriodo,
            nombre: entity.nombre,
            horaEntrada: entity.horaEntrada,
            horaSalida: entity.horaSalida,
            fechaInicio: entity.fechaInicio,
            fechaFinal: entity.fechaFinal,
            bloques: entity.bloques,
            estado: estadoStr
        });
    }
}
