import { Mapper } from '../../../shared/utils/mapper';
import { BloqueResponse, Estado } from '../../domain/entities/bloque_response';
import { BloqueResponseModel } from '../models/bloque_response.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class BloqueMapperImp
    implements Mapper<BloqueResponse, BloqueResponseModel> {
    toEntity(model: BloqueResponseModel): BloqueResponse {
        return new BloqueResponse(
            model.idBloque,
            model.meses,
            model.estado
        );
    }

    toModel(entity: BloqueResponse): BloqueResponseModel {
        const estadoStr = entity.estadoEnum != null
            ? Estado[entity.estadoEnum] : undefined;

        return new BloqueResponseModel({
            idBloque: entity.idBloque,
            meses: entity.meses,
            estado: estadoStr
        });
    }
}
