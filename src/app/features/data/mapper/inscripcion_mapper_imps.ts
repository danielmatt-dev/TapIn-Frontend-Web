import { Mapper } from '../../../shared/utils/mapper';
import { EstadoInscripcion, InscripcionResponse } from '../../domain/entities/inscripcion_response';
import { InscripcionResponseModel } from '../models/inscripcion_response.model';

export class InscripcionResponseMapperImp
    implements Mapper<InscripcionResponse, InscripcionResponseModel> {
    toEntity(model: InscripcionResponseModel): InscripcionResponse {
        return new InscripcionResponse(
            model.idInscripcion,
            model.periodos,
            model.fecha,
            model.grado,
            model.grupo,
            model.estadoInscripcion
        );
    }

    toModel(entity: InscripcionResponse): InscripcionResponseModel {
        const estadoInscripcionStr = entity.estadoInscripcionEnum != null
            ? EstadoInscripcion[entity.estadoInscripcionEnum] : undefined;

        return new InscripcionResponseModel({
            idInscripcion: entity.idInscripcion,
            periodos: entity.periodos,
            fecha: entity.fecha,
            grado: entity.grado,
            grupo: entity.grupo,
            estadoInscripcion: estadoInscripcionStr
        });
    }
}

