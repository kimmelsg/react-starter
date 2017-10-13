// In a file called .eslintrc.js
module.exports = {
  parser: 'typescript-eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        schemaJson: require('./schema.json'),
      },
    ],
  },

  plugins: ['graphql', 'react', 'css-modules'],
  extends: ['plugin:css-modules/recommended'],
};
