import {normalizedDispersion, salary} from "../../src/world-company-remuneration/salary-calculator-service-impl";
import mock = jest.mock;

describe("salary dispersion", () => {
    test("normalized dispersion which actually is standard random which is a tested library we don't need to test again", () => {
        for (const iteration of Array.from({length: 100}, (v, k) => k + 1)) {
            let actual = normalizedDispersion().apply(this);
            expect(actual).toBeLessThan(1);
            expect(actual).toBeGreaterThanOrEqual(0);
        }
    });
});
describe("SALARY FOR", () => {

    test("SATANSON", () => {
        expect(salary(666, 1, normalizedDispersion())).toBe("120K");
    });

    test("ACTUAL EMPLOYEES", () => {
        expect(salary(1, 5, normalizedDispersion())).toBe("30K");
        expect(salary(1, 6, normalizedDispersion())).toBe("34K");
        expect(salary(1, 11, normalizedDispersion())).toBe("38K");
    });

    test("ACTUAL JUNIOR EMPLOYEES", () => {
        const dispersion = jest.fn<number, any[]>();
        dispersion.mockReturnValueOnce(0);
        expect(salary(1, 5, dispersion)).toBe((30*0.8)+"K");
        dispersion.mockReturnValueOnce(1);
        expect(salary(1, 5, dispersion)).toBe((30*1.3)+"K");
    });
});
