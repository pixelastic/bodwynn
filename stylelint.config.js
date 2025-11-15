import config from 'aberlaas/configs/stylelint';

export default {
  ...config,
  rules: {
    ...config.rules,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['theme', 'tailwind', 'apply', 'layer', 'config'],
      },
    ],
  },
};
