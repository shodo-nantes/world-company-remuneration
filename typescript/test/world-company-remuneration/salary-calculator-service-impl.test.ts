import {salary} from "../../src/world-company-remuneration/salary-calculator-service-impl";

describe("SALARY FOR", () => {

    test("SATANSON", () => {
        expect(salary(666, 1)).toBe("120K");
    });

    test("ACTUAL EMPLOYEES", () => {
        expect(salary(1, 15)).toBe("38K");
    });

});
