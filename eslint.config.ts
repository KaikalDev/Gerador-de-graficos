import globals from 'globals'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },

    plugins: {
      react,
      '@typescript-eslint': tseslint.plugin,
      prettier
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'no-undef': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      'prettier/prettier': 'error'
    },

    settings: {
      react: { version: 'detect' }
    }
  }
])
