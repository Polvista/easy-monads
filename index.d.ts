interface IMaybeInstance<T> {
    map: <U> (func: (val: T) => U) => IMaybeInstance<U>;
    getOrElse: <U> (defaultValue: U) => T | U;
    isJust: () => boolean;
    isNothing: () => boolean;
}

interface IMaybe {
    <T> (value?: T): IMaybeInstance<T>;
    of: <T> (value?: T) => IMaybeInstance<T>;
    Just: <T> (value: T) => IMaybeInstance<T>;
    Nothing: <T> () => IMaybeInstance<T>;
}

export const Maybe: IMaybe;

interface IEitherInstance<E, V> {
    map: <U> (func: (value: V) => U) => IEitherInstance<E, U>;
    chain: <U> (func: (value: V) => U) => U;
    fold: <E2, V2> (lFunc: (error: E) => E2, rFunc: (value: V) => V2) => E2 | V2;
    isRight: () => boolean;
    isLeft: () => boolean;
}

export function Right<V>(value: V): IEitherInstance<null, V>;
export function Left<E>(err: E): IEitherInstance<E, null>;

interface IEither {
    of: <V> (value: V) => IEitherInstance<null, V>;
    fromNullable: <V> (value?: V) => IEitherInstance<null, V>;
}

export const Either: IEither;