module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "prettier/prettier": "off",
    'quotes': [1, 'single'],
    'semi': [2, 'never'],
    'generator-star-spacing': 'off',
    "object-curly-spacing": [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: false
      }
    ],
    "array-bracket-spacing": ["error","always"],
    "object-curly-spacing": ["error","always"],
    "array-bracket-spacing": ["error","never"],
    "no-nested-ternary": 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
