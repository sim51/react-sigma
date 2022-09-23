import { Browser, Page } from "puppeteer";

export type Tests = Array<{
  name: string; // Name of the screenshot, without the extension like for example 'example-basic'
  url: string; // Url of the page to take in screenshot
  waitFor?: number; // Time to wait in ms before to take the screenshot
  scenario?: (browser: Browser, page: Page) => Promise<void>;
  failureThreshold?: number; // between 0 and 1, it's a percent. By default it's 0.
}>;

export const tests: Tests = [
  {
    name: "complete",
    url: "http://localhost:6006/iframe.html?args=&id=examples-standard--standard&viewMode=story&seed=foo&faTime=-1",
    waitFor: 100,
    failureThreshold: 0.001,
  },
  {
    name: "multiple",
    url: "http://localhost:6006/iframe.html?args=&id=examples-multiples--multiples&viewMode=story&seed=foo&faTime=-1",
    waitFor: 100,
    failureThreshold: 0.001,
  },
  {
    name: "custom-buttons",
    url: "http://localhost:6006/iframe.html?args=&id=examples-custom--custom&viewMode=story&seed=foo&faTime=-1",
    waitFor: 100,
    failureThreshold: 0.001,
  },
];
