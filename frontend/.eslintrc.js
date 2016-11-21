module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  env: {
    'browser': true
  },
  rules: {},
  globals: {
    '$': true,
    'google': true,
    'Wkt': true,
    'Highcharts': true,
    '_': true,
    'moment': true,
    'd3': true,
    'swal': true
  }
};
