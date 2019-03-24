module.exports = {
  'extends': [
    'airbnb',
    'import/errors',
    'import/warnings'
  ],
  'parser': 'babel-eslint',
  'env': {
      'jest': true,
  },
  'rules': {
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      'import/no-unresolved': 'off',
      'no-plusplus': 'off',
      'no-boolean-literal-compare': 'off',
  },
  'globals': {
      'fetch': false
  },
  'settings': {
    'import/resolver': {
      'node': {
        'moduleDirectory': ['node_modules', 'src/']
      }
    }
  }
}