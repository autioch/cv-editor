module.exports = {
  'extends': 'qb',
  parser: 'babel-eslint',
  rules: {
    'id-blacklist': ['off'],
    'id-length': ['off'],
    'no-unused-vars': ['error', {
      varsIgnorePattern: 'React'
    }]
  },
  ecmaFeatures: {
    classes: true,
    jsx: true
  },
  plugins: [
    'react'
  ]
};
