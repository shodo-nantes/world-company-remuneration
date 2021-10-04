import {salary} from "../../src/world-company-remuneration/salary-calculator-service-impl";

describe("SALARY FOR", () => {
    test("NEW INCOMERS", () => {
        expect(salary(null, 15)).toBe("41,8K");
        expect(salary(null, 6)).toBe("37,4K");
        expect(salary(null, 1)).toBe("33K");
    });

    test("SATANSON", () => {
        expect(salary(666, 1)).toBe("120K");
    });

    test("ACTUAL EMPLOYEES", () => {
        expect(salary(1, 15)).toBe("38K");
    });

});
