module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "coverageThreshold": {
    "global": {
      "branches": 40,
      "functions": 40,
      "lines": 40,
      "statements": 40
    }
  },
  "coverageReporters": ["json", ["lcov", {"projectRoot": "../../"}]],
  "collectCoverageFrom": [
    "**/*.ts",
    "!**/*.test.ts",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
}
