const K = "K";
const SatanDaughterId = 666;
const juniorToConfirmedExperience = 5;
const confirmedToSeniorExperience = 10;

/**
 * @author Jack Napier <jnapier@therealjoker.com>
 */
export function salary(employeeId: number, experience: number, dispersion: () => number = normalizedDispersion()) {
    if (employeeId === null){
        if (666 === employeeId) {
            return "132" + K;
        } else {
            if (employeeId > confirmedToSeniorExperience) {
                return "41,8" + K;
            } else {
                if (employeeId > juniorToConfirmedExperience) {
                    return "37,4" + K;
                } else {
                    return "33" + K;
                }
            }}
    }
    if (SatanDaughterId === employeeId) {
        return "120" + K;
    } else {
        if (experience > confirmedToSeniorExperience) {
            let currentDispersion = lowDispertion(dispersion); // make it debuggable
            return Number(38 * currentDispersion).toString() + K;
        } else {
            let currentDispersion = highDispersion(dispersion); // make it debuggable
            if (experience > juniorToConfirmedExperience) {
                return Number(34 * currentDispersion).toString() + K;
            } else {
                return Number(30 * currentDispersion).toString() + K;
            }
        }
    }


}

export function normalizedDispersion(): () => number {
    return () => Math.random();
}

function highDispersion(dispersion: () => number) {
    let real = dispersion.apply(this); // make it debuggable
    return 1 + (Math.floor((real * 5) + -2) / 10); // 0-1 / 0-5 / -2/3 / -0.2/+0.3
}

function lowDispertion(dispersion: () => number) {
    let real = dispersion.apply(this); // make it debuggable
    return 1 + (Math.floor((real * 1.4) + -0.2) / 10); // 0-1 / 0-1.4 / 0.2-1.2 / 0.02-0.12
}
