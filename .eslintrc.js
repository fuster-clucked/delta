module.exports = {

  extends: 'eslint:recommended',
  env: {
    es6: true,
    node: true
  },
  rules: {
    indent: [ 'error', 'tab' ],
    quotes: [ 'error', 'single', { avoidEscape: true } ],
    semi: [ 'error', 'never' ]
  }

}
