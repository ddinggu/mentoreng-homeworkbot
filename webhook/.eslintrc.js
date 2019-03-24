module.exports = {
  'extends': 'airbnb-base/legacy',
  'parser': 'babel-eslint',
  'env': {
      'jest': true,
  },
  'rules': {
      'comma-dangle': 'off',
      'import/no-unresolved': 'off',
      'no-plusplus': 'off',
      'no-boolean-literal-compare': 'off',
      'no-console': 'off'
  },
  'globals': {
      'fetch': false
  }
}