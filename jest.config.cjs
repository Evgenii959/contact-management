module.exports = {
  collectCoverage: true,
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vuetify$": "<rootDir>/node_modules/vuetify/dist/vuetify.js",
    // if are using vuetify
    "\\.(css)$": "<rootDir>/test/mocks/emptyMock.js",
    "^@vue/test-utils":
      "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js",
    "^@nuxt/test-utils/runtime$":
      "<rootDir>/node_modules/@nuxt/test-utils/dist/runtime",
  },
  moduleFileExtensions: ["js", "mjs", "ts", "vue"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "coverage",
        outputName: "jest-junit.xml",
      },
    ]
  ],
  transform: {
    "^.+\\.(js|mjs)x?$": "babel-jest",
    "^.+\\.(ts)$": "ts-jest",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  modulePathIgnorePatterns: ["node_modules"],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  testEnvironment: "jest-environment-jsdom",
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!vuetify)"],
  // if are using vuetify
  verbose: true,
};

