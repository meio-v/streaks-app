import rootConfig from '../../eslint.config.mjs'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default [
  ...rootConfig,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]
