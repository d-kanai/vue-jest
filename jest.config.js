module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  "moduleNameMapper": {
    "^lodash-es$": "lodash"
  },
  "setupFiles": ["jest-canvas-mock"],
  "collectCoverageFrom": [
    "src/**/*.{ts,vue}",
    "!src/apis/*.ts",
    "!src/main.ts",
  ]
};
