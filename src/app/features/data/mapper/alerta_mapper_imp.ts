import { Mapper } from '../../../shared/utils/mapper';
import { AlertaResponse } from '../../domain/entities/alerta_response';
import { AlertaResponseModel } from '../models/alerta_response.model';

export class AlertaRespondeMapperImp
    implements Mapper<AlertaResponse, AlertaResponseModel> {
    toEntity(model: AlertaResponseModel): AlertaResponse {
        return new AlertaResponse(
            model.idAlerta,
            model.titulo,
            model.descripcion
        );
    }

    toModel(entity: AlertaResponse): AlertaResponseModel {
        return new AlertaResponseModel({
           idAlerta: entity.idAlerta,
           titulo: entity.titulo,
           descripcion: entity.descripcion,
        });
    }
}
