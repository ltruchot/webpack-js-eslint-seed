module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-restricted-syntax': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'vars-on-top': 0,
    'func-names': 0,
    'linebreak-style': 0,
    'max-len': [
      'error',
      80,
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/prefer-default-export': 0
  },
};
