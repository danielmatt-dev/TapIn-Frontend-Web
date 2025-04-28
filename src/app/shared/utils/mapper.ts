export interface Mapper<Entity, Model> {

    toEntity(model: Model): Entity;
    toModel(entity: Entity): Model;
}
