import assert from "assert";
import * as path from "path";
import waitOn from "wait-on";
import { imageDiff, takeScreenshots } from "./utils";
import { tests } from "./config";

describe("Compare screenshots", () => {
  beforeAll(async () => {
    await waitOn({
      resources: [`http://localhost:3000`],
      interval: 1000,
      timeout: 120000,
    });
    // taking screenshots
    await takeScreenshots(tests, path.resolve(`./test/e2e/screenshots`), "current");
  });

  // Compare screenshots with reference
  tests.forEach((test) => {
    it(`Screenshots for "${test.name}" should be the same`, () => {
      const result = imageDiff(
        path.resolve(`./test/e2e/screenshots/${test.name}.valid.png`),
        path.resolve(`./test/e2e/screenshots/${test.name}.current.png`),
        path.resolve(`./test/e2e/screenshots/${test.name}.diff.png`),
      );
      assert(
        result.percent <= (test.failureThreshold || 0),
        `There is a diff over ${test.failureThreshold || 0} (${result.percent}) on ${test.name}, please check "${
          test.name
        }.diff.png"`,
      );
    });
  });
});
