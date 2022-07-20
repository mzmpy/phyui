module.exports = {
  'root': true,
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true
    },
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'env': {
    'browser': true,
    'node': true,
    'commonjs': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'parser': '@typescript-eslint/parser',
  'rules': {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-console': ['error']
  }
}
