import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react'; // 1. ДОБАВИТЬ ЭТОТ ИМПОРТ
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Добавили поддержку TS на будущее
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: react // 2. ЗАРЕГИСТРИРОВАТЬ ПЛАГИН
    },
    // В Flat Config секция 'extends' внутри объекта не работает так же, как раньше.
    // Обычно конфиги подмешиваются через spread оператор (...),
    // но раз у тебя 'defineConfig', давай добавим правила вручную:
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // 3. ТО САМОЕ ПРАВИЛО ДЛЯ ССЫЛОК
      'react/jsx-no-target-blank': ['error', { allowReferrer: false }],
      semi: ['error', 'always'], // 'error' — ругаться, 'always' — всегда требовать точку
      'comma-dangle': ['error', 'never'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'react/prop-types': [0]
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: {
      react: {
        version: 'detect' // Авто-определение версии React
      }
    }
  }
]);
