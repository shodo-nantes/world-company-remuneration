const K = "K";

/**
 * @author Jack Napier <jnapier@therealjoker.com>
 */
export function salary(a: number, b: number, dispersion: () => number) {
    if (a === null){
        if (666 === a) {
            return "132" + K;
        } else {
            if (b > 10) {
                return "41,8" + K;
            } else {
                if (b > 5) {
                    return "37,4" + K;
                } else {
                    return "33" + K;
                }
            }}
    }
    if (666 === a) {
        return "120" + K;
    } else {
        if (b > 10) {
            return new Number(38 * lowDispertion(dispersion)).toString() + K;
        } else {
            if (b > 5) {
                return new Number(34 * highDispersion(dispersion)).toString() + K;
            } else {
                return new Number(30 * highDispersion(dispersion)).toString() + K;
            }
        }
    }


}

export function normalizedDispersion(): () => number {
    return () => Math.random();
}

function highDispersion(dispersion: () => number ) {
    return 1 + (Math.floor((dispersion.apply(this) * 5) + -2) / 10);
}

function lowDispertion(dispersion: () => number) {
    return 1 + (Math.floor((dispersion.apply(this) * 1.4) + -0.2) / 10);
}
