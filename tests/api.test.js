import { expect, test } from "vitest";

test("GitHub API returns the right response", async () => {
  const data = await fetch(
    "https://api.github.com/repos/Hoangphuvan/npm-experiment/contents/test.txt",
  ).then((res) => res.json());
  expect(data.name).toBe("test.txt");
  expect(data.path).toBe("test.txt");
});
