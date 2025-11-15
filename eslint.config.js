import config from 'aberlaas/configs/eslint';

export default [
  ...config,
  {
    rules: {
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-param': 'off',
      'jsdoc/require-param-name': 'off',
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-param-description': 'off',
      'jsdoc/require-returns': 'off',
    },
  },
];
