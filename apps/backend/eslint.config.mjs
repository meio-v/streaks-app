import rootConfig from '../../eslint.config.mjs'

export default [
  ...rootConfig,
  {
    rules: {
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
]
