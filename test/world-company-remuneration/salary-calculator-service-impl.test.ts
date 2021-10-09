import {salary} from "../../src/world-company-remuneration/salary-calculator-service-impl";

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
