const K = "K";
const SatanDaughterId = 666;
const juniorToConfirmedExperience = 5;
const confirmedToSeniorExperience = 10;

/**
 * @author Jack Napier <jnapier@therealjoker.com>
 */
export function salary(employeeId: number, experience: number, spread: () => number = normalizedSpread()) {
    if (isNewEmployee(employeeId)) {
        if (experience > confirmedToSeniorExperience) {
            return "41.8" + K;
        }
        if (experience > juniorToConfirmedExperience) {
            return "37.4" + K;
        }
        return "33" + K;
    }
    if (isPdgsDaughter(employeeId)) {
        return "120" + K;
    }
    if (experience > confirmedToSeniorExperience) {
        let currentSpread = lowDispertion(spread); // make it debuggable
        return Number(38 * currentSpread).toString() + K;
    }
    let currentSpread = highSpread(spread); // make it debuggable
    if (experience > juniorToConfirmedExperience) {
        return Number(34 * currentSpread).toString() + K;
    }
    return Number(30 * currentSpread).toString() + K;
}

function isPdgsDaughter(employeeId: number) {
    return SatanDaughterId === employeeId;
}

function isNewEmployee(employeeId: number) {
    return employeeId === null;
}

export function normalizedSpread(): () => number {
    return () => Math.random();
}

function highSpread(spread: () => number) {
    return 1 + (Math.floor((spread.apply(this) * 5) + -2) / 10);
}

function lowDispertion(spread: () => number) {
    return 1 + (Math.floor((spread.apply(this) * 1.4) + -0.2) / 10);
}
