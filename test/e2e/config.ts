import { Browser, Page } from "puppeteer";

export type Tests = Array<{
  name: string; // Name of the screenshot, without the extension like for example 'example-basic'
  url: string; // Url of the page to take in screenshot
  waitFor?: number; // Time to wait in ms before to take the screenshot
  scenario?: (browser: Browser, page: Page) => Promise<void>;
  failureThreshold?: number; // between 0 and 1, it's a percent. By default it's 0.
}>;

// wait for 2500 = wait for the stop of FA2
// failureThreshold is due to the FA2 tahat doesn't do the exact same number of frame
// TODO: need a better way on how to handle that, 25% is an impiric guess
export const tests: Tests = [
  { name: "complete", url: "http://localhost:8000/complete.html?seed=foo", waitFor: 2500, failureThreshold: 0.25 },
  { name: "multiple", url: "http://localhost:8000/multiple.html?seed=foo", waitFor: 2500, failureThreshold: 0.25 },
];
