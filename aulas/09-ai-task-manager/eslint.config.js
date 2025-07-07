// eslint.config.js
import eslintPluginTS from '@typescript-eslint/eslint-plugin'
import parserTS from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

/** @type {import('@eslint/flat-config').ConfigItem[]} */
export default [
  {
    languageOptions: {
      parser: parserTS,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        React: 'writable',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      '@typescript-eslint': eslintPluginTS,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginTS.configs.recommended.rules,
      ...prettier.rules,
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
  },
]
