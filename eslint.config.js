import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default teslint.config({
  ignores: ['dist'],
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    // unused-imports 플러그인 추가
    'unused-imports': require('eslint-plugin-unused-imports'),
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // 사용하지 않는 변수와 import 탐지
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
});
