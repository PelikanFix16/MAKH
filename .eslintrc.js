module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    es6: true
  },
  plugins: ["import"],
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
    "eslint-config-prettier"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error",
    "lines-between-class-members": ["error", "always"],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "no-use-before-define": 0
  },
  parser: "babel-eslint"
};
