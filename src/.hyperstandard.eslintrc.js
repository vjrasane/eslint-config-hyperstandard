module.exports = {
  env: {
    node: true,
    es6: true
  },
  parser: 'babel-eslint',
  extends: 'standard',
  rules: {
    'no-console': 'warn',
    'prefer-template': 'error',
    'prefer-destructuring': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'require-await': 'error',
    'no-await-in-loop' : 'error',
    'max-len': ['error', {
      code: 150,
    }],
    'no-underscore-dangle': ['error'],
    'import/prefer-default-export': ['error'],
  }
}
