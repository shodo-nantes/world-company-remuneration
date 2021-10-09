const K = "K";
const SatanDaughterId = 666;
const juniorToConfirmedExperience = 5;
const confirmedToSeniorExperience = 10;

/**
 * @author Jack Napier <jnapier@therealjoker.com>
 */
export function salary(employeeId: number, experience: number, spread: () => number = normalizedSpread()) {
    function isNewEmployee() {
        return employeeId === null;
    }
    let result: string;
    if (isNewEmployee()) {
        if (experience > confirmedToSeniorExperience) {
            result = "41.8" + K;
        } else if (experience > juniorToConfirmedExperience) {
            result = "37.4" + K;
        } else {
            result = "33" + K;
        }
    } else if (SatanDaughterId === employeeId) {
        result = "120" + K;
    } else if (experience > confirmedToSeniorExperience) {
        let currentSpread = lowDispertion(spread); // make it debuggable
        result = Number(38 * currentSpread).toString() + K;
    } else if (experience > juniorToConfirmedExperience) {
        let currentSpread = highSpread(spread); // make it debuggable
        result = Number(34 * currentSpread).toString() + K;
    } else {
        let currentSpread = highSpread(spread); // make it debuggable
        result = Number(30 * currentSpread).toString() + K;
    }
    return result;
}

export function normalizedSpread(): () => number {
    return () => Math.random();
}

function highSpread(spread: () => number) {
    let real = spread.apply(this); // make it debuggable
    return 1 + (Math.floor((real * 5) + -2) / 10); // 0-1 / 0-5 / -2/3 / -0.2/+0.3
}

function lowDispertion(spread: () => number) {
    let real = spread.apply(this); // make it debuggable
    return 1 + (Math.floor((real * 1.4) + -0.2) / 10); // 0-1 / 0-1.4 / 0.2-1.2 / 0.02-0.12
}
