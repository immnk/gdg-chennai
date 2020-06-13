module.exports = {
  plugins: ['css-modules'],
  extends: [
    'airbnb',
    'plugin:css-modules/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  env: {
    browser: true,
    jest: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  settings: {
    'import/resolver': {
      alias: [
        ['store', './src/store'],
        ['components', './src/components'],
        ['pages', './src/pages'],
        ['utils', './src/utils']
      ]
    }
  },
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    indent: 'off',
    'no-console': 2,
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off'
  }
};
