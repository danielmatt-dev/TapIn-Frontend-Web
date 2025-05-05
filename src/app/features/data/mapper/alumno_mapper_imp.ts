import { Mapper } from '../../../shared/utils/mapper';
import { AlumnoRequestModel } from '../models/alumno_request.model';
import { Injectable } from '@angular/core';
import { AlumnoRequest, TipoAcceso } from '../../domain/entities/alumno_request';

@Injectable({
    providedIn: 'root'
})

export class AlumnoMapperImp
    implements Mapper<AlumnoRequest, AlumnoRequestModel>
{
    toEntity(model: AlumnoRequestModel): AlumnoRequest {
        // Le paso el string tipoAcceso al constructor de AlumnoRequest,
        // que internamente asigna tipoAccesoEnum según tu setter.
        return new AlumnoRequest(
            model.idNfc,
            model.fecha,
            model.hora,
            model.tipoAcceso
        );
    }

    toModel(entity: AlumnoRequest): AlumnoRequestModel {
        // Convierto el enum de vuelta a su clave string ("Entrada"|"Salida")
        const tipoAccesoStr = entity.tipoAccesoEnum != null
            ? TipoAcceso[entity.tipoAccesoEnum]
            : undefined;

        // Uso el constructor basado en options de AlumnoRequestModel
        return new AlumnoRequestModel({
            idNfc:      entity.idNfc,
            fecha:      entity.fecha,
            hora:       entity.hora,
            tipoAcceso: tipoAccesoStr
        });
    }
}
