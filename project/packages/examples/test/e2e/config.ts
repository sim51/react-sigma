import { Browser, Page } from "puppeteer";

export type Tests = Array<{
  name: string; // Name of the screenshot, without the extension like for example 'example-basic'
  url: string; // Url of the page to take in screenshot
  waitFor?: number; // Time to wait in ms before to take the screenshot
  scenario?: (browser: Browser, page: Page) => Promise<void>;
  failureThreshold?: number; // between 0 and 1, it's a percent. By default it's 0.
}>;

// wait for 2500 = wait for the stop of FA2
// failureThreshold is due to the FA2 that doesn't do the exact same number of frame
// TODO: need a better way on how to handle that, 25% is an impiric guess
export const tests: Tests = [
  { name: "complete", url: "http://localhost:3000/complete?seed=foo&faTime=-1", waitFor: 200, failureThreshold: 0.001 },
  { name: "multiple", url: "http://localhost:3000/multiple?seed=foo&faTime=-1", waitFor: 200, failureThreshold: 0.001 },
  {
    name: "custom-render",
    url: "http://localhost:3000/custom-render?seed=foo&faTime=-1",
    waitFor: 200,
    failureThreshold: 0.001,
  },
  {
    name: "multidirectedgraph",
    url: "http://localhost:3000/multidirectedgraph?seed=foo&faTime=-1",
    waitFor: 200,
    failureThreshold: 0.001,
  },
  {
    name: "external",
    url: "http://localhost:3000/external?seed=foo&faTime=-1",
    waitFor: 200,
    failureThreshold: 0.001,
  },
  {
    name: "custom-graph-external",
    url: "http://localhost:3000/custom-graph-external?seed=foo&faTime=-1",
    waitFor: 200,
    failureThreshold: 0.001,
  },
];
