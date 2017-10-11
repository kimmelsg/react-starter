// In a file called .eslintrc.js
module.exports = {
  parser: 'babel-eslint',
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        schemaJson: require('./schema.json'),
      },
    ],
  },
  plugins: ['graphql'],
};
