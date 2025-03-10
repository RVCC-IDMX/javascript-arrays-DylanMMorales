export default {
  env: {
    browser: true,
    es2021: true
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "no-console": "off",
    "no-trailing-spaces": "error",
    "semi": "error",
    "linebreak-style": ["error", "unix"],
    "prefer-arrow-callback": "off"
  }
};