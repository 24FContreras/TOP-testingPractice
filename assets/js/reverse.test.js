import reverse from "./reverse";

test("1. Reverse a string", () => {
  expect(reverse("dalai lama")).toBe("amal ialad");
});

test("2. Reverse respects spaces", () => {
  expect(reverse("This is a phrase")).toContain(" ");
});
