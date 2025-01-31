import eslint from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import tseslint from 'typescript-eslint';
// https://medium.com/@1608naman/a-flat-attempt-at-the-eslint-flat-config-393005212d67
// https://perfectionist.dev/guide/getting-started

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  {
    // NOTE: Added in a separate object to apply globally because only global `ignores` can match directories.
    ignores: ['!.storybook'], // Ensure the `.storybook` directory is not ignored.
  },

  // EXTENDS: Extends specific set of rules (like recommended) from the different plugins.
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended, // Extends recommended rules for React.
  react.configs.flat['jsx-runtime'], // Use for React 17+ JSX transform. By for example disabling the rule recommended react-in-jsx-scope.
  reactHooks.configs['recommended-latest'], // TODO: Update to 5.2.0 release // TODO: Planned to change to from 'recommended-latest' to 'recommended' in 6.0.0.
  jsxA11y.flatConfigs.recommended,
  ...storybook.configs['flat/recommended'],
  prettierRecommended,

  {
    files: [
      'src/**/*.{js,mjs,cjs,jsx,ts,tsx}', // NOTE: Double asterisk (**) matches files in the directory and subdirectories.
      'eslint.config.js',
      'setupTests.ts',
    ],

    // PARSER: TypeScript & JSX support using the nearest tsconfig.json.
    // More details: https://eslint.org/docs/latest/use/configure/parser
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true, // Source file being linted should use type information based on the nearest tsconfig.json.
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },

      // GLOBAL VARIABLES: Groups of variables globally available during runtime, like `console` in the browser.
      // More details: https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
    },

    // PLUGINS: Declare plugins here to make their rules available in the `rules` object.
    // More details: https://eslint.org/docs/latest/use/configure/plugins
    plugins: {
      perfectionist,
    },

    // RULES: Defines specific linting rules, their severity, and other customizations.
    // NOTE: These rules should come from the installed plugins defined in the `plugins` object.
    // More details: https://eslint.org/docs/latest/use/core-concepts/#rules
    rules: {
      // NOTE: The severity levels are off (0), warning (1), and error (2).

      // [ESLint Rules]
      // Enforces the use of `===` and `!==`.
      eqeqeq: 2,

      // [Perfectionist Rules]
      // IMPORTS ORDER: Enforces a strict and consistent order for import statements in the codebase.
      // NOTE: Disable `source.organizeImports` on `codeActionsOnSave` in VSCode Settings to avoid conflicts.
      'sort/imports': 0, // Note: Disable ESLint's rule to avoid conflicts.
      'perfectionist/sort-imports': [
        2,
        {
          // Natural order. Example: 'item2' < 'item10'.
          type: 'natural',

          // NOTE: Default values explicitly set for clarity.
          newlinesBetween: 'always',
          order: 'asc',
          ignoreCase: true,
          groups: [
            // Built-in or external installed modules. Example: import path from 'path' || import axios from 'axios'
            ['builtin', 'external'],
            // Internal types that are not in the same or parent directory. Example: import type { User } from '~/users'
            'internal-type',
            // Internal modules that are not in the same or parent directory. Example: import Button from '~/components/Button'
            'internal',
            // Parent or current directory types. Example: import type { FooProps } from '../Foo' || './Foo' || './index.d.ts'
            ['parent-type', 'sibling-type', 'index-type'],
            // Parent or current directory modules. Example: import foo from '../utils/foo' || './foo' || '.'
            ['parent', 'sibling', 'index'],
            // Side effect script files. Example: import './set-production-env.js'
            'side-effect',
            // Style files. Example: import './styles.scss' || import styles from './index.module.css'
            'side-effect-style',
            { newlinesBetween: 'never' },
            'style',
          ],
        },
      ],
    },
  },
];
