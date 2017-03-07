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