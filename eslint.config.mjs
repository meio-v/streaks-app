// eslint.config.js
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/*.config.ts', '**/tailwind.config.ts', '**/.next/**'],
    languageOptions: {
      parser: tsParser, // Import the parser and pass it directly
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      prettier: prettierPlugin,
      next: nextPlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-explicit-any': 'off',
      'prettier/prettier': 'error', // Enforce Prettier
    },
  },
  prettierConfig, // Prettier rules override
];