const K = "K";

/**
 * @author Jack Napier <jnapier@therealjoker.com>
 */
export function salary(a: number, b: number) {
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
            return new Number(38 * lowDispertion()).toString() + K;
        } else {
            if (b > 5) {
                return new Number(34 * highDispersion()).toString() + K;
            } else {
                return new Number(30 * highDispersion()).toString() + K;
            }
        }
    }


}

export function normalizedDispersion() {
    return Math.random();
}

export function highDispersion() {
    return 1 + (Math.floor((normalizedDispersion() * 5) + -2) / 10);
}

export function lowDispertion() {
    return 1 + (Math.floor((normalizedDispersion() * 1.4) + -0.2) / 10);
}

