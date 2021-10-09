import * as Console from "console";

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
            let currentDispersion = lowDispertion(dispersion);
            console.log("currentdispersion is "+ currentDispersion);
            return new Number(38 * currentDispersion).toString() + K;
        } else {
            let currentDispersion = highDispersion(dispersion);
            console.log("currentdispersion is "+ currentDispersion);
            if (b > 5) {
                return new Number(34 * currentDispersion).toString() + K;
            } else {
                return new Number(30 * currentDispersion).toString() + K;
            }
        }
    }


}

export function normalizedDispersion(): () => number {
    return () => Math.random();
}

function highDispersion(dispersion: () => number ) {
    let real = dispersion.apply(this);
    console.log("high starts at "+ real);
    return 1 + (Math.floor((real * 5) + -2) / 10); // 0-1 / 0-5 / -2/3 / -0.2/+0.3
}

function lowDispertion(dispersion: () => number) {
    let real = dispersion.apply(this);
    console.log("low starts at "+ real);
    return 1 + (Math.floor((real * 1.4) + -0.2) / 10); // 0-1 / 0-1.4 / 0.2-1.2 / 0.02-0.12
}
