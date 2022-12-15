import calculator from "./calculator";

test("1. Sum numbers together", () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test("2. Rest numbers together", () => {
  expect(calculator.rest(5, 1)).toBe(4);
});

test("3. Multiply adds numbers together", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("4. Divide adds numbers together", () => {
  expect(calculator.divide(21, 3)).toBe(7);
});
