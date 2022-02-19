module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(tsx|ts)?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  setupFiles: ["jest-canvas-mock"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts)?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
