import {normalizedDispersion, salary} from "../../src/world-company-remuneration/salary-calculator-service-impl";
import mock = jest.mock;

describe("salary dispersion", () => {
    test("normalized dispersion which actually is standard random which is a tested library we don't need to test again", () => {
        for (const iteration of Array.from({length: 100}, (v, k) => k + 1)) {
            let actual = normalizedDispersion();
            expect(actual).toBeLessThan(1);
            expect(actual).toBeGreaterThanOrEqual(0);
        }
    });
});
describe("SALARY FOR", () => {

    test("SATANSON", () => {
        expect(salary(666, 1)).toBe("120K");
    });

    test("ACTUAL EMPLOYEES", () => {
        expect(salary(1, 5)).toBe("30K");
        expect(salary(1, 6)).toBe("34K");
        expect(salary(1, 11)).toBe("38K");
    });
});
