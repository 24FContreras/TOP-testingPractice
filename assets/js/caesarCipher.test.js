import caesarCipher from "./caesarCipher";

test("1 shifts a word", () => {
  expect(caesarCipher("test", 1)).toBe("uftu");
});

test("2 shifts with spaces", () => {
  expect(caesarCipher("a test", 1)).toBe("b uftu");
});

test("3 shifts symbols", () => {
  expect(caesarCipher("a test*", 1)).toBe("b uftu+");
});

test("4 shift with different sums", () => {
  expect(caesarCipher("a test*", 2)).toBe("c vguv,");
});
