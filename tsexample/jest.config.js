module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        "\\.tsx?$": "ts-jest"
    },
    collectCoverage:true,
    collectCoverageFrom: ['src/**/*.ts'],
    "coverageThreshold": {
        "global": {
          "branches": 50,
          "functions": 50,
          "lines": 50,
          "statements": 50
        }
      },
      coverageReporters: ["clover", "json", "lcov", "text"]
}