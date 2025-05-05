import { Mapper } from '../../../shared/utils/mapper';
import { AsistenciaResponse } from '../../domain/entities/asistencia_response';
import { AsistenciasRespondeModel } from '../models/asistencias_response.model';

export class AsistenciasResponseMapperImp
    implements Mapper<AsistenciaResponse, AsistenciasRespondeModel> {
    toEntity(model: AsistenciasRespondeModel): AsistenciaResponse {
        return new AsistenciaResponse(
            model.alumnos,
            model.inscripciones,
            model.alertas
        );
    }

    toModel(entity: AsistenciaResponse): AsistenciasRespondeModel {
        return new AsistenciasRespondeModel({
            alumnos: entity.alumnos,
            inscripciones: entity.inscripciones,
            alertas: entity.alertas,
        });
    }
}
