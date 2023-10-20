// eslint.config.js
import antfu from '@antfu/eslint-config';

export default antfu({ vue: true, typescript: true }, {
  rules: {
    'style/brace-style': 'off',
    'ts/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'style/semi': [
      'error',
      'always',
    ],
    'ts/semi': [
      'error',
      'always',
    ],
    'ts/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
});
