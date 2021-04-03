module.exports = {
  ignorePatterns: ['commitlint.config.js', 'stories/.eslintrc.js', '.eslintrc.js'],
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './stories/tsconfig.json', './test/tsconfig.json'],
    tsconfigRootDir: './',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'jest'],
  rules: {
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    'import/extensions': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-props-no-spreading': 'off',
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    'arrow-body-style': ['warn', 'as-needed'],
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'eol-last': ['error', 'always'],
    'no-debugger': 'error',
    'no-nested-ternary': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': ['error', 'never'],
    'import/order': [
      'error',
      {
        groups: ['external', ['sibling', 'parent', 'internal'], 'builtin', 'unknown'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    curly: ['error', 'all'],
    'react/require-default-props': ['warn'],
    'react/default-props-match-prop-types': ['warn'],
    'react/prop-types': ['warn']
  },
}
