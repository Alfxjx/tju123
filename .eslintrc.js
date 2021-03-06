module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: 0,
    quotes: 0,
    'object-curly-spacing': 0,
    'keyword-spacing': 0,
    'space-before-function-paren': 0,
    'no-trailing-spaces': 0

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
