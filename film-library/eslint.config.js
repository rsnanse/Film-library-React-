import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint'; // Импортируем новый пакет
import { defineConfig, globalIgnores } from 'eslint/config';

export default tseslint.config(
    // Используем tseslint.config для поддержки TS
    globalIgnores(['dist']),
    {
        // Подключаем рекомендуемые правила для JS и TS
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'], // Применяем настройки к TS файлам
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parser: tseslint.parser, // УСТАНАВЛИВАЕМ TS ПАРСЕР
            parserOptions: {
                project: ['./tsconfig.json'] // Указываем путь к конфигу TS
            }
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            react: react
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'no-unused-vars': 'off', // Отключаем стандартный, так как в TS свой
            '@typescript-eslint/no-unused-vars': ['error'], // Используем TS версию
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/jsx-no-target-blank': ['error', { allowReferrer: false }],
            semi: ['error', 'always'],
            'comma-dangle': ['error', 'never'],
            quotes: ['error', 'single', { avoidEscape: true }],
            'react/prop-types': 'off'
        },
        settings: {
            react: { version: 'detect' }
        }
    }
);
