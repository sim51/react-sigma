module.exports = {
  preset: "jest-puppeteer",
  globals: {
    SERVER_URL: "http://localhost:6006",
  },
  testRegex: "./*\\.spec\\.ts$",
  testTimeout: 120000,
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
console.log("RUNNING E2E INTEGRATION TESTS - MAKE SURE PORT 6006 IS NOT IN USAGE");
