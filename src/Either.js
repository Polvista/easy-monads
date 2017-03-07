class EitherBase {
    constructor(value) {
        this.value = value;
    }

    isRight() {
        return false;
    }

    isLeft() {
        return false;
    }
}

class EitherRight extends EitherBase {
    map(func) {
        return Right(func(this.value));
    }

    fold(lFunc, rFunc) {
        return rFunc(this.value);
    }

    chain(func) {
        return func(this.value);
    }

    isRight() {
        return true;
    }
}

class EitherLeft extends EitherBase {

    map(func) {
        return this;
    }

    fold(lFunc, rFunc) {
        return lFunc(this.value);
    }

    chain(func) {
        return this;
    }

    isLeft() {
        return true;
    }
}

Either.fromNullable = function(value) {
    return value == null ? Left(value) : Right(value);
};

Either.of = function(value) {
    return Right(value);
};

export function Left(error) {
    return new EitherLeft(error);
}

export function Right(value) {
    return new EitherRight(value);
}

export function Either() {}