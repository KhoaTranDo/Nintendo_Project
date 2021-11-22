/** @format */

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["eslint-plugin-no-inline-styles", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "no-inline-styles/no-inline-styles": 2,
    "no-console": "warn",
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
        bracketSameLine: false,
        jsxBracketSameLine: false,
        arrowParens: "avoid",
      },
    ],
  },
};
