import { FlatCompat } from '@eslint/eslintrc'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'no-restricted-properties': [
        'error',
        {
          object: 'process',
          property: 'env',
          message:
            'Use the `env` object from `@/env` instead of accessing `process.env` directly.',
        },
      ],

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'process',
              message:
                'Direct import of `process` is forbidden. Use `env` from `@/env` instead.',
            },
            {
              name: 'node:process',
              message:
                'Direct import of `node:process` is forbidden. Use `env` from `@/env` instead.',
            },
          ],
          patterns: ['process/env'],
        },
      ],
    },
  },

  {
    files: ['src/env.ts'],
    rules: {
      'no-restricted-properties': 'off',
      'no-restricted-imports': 'off',
    },
  },
]

export default config
