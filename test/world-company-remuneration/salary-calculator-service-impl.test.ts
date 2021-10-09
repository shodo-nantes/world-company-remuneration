import {normalizedDispersion, salary} from "../../src/world-company-remuneration/salary-calculator-service-impl";

const highestDispersionBoundaryExcluded = 1;
const lowestDispersionBoundaryIncluded = 0;
describe("salary dispersion", () => {
    test("normalized dispersion which actually is standard random which is a tested library we don't need to test again", () => {
        for (const iteration of Array.from({length: 1000}, (v, k) => k + 1)) {
            let actual = normalizedDispersion().apply(this);
            expect(actual).toBeLessThan(highestDispersionBoundaryExcluded);
            expect(actual).toBeGreaterThanOrEqual(lowestDispersionBoundaryIncluded);
        }
    });
});
describe("SALARY FOR", () => {

    test("Satan Daughter", () => {
        expect(salary(666, 1)).toBe("120K");
    });

    test("ACTUAL JUNIOR EMPLOYEES", () => {
        const dispersion = jest.fn<number, any[]>();
        dispersion.mockReturnValueOnce(lowestDispersionBoundaryIncluded);
        expect(salary(1, 5, dispersion)).toBe((30*0.8)+"K");
        dispersion.mockReturnValueOnce(highestDispersionBoundaryExcluded);
        expect(salary(1, 5, dispersion)).toBe((30*1.3)+"K");
    });

    test("ACTUAL CONFIRMED EMPLOYEES", () => {
        const dispersion = jest.fn<number, any[]>();
        dispersion.mockReturnValueOnce(lowestDispersionBoundaryIncluded);
        expect(salary(1, 6, dispersion)).toBe((34*0.8)+"K");
        dispersion.mockReturnValueOnce(highestDispersionBoundaryExcluded);
        expect(salary(1, 6, dispersion)).toBe((34*1.3)+"K");
    });

    test("ACTUAL SENIOR EMPLOYEES", () => {
        const dispersion = jest.fn<number, any[]>();
        dispersion.mockReturnValueOnce(lowestDispersionBoundaryIncluded);
        expect(salary(1, 11, dispersion)).toBe((38*0.9)+"K");
        dispersion.mockReturnValueOnce(highestDispersionBoundaryExcluded);
        expect(salary(1, 11, dispersion)).toBe((38*1.1)+"K");
    });
});
