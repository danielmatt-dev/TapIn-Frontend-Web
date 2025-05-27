import { Mapper } from '../../../shared/utils/mapper';
import { AsistenciasResponse } from '../../domain/entities/asistencia_response';
import { AsistenciasRespondeModel } from '../models/asistencias_response.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AsistenciasResponseMapperImp implements Mapper<AsistenciasResponse, AsistenciasRespondeModel> {

    toEntity(model: AsistenciasRespondeModel): AsistenciasResponse {
        return new AsistenciasResponse(
            model.asistencias,
            model.alertas
        );
    }

    toModel(entity: AsistenciasResponse): AsistenciasRespondeModel {
        return new AsistenciasRespondeModel({
            asistencias: entity.asistencias,
            alertas: entity.alertas,
        });
    }

}
