import * as path from "path";
import { takeScreenshots } from "./utils";
import { tests } from "./config";

async function exec() {
  try {
    await takeScreenshots(tests, path.resolve(`./test/e2e/screenshots`), "valid");
  } catch (e) {
    console.log("Error on generating screenshots", e);
  } finally {
    process.exit();
  }
}

exec();
