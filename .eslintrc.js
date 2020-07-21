module.exports = {
  root: true,

  env: {
    node: true,
    es6: true,
  },
  extend: ['eslint:recommended'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'arrow-parens': [
      2,
      "as-needed",
      { "requireForBlockBody": true }
    ]
  },
  parserOptions: {
    "sourceType": "module",
  },
};
