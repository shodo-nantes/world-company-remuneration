import {normalizedSpread, salary} from "../../src/world-company-remuneration/salary-calculator-service-impl";

const highestSpreadBoundaryExcluded = 1;
const lowestSpreadBoundaryIncluded = 0;
describe("salary spread", () => {
    test("normalized spread which actually is standard random which is a tested library we don't need to test again", () => {
        for (const iteration of Array.from({length: 1000}, (v, k) => k + 1)) {
            let actual = normalizedSpread().apply(this);
            expect(actual).toBeLessThan(highestSpreadBoundaryExcluded);
            expect(actual).toBeGreaterThanOrEqual(lowestSpreadBoundaryIncluded);
        }
    });
});
describe("SALARY FOR", () => {

    test("Satan Daughter", () => {
        expect(salary(666, 1)).toBe("120K");
    });

    test("ACTUAL JUNIOR EMPLOYEES", () => {
        const spread = jest.fn<number, any[]>();
        spread.mockReturnValueOnce(lowestSpreadBoundaryIncluded);
        expect(salary(1, 5, spread)).toBe((30*0.8)+"K");
        spread.mockReturnValueOnce(highestSpreadBoundaryExcluded);
        expect(salary(1, 5, spread)).toBe((30*1.3)+"K");
    });

    test("ACTUAL CONFIRMED EMPLOYEES", () => {
        const spread = jest.fn<number, any[]>();
        spread.mockReturnValueOnce(lowestSpreadBoundaryIncluded);
        expect(salary(1, 6, spread)).toBe((34*0.8)+"K");
        spread.mockReturnValueOnce(highestSpreadBoundaryExcluded);
        expect(salary(1, 6, spread)).toBe((34*1.3)+"K");
    });

    test("ACTUAL SENIOR EMPLOYEES", () => {
        const spread = jest.fn<number, any[]>();
        spread.mockReturnValueOnce(lowestSpreadBoundaryIncluded);
        expect(salary(1, 11, spread)).toBe((38*0.9)+"K");
        spread.mockReturnValueOnce(highestSpreadBoundaryExcluded);
        expect(salary(1, 11, spread)).toBe((38*1.1)+"K");
    });

    test("NEW JUNIOR EMPLOYEES", () => {
        expect(salary(null, 5)).toBe(Math.floor(30*110/100)+"K");
    });

    test("NEW CONFIRMED EMPLOYEES", () => {
        expect(salary(null, 6)).toBe(Math.floor(34*110)/100+"K");
    });

    test("NEW SENIOR EMPLOYEES", () => {
        expect(salary(null, 11)).toBe(Math.floor(38*110)/100+"K");
    });
});
