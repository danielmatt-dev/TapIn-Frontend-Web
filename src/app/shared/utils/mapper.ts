export abstract class Mapper<Entity, Model> {

    abstract toEntity(model: Model): Entity;
    abstract toModel(entity: Entity): Model;
}
