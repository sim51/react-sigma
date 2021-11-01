/**
 * The goal of this file is to seed random generators if the query params 'seed' is present.
 * As an example you can go to http://localhost:8000/components.html?seed=foo and refresh multiple times the page
 * you should have the result. This feature is mainly used for the E2E test.
 *
 * For now it :
 * - replace the global `Math.random` with a seed one
 * - seed the faker library
 */
import faker from "faker";
import seedrandom from "seedrandom";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const seedParam = urlParams.get("seed");
if (seedParam) {
  seedrandom(seedParam, { global: true });
  faker.seed(Math.random());
}
const rng = seedParam ? seedrandom(seedParam) : seedrandom();

let faTime: number | undefined = undefined;
const faTimeParam = urlParams.get("faTime");
if (faTimeParam && !Number.isNaN(Number.parseInt(faTimeParam))) {
  faTime = Number.parseInt(faTimeParam);
}
export { faTime, rng };
