const K = "K";
const SatanDaughterId = 666;
const juniorToConfirmedExperience = 5;
const confirmedToSeniorExperience = 10;

/**
 * @author Jack Napier <jnapier@therealjoker.com>
 */
export function salary(employeeId: number, experience: number, spread: () => number = normalizedSpread()) {
    if (isNewEmployee(employeeId)) {
        return newEmployeeSalaries(experience);
    }
    if (isCeosDaughter(employeeId)) {
        return confidentialCeosDaughterSalary();
    }
    return actualEmployeeSalaries(experience, spread);
}

function newEmployeeSalaries(experience: number) {
    if (isSenior(experience)) {
        return "41.8" + K;
    }
    if (isConfirmedOrMore(experience)) {
        return "37.4" + K;
    }
    return "33" + K;
}

function confidentialCeosDaughterSalary() {
    return "120" + K;
}

function actualEmployeeSalaries(experience: number, spread: () => number) {
    if (isSenior(experience)) {
        let currentSpread = lowDispertion(spread);
        return Number(38 * currentSpread).toString() + K;
    }
    let currentSpread = highSpread(spread);
    if (isConfirmedOrMore(experience)) {
        return Number(34 * currentSpread).toString() + K;
    }
    return Number(30 * currentSpread).toString() + K;
}

function isSenior(experience: number) {
    return experience > confirmedToSeniorExperience;
}

function isConfirmedOrMore(experience: number) {
    return experience > juniorToConfirmedExperience;
}

function isCeosDaughter(employeeId: number) {
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
