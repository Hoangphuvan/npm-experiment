import { expect, test } from "vitest";

test("GitHub API returns the right response", async () => {
  const data = await fetch(
    "https://api.github.com/repos/Hoangphuvan/npm-experiment/contents/test.txt",
  ).then((res) => res.json());
  // A year has 52 weeks
  //console.log(data);
  //expect(data).toHaveLength(52);
  //expect(Object.keys(data[0])).toEqual(["total", "week", "days"]);
  //expect(Object.keys(data.name)).toEqual("test.txt");
  expect(data.name).toBe("test.txt");
  expect(data.path).toBe("test.txt");
});
