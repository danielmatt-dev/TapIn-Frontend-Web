import { Mapper } from '../../../shared/utils/mapper';
import { InscripcionResponse } from '../../domain/entities/inscripcion_response';
import { InscripcionResponseModel } from '../models/inscripcion_response.model';

export class InscripcionResponseMapperImp
    implements Mapper<InscripcionResponse, InscripcionResponseModel> {
    toEntity(model: InscripcionResponseModel): InscripcionResponse {
        return new InscripcionResponse(

        );
    }

    toModel(entity: InscripcionResponse): InscripcionResponseModel {
        return undefined;
    }

}
