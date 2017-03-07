class MaybeBase {
    isJust() {
        return false;
    }

    isNothing() {
        return false;
    }
}

class Nothing extends MaybeBase {

    map(func) {
        return this; // do nothing
    }

    getOrElse(defaultValue) {
        return defaultValue;
    }

    isNothing() {
        return true;
    }
}

class Just extends MaybeBase {

    constructor(value) {
        super();
        this.value = value;
    }

    map(func) {
        return Maybe.of(func(this.value));
    }

    getOrElse(defaultValue) {
        return this.value;
    }

    isJust() {
        return true;
    }
}

const nothing = new Nothing();

Maybe.Just = function(value) {
    return new Just(value);
};

Maybe.Nothing = function () {
    return nothing;
};

Maybe.of = function(value) {
    return value != null ? Maybe.Just(value) : Maybe.Nothing();
};

export function Maybe(value) {
    return Maybe.of(value);
}


