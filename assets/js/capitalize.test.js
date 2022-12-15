import capitalize from "./capitalize";

test("1. capitalizes single word", () => {
  expect(capitalize("string")).toBe("String");
});

test("2. capitalizes multi-word string", () => {
  expect(capitalize("this is notre dame!")).toBe("This is notre dame!");
});
