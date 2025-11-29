import globals from 'globals'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

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
      // react-hooks — manual
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // react
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',

      // TS
      'no-undef': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // prettier
      'prettier/prettier': 'error'
    },

    settings: {
      react: {
        version: 'detect'
      }
    }
  },

  // presets seguros
  tseslint.configs.recommended,
  react.configs.flat.recommended
])
