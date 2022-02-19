module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(tsx|ts)?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts)?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
