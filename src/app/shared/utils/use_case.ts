import { Either } from 'fp-ts/Either';

export abstract class UseCase<T, Params> {
    abstract call(params: Params): Promise<Either<Error, T>>;
}

export class NoParams {}
