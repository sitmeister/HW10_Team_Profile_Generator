const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UT";
  const employee = new Intern("Ronald", 1, "test@test.com", testValue);
  expect(employee.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const employee = new Intern("Ronald", 1, "test@test.com", "UT");
  expect(employee.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UT";
  const employee = new Intern("Ronald", 1, "test@test.com", testValue);
  expect(employee.getSchool()).toBe(testValue);
});