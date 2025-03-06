# React Component Library Template

This project is an up-to-date template, as of 2025, for building a React Component Library.

It showcases all the configuration for the development using a `<Button />` and `<Input />` components as a placeholder.

This document includes a comprehensible documentation that explains the purpose of all scripts and configuration files, as well as the reasoning behind the structure.

---

## 📋 Table of Contents[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-table-of-contents)

- [🌐 Tech Stack](#-tech-stack)
- [📦 Folder Structure](#-folder-structure)
- [📜 Project Scripts](#-project-scripts)
- [📋 Pre-requisites](#-pre-requisites)
- [🔧 Project Configuration](#-project-configuration)
  - [Configure ESLint](#configure-eslint-)
  - [Configure Prettier](#configure-prettier-)
  - [Configure Package](#configure-package-)
  - [Configure TypeScript](#configure-typescript-)
  - [Configure Vite & DTS](#configure-vite--dts-)
  - [Configure Vitest](#configure-vitest-)
  - [Configure Storybook](#configure-storybook-)
  - [Configure Git Hooks](#configure-git-hooks-)
  - [Configure GitHub Actions](#configure-github-actions-)
- [✍ Create a Component](#-create-a-component)
  - [Create the Component](#create-the-component-)
  - [Add Styles](#add-styles-)
  - [Add Tests](#add-tests-)
  - [Add Storybook](#add-storybook-)
- [🚀 Publish Changes](#-publish-changes)
  - [Build the Library](#build-the-library-)
  - [Generate Release and Deploy](#generate-release-and-deploy-)

---

## 🌐 Tech Stack[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-tech-stack)

| Category                   | Technologies                                                                                                                                                                                                                                                    |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Core**                   | ![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)                                         |
| **Build**                  | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![DTS](https://img.shields.io/badge/Vite_DTS-646CFF?style=for-the-badge)                                                                                        |
| **Code Quality**           | ![ESLint](https://img.shields.io/badge/ESLint_9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)                                             |
| **Testing**                | ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white) ![React Testing Library](https://img.shields.io/badge/React_Testing_Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)               |
| **CI/CD**                  | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white) ![Semantic Release](https://img.shields.io/badge/Semantic_Release-494949?style=for-the-badge&logo=semanticrelease&logoColor=white) |
| **Git Hooks**              | ![LeftHook](https://img.shields.io/badge/LeftHook-FF1E1E?style=for-the-badge&logo=lefthook&logoColor=white)                                                                                                                                                     |
| **Design & Documentation** | ![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)                                                                                                                                                  |

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 📦 Folder Structure[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-folder-structure)

```
└── 📁.github
    └── 📁workflows
        ├── cd.yml
        └── ci.yml
└── 📁.storybook
    ├── main.ts
    └── preview.ts
└── 📁src
    ├── 📁components
    │   ├── 📁Button
    │   │   ├── 📁__docs__
    │   │   │   ├── Button.mdx
    │   │   │   └── Button.stories.tsx
    │   │   ├── 📁__test__
    │   │   │   └── Button.test.tsx
    │   │   ├── Button.css
    │   │   └── Button.tsx
    │   ├── 📁Input
    │   │   ├── 📁__docs__
    │   │   │   ├── Input.mdx
    │   │   │   └── Input.stories.tsx
    │   │   ├── 📁__test__
    │   │   │   └── Input.test.tsx
    │   │   ├── Input.css
    │   │   └── Input.tsx
    │   └── index.ts
    └── index.ts
.gitignore
.prettierrc.mjs
eslint.config.js
eslint.constants.mjs
lefthook.yml
package-lock.json
package.json
README.md
release.config.mjs
setupTests.ts
tsconfig.build.json
tsconfig.json
vite.config.ts
```

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 📜 Project Scripts[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-project-scripts)

<details>
<summary>Show available project scripts</summary>

### 🔨 Build library: `build`

```
tsc -p tsconfig.build.json && vite build
```

### 🖌️ Run Prettier: `format`

```
prettier --write --parser typescript '**/*.{ts,tsx}'
```

### 🔍 Run ESLint: `lint`

```
eslint --fix
```

### 🔍 Run ESLint without automatic fixes: `lint:no-fix`

```
eslint
```

### 🧪 Run tests: `test`

```
vitest run
```

### 🧪 Run tests and watch to rerun on code changes: `test:watch`

```
vitest
```

### 🧪 Run tests with a server GUI: `test:gui`

```
vitest --ui
```

### 📖 Run Storybook server: `storybook`

```
storybook dev -p 6006
```

### 📖 Build Storybook `storybook:build`

```
storybook build
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 📋 Pre-requisites[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-pre-requisites)

This guide assumes that you have knowledge in the following areas:

- **VS Code** (or your preferred IDE/editor): Ensure to have an editor installed to write and manage the code.
- **Node v22**: Have Node v22 installed and understand how to use it for managing dependencies and running the project.
- **Git**: Have Git installed and understand how it works.
- **GitHub**: Experience with GitHub or other Git-based platforms.
- **TypeScript**: Know how TypeScript works to manage types and catch errors.
- **React**: Know how to work with React, such as building JSX components and handling props and state.

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 🔧 Project Configuration[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-project-configuration)

This section covers the essential and optional configurations required to set up, develop, build, and publish the library.

> [!NOTE]
>
> - **ESLint** and **Prettier** are **highly recommended** tools for ensuring code quality and consistent formatting.
> - **Package JSON**, **TypeScript**, **Vite**, and **DTS** are **mandatory** configurations for building and running the project.
> - **Vitest** and **Storybook** are optional tools for testing components and documentation.
> - **Lefthook** and **GitHub Actions** are optional but **recommended** tools for automating jobs with Git hooks and CI/CD pipelines.

<br>

### Configure ESLint <img src="https://cdn.simpleicons.org/eslint/000/4B32C3" alt="ESLint" align=left width=24>

> [!IMPORTANT]
>
> The project is configured with ESLint 9, which introduces a new configuration format called _flat config_.
>
> In the flat config format, the configuration is more modular and declarative, allowing for a clearer and more concise setup.

The `eslint.config.js` is the default configuration file for ESLint, while there is also a `eslint.constants.mjs` file with common objects and configurations for shared use.

The files are self-explanatory, with detailed comments explaining their purpose and functionality.

<details>
<summary>Show code</summary>

#### `eslint.config.js`

```js
/* eslint-disable perfectionist/sort-objects */
import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import {
  booleanPrefixes,
  perfectionistSortObjects,
  perfectionistSortTypes,
} from './eslint.constants.mjs';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  // FILES: A config object only applies to a file if the filename matches a pattern in files (or if there is no files key, in which case it will match all files).
  // RULES: The severity levels are off (0), warning (1), and error (2).

  // GLOBAL IGNORES: Added in a separate object to apply globally and be able to match directories. Only global `ignores` can match directories.
  {
    ignores: ['dist', 'build', 'storybook-static', '!.storybook'], // Ignore some directories but prevent ignoring `.storybook`.
  },

  // SETTINGS: Detect React version automatically for `eslint-plugin-react` rules.
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // EXTENDS: Extends specific set of rules (like recommended) from the different plugins.
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'], // Disables some React recommended rules like `react-in-jsx-scope` not needed in React 17+.
  reactHooks.configs['recommended-latest'], // TODO: Update to 5.2.0 release // NOTE: Planned to change to from 'recommended-latest' to 'recommended' in 6.0.0.
  jsxA11y.flatConfigs.recommended,
  ...storybook.configs['flat/recommended'],
  prettierRecommended,

  // TYPESCRIPT: Specific rules for TypeScript files in separate object to prevent parser conflicts with JS files.
  {
    ignores: ['*.{js,mjs,jsx}'], // Ignore JavaScript files.
    // PARSER: TypeScript & JSX support using the nearest tsconfig.json.
    // More details: https://eslint.org/docs/latest/use/configure/parser
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true, // Linted files will use the type information of the nearest `tsconfig.json`.
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

    rules: {
      // [TYPESCRIPT RULES]
      // Uses the TypeScript no-unused-vars rule instead of the base one.
      'no-unused-vars': 0,
      '@typescript-eslint/no-unused-vars': [
        1,
        {
          // Allow function arguments that start with _
          argsIgnorePattern: '^_',
          // Allow catch arguments that start with _
          caughtErrorsIgnorePattern: '^_',
          // Allow sibling variables of ...rest in destructure objects.
          ignoreRestSiblings: true,
          // Allow variables that start with _
          varsIgnorePattern: '^_',
        },
      ],

      // Uses the TypeScript no-shadow rule instead of the base one.
      // Disallows a local variable to have the same name as a variable in its containing scope.
      'no-shadow': 0,
      '@typescript-eslint/no-shadow': 2,

      // Uses the TypeScript no-use-before-define rule instead of the base one.
      // Disallows the use of variables before they are defined.
      '@typescript-eslint/no-use-before-define': 2,
      'no-use-before-define': 0,

      // Enforces the naming conventions for some cases across the code.
      // Variables must be in camelCase or UPPER_CASE. Boolean variables must have a verb prefixed. (Normal variables).
      // Function variables must be in camelCase or PascalCase (used for creating Functions and Components).
      // Types like (class, enum, interface, typeAlias, typeParameter) must be in PascalCase. Interfaces must be prefixed with 'I'.
      // Functions declared using the 'function' keyword must be in camelCase.
      '@typescript-eslint/naming-convention': [
        2,
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: booleanPrefixes,
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
        {
          selector: 'function',
          format: ['camelCase'],
        },
      ],
    },
  },

  {
    // PLUGINS: Declare plugins here to make their rules available in the `rules` object.
    // More details: https://eslint.org/docs/latest/use/configure/plugins
    plugins: {
      perfectionist,
      react,
    },

    // RULES: Defines specific linting rules, their severity, and other customizations.
    // NOTE: These rules should come from the installed plugins defined in the `plugins` object.
    // More details: https://eslint.org/docs/latest/use/core-concepts/#rules
    rules: {
      // [ESLINT RULES]
      // Enforces the use of `===` and `!==`.
      eqeqeq: 2,

      // Enforces the use of curly {} in block statements (if, else, for, while...).
      curly: [2, 'all'],

      // Disallows the use of undeclared variables.
      'no-undef': 2,

      // Enforces no braces when they can be omitted. Incorrect: const foo = (x) => { return x; } Correct: const foo = (x) => x;
      'arrow-body-style': [2, 'as-needed'],

      // [REACT RULES]
      // Enforces arrow functions for Components.
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      // Enforces using JSX only in *.tsx files.
      'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],

      // Enforces non-required props to define their default values in the function arguments/parameters.
      // Example: const Component = ({ optionalProp = 'default' }: ComponentProps) => {}
      'react/require-default-props': [
        2,
        {
          functions: 'defaultArguments',
        },
      ],

      // Allows spreading in JSX components (<MyCustomComponent {...props} />) and forbid on everything else (HTML tags, etc.)
      'react/jsx-props-no-spreading': [
        2,
        {
          custom: 'ignore',
        },
      ],

      // Enforces the way of sorting the component props.
      // Alphabetical case insensitive order, React reserved props before, callbacks after.
      // Example: <Component dangerouslySetInnerHTML={...} firstName="John" lastName="Doe" onClick={...} />
      'react/jsx-sort-props': [
        2,
        {
          callbacksLast: true,
          ignoreCase: true,
          reservedFirst: true,
        },
      ],

      // [PERFECTIONIST RULES]
      // IMPORTS ORDER: Enforces a strict and consistent order for import statements.
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
      'perfectionist/sort-named-imports': [2, { type: 'natural' }],

      // OBJECTS ORDER: Enforces a strict and consistent order for object, types and other declarations.
      'perfectionist/sort-object-types': [2, perfectionistSortTypes],
      'perfectionist/sort-union-types': [2, { type: 'natural' }],
      'perfectionist/sort-interfaces': [2, perfectionistSortTypes],
      'perfectionist/sort-objects': [2, perfectionistSortObjects],
      'perfectionist/sort-enums': [2, { type: 'natural' }],
    },
  },
];
```

#### `eslint.constants.mjs`

```js
export const booleanPrefixes = ['is', 'should', 'has', 'can', 'did', 'will'];

const perfectionistSortObjectCustomGroups = {
  id: {
    elementNamePattern: '^(?:id|.+Id)$',
    groupName: 'id',
    selector: 'property',
  },
  flag: {
    elementNamePattern: `^(?:${booleanPrefixes.join('|')})[A-Z].*$`, // Example: /^(?:a|b|c|)[A-Z].*$/
    groupName: 'flag',
    selector: 'property',
  },
};

export const perfectionistSortTypes = {
  ignoreCase: true,
  order: 'asc',
  type: 'natural',
  customGroups: [
    perfectionistSortObjectCustomGroups.id,
    {
      ...perfectionistSortObjectCustomGroups.flag,
      groupName: `required-${perfectionistSortObjectCustomGroups.flag.groupName}`,
      modifiers: ['required'],
    },
    {
      ...perfectionistSortObjectCustomGroups.flag,
      groupName: `optional-${perfectionistSortObjectCustomGroups.flag.groupName}`,
      modifiers: ['optional'],
    },
  ],
  groups: [
    perfectionistSortObjectCustomGroups.id.groupName,
    'required-property',
    'required-multiline-property',
    'optional-property',
    'optional-multiline-property',
    'required-flag',
    'optional-flag',
    'required-method',
    'optional-method',
  ],
};

export const perfectionistSortObjects = {
  ...perfectionistSortTypes,
  objectDeclarations: true,
  customGroups: [
    perfectionistSortObjectCustomGroups.id,
    perfectionistSortObjectCustomGroups.flag,
  ],
  destructuredObjects: {
    groups: true,
  },
  groups: [
    perfectionistSortObjectCustomGroups.id.groupName,
    'property',
    'multiline-property',
    perfectionistSortObjectCustomGroups.flag.groupName,
    'method',
  ],
};
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Configure Prettier <img src="https://cdn.simpleicons.org/prettier/000/F7B93E" alt="Prettier" align=left width=24>

Prettier is configured as the code formatter to ensure consistent coding styles throughout the codebase.

The configuration used in this project is shown below. You can adjust it based on the specific needs of your project.

<details>
<summary>Show code</summary>

#### `.prettierrc.mjs`

```js
export default {
  arrowParens: 'always', // Always include parentheses around arrow function parameters (e.g., (x) => x)
  bracketSameLine: false, // In HTML/JSX, put `>` of a multi-line element on a new line.
  endOfLine: 'auto', // Maintain existing line endings (LF/CRLF)
  jsxSingleQuote: false, // Use double quotes `"` in JSX instead of single quotes `'`
  printWidth: 80, // Wrap lines that exceed 80 characters for better readability
  semi: true, // Always add semicolons `;` at the end of statements
  singleQuote: true, // Use single quotes `'` instead of double quotes `"` for consistency
  tabWidth: 2, // Indent using 2 spaces per tab
  trailingComma: 'all', // Add trailing commas wherever possible (arrays, objects...)
};
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Configure Package <img src="https://cdn.simpleicons.org/json/000/FFFFFF" alt="JSON" align=left width=24>

A `package.json` is required for managing dependencies, scripts and project configurations.

#### Import Methods

This package supports two import methods:

Entire Package Import: `"@jolacdev/template-react-component-library"`

- ✅ Includes all components, making it easier to manage.
- ❌ Larger package size.

Individual Component Import: `"@jolacdev/template-react-component-library/button"`

- ✅ Smaller package size.
- ❌ Requires manual and individual dependency management.

#### Dependency Categories

The dependencies used are separated into:

- `peerDependencies`: External libraries that the **consumer must install**, as they are required at runtime but not bundled with the package.
- `devDependencies`: Tools used exclusively during the development process (such as testing, linting, and building) that are not required by the consumer and are not bundled in the package.

> [!NOTE]
> Be aware that dependencies do not use a caret (`^`) to ensure long-term compatibility, but this means they may remain on older versions unless manually updated.

<details>
<summary>Show code</summary>

#### `package.json`

> **🚨 Warning**: Refer to the actual `package.json` file since this example has comments with explanatory purposes which are not allowed in the JSON syntax.

```json
{
  "name": "@jolacdev/template-react-component-library", // Scoped package name. Follows the format @username/package.
  "version": "1.0.0", // Package current version.
  "description": "Template library for React components",
  "author": "Jose Lacueva",
  "license": "ISC",
  "type": "module", // Defines the package to use ES Modules, which uses `import` syntax instead of `require` from CommonJS .
  // NOTE: The `module` and `types` fields might be redundant since the `exports` field already define these values.
  "module": "dist/index.es.js", // ES Modules imports main entry point.
  "types": "dist/index.d.ts", // TypeScript definitions main entry point.
  "files": ["dist"], // Defines directories and files to be included in the published package.
  "exports": {
    ".": {
      "import": "./dist/index.js", // ES Modules imports main entry point.
      "types": "./dist/index.d.ts" // TypeScript definitions main entry point.
    },
    "./*": {
      "import": "./dist/components/*/*.js", // Defines and allows consumers to import individual components.
      "types": "./dist/components/*/*.d.ts" // TypeScript definitions for the individual components.
    }
  },
  // Makes package publicly accessible. It is required in NPM free tier.
  "publishConfig": {
    "access": "public"
  },
  // Project scripts
  "scripts": {
    "build": "tsc -p tsconfig.build.json && vite build",
    "format": "prettier --write --parser typescript '**/*.{ts,tsx}'",
    "lint": "eslint --fix",
    "lint:no-fix": "eslint",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:gui": "vitest --ui",
    "storybook": "storybook dev -p 6006",
    "storybook:build": "storybook build"
  },
  // Dependencies that must be installed by consumers of the package.
  "peerDependencies": {
    "react": "19.0.0",
    "react-dom": "19.0.0"
  },
  // Dependencies required for developing this package.
  "devDependencies": {
    // Prettier
    "prettier": "3.4.2",

    // ESLint related
    "eslint": "9.20.0",
    "eslint-config-prettier": "10.0.1",
    "eslint-plugin-jsx-a11y": "6.10.2",
    "eslint-plugin-perfectionist": "4.8.0",
    "eslint-plugin-prettier": "5.2.3",
    "eslint-plugin-react": "7.37.4",
    // NOTE: Using a pre-release version which supports ESLint flat config. Update to stable (5.2.0+) when available.
    "eslint-plugin-react-hooks": "5.2.0-canary-de1eaa26-20250124",
    "eslint-plugin-storybook": "0.11.2",
    "typescript-eslint": "8.23.0",
    "@typescript-eslint/parser": "8.23.0",
    "globals": "15.14.0",

    // TypeScript related
    "typescript": "5.7.3",
    "@types/react": "19.0.8",
    "@types/react-dom": "19.0.3",

    // Vite related
    "vite": "6.1.0",
    "vite-plugin-dts": "4.5.0",
    "vite-plugin-lib-inject-css": "2.2.1",

    // Test related
    "vitest": "3.0.5",
    "@vitest/browser": "3.0.5",
    "@vitest/ui": "3.0.5",
    "@testing-library/jest-dom": "6.6.3",
    "@testing-library/react": "16.2.0",
    "jsdom": "26.0.0",

    // Lefthook
    "lefthook": "1.10.10",

    // Storybook related
    "storybook": "8.5.3",
    "@storybook/addon-essentials": "8.5.3",
    "@storybook/react": "8.5.3",
    "@storybook/react-vite": "8.5.3",

    // Semantic Release related
    "semantic-release": "24.2.3",
    "@semantic-release/changelog": "6.0.3",
    "@semantic-release/git": "10.0.1"
  }
}
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Configure TypeScript <img src="https://cdn.simpleicons.org/typescript/000/3178C6" alt="TypeScript" align=left width=24>

A `tsconfig.json` file is required for configuring TypeScript, defining how the compiler analyzes TypeScript code and rules.

#### Configuration Files

This package uses two main TypeScript configuration files:

- `tsconfig.json`: This is the TypeScript default configuration file. In this project it is configured to be used in the development process, by defining how the compiler processes TypeScript files, applying type checking linting, etc.
- `tsconfig.build.json`: This is a custom configuration file that extends `tsconfig.json` for production builds, ensuring that only the necessary files are included in the build process.

<details>
<summary>Show code</summary>

#### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020", // Compiles code for ES2020.
    "useDefineForClassFields": true, // Ensures class fields are initialized with Object.defineProperty and set to undefined by default, aligning with the ES2022 standard to prevent potential breakage in TypeScript.
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext", // Allows import/export on generated code.

    /* Bundler mode */
    "moduleResolution": "bundler", // For use with bundlers like Vite. Supports `package.json` imports and exports.
    "allowImportingTsExtensions": true, // Allows importing `.ts` files as modules
    "resolveJsonModule": true, // Allows importing JSON files as modules
    "isolatedModules": true, // Warns when certain TS code cannot be correctly interpreted by single-file transpiler.
    "noEmit": true, // Uses TypeScript only for type-checking, making the bundler (Vite) the one that manages the code output.
    "jsx": "react-jsx", // React JSX support.

    /* Linting */
    "strict": true, // Enables strict type checking.
    "noUnusedLocals": false, // Handled by `@typescript-eslint/no-unused-vars`.
    "noUnusedParameters": true, // Enforces the use of all function parameters.
    "noFallthroughCasesInSwitch": true, // Enforces using 'break' between switch cases.
    "declaration": true, // Generates TS declaration files (.d.ts).
    "types": ["@testing-library/jest-dom"] // Specifies additional global types
  },
  "include": [
    "src",
    "setupTests.ts",
    "eslint.config.js",
    "eslint.constants.mjs",
    ".prettierrc.mjs",
    "vite.config.ts",
    ".storybook/**/*.ts"
  ] // Include in TS compilation and linting.
}
```

#### `tsconfig.build.json`

Include only the `src` folder and exclude its `__docs__` (Storybook) and `__test__` (Vitest) directories from the build process.

```json
{
  "extends": "./tsconfig",
  "compilerOptions": {
    "types": []
  },
  "include": ["src"], // Replace `include` value to build only from the `src` directory.
  "exclude": ["src/**/__docs__", "src/**/__test__"]
}
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Configure Vite & DTS <img src="https://cdn.simpleicons.org/vite/000/646CFF" alt="Vite" align=left width=24>

> [!NOTE]
> This file is responsible for:
>
> - Defining **entry points**, **output filenames**, and **formats** for the build.
> - Integrating Vite plugins to generate **TS declaration files** and **inject CSS** into components.
> - Configuring the **Vitest testing environment**.

#### Why Vite

Vite is a widely adopted modern build tool. Some of its features include:

- A **lightning-fast dev server** which provides an extremely fast Hot Module Replacement, native TypeScript support, and more.
- A **Rollup-powered build system**, pre-configured for optimized production bundling.

#### Vite Plugins

Vite is highly extensible via plugins based on the Rollup's well-designed plugin interface with additional Vite-specific options. This setup uses two main plugins:

- `vite-plugin-dts`: Automatically generates TypeScript declaration files (`.d.ts`) from `.ts(x)` files.
- `vite-plugin-lib-inject-css`: Automatically injects CSS at the top of each file using the `import` statement. Supporting multi-entry builds, making it especially helpful for individually exported component libraries like this one.

<details>
<summary>Show code</summary>

#### `vite.config.ts`

```ts
/// <reference types="vitest/config" />
import fs from 'fs';
import { defineConfig, UserConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import type { InlineConfig } from 'vitest/node';

import { peerDependencies } from './package.json';

// Extends Vite’s UserConfig type to include Vitest-specific options (`test` field).
interface IVitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// Finds and generates entry points for each TSX component in the specified directory.
const generateComponentEntryPoints = (
  directory: string,
): Record<string, string> => {
  const entries: Record<string, string> = {};
  const directories = fs.readdirSync(directory, { withFileTypes: true });

  directories.forEach(({ name, parentPath }) => {
    const componentPath = `${parentPath}/${name}/${name}.tsx`;
    if (fs.existsSync(componentPath)) {
      entries[name] = componentPath;
    }
  });

  return entries;
};

export default defineConfig({
  // Build configuration.
  build: {
    emptyOutDir: true, // Clears the output directory before each build to prevent stale files.
    sourcemap: false, // Disables source maps (unminified code used for debugging) for production builds.

    // NOTE: `lib` object is a configuration specific for projects that export a library package
    lib: {
      formats: ['es'], // Output format (ES Modules).
      name: 'template-react-component-library', // NOTE: Name for the UMD/IIFE format. // NOTE: It is not used (since the output format is ES Modules) but added for reference.
      // NOTE: `entry` is required since a library cannot use HTML file as entry point. * It is used as an object because it has multiple entries.
      entry: {
        index: './src/index.ts', // Full library entry point.
        ...generateComponentEntryPoints('src/components'), // Individual components entry points.
      },
      fileName: (format, entryName) => `${entryName}.${format}.js`, // Output file name format. // NOTE: It's overridden by Rollup but added for reference.
    },

    // NOTE: Rollup configuration to fine-tune library's build process.
    rollupOptions: {
      external: ['react/jsx-runtime', ...Object.keys(peerDependencies)], // Prevents peer dependencies to bundle them into the final output.
      globals: {
        'react/jsx-runtime': 'react/jsx-runtime',
      },
      output: {
        assetFileNames: 'assets/[name][extname]', // Assets like CSS, images, etc.
        // chunkFileNames: 'chunks/[name]-[hash].js', // NOTE: Used for dynamic imports when code-splitting chunks. Added for reference.
        entryFileNames: ({ name }) =>
          name === 'index' ? '[name].js' : 'components/[name]/[name].js', // Entry points for the imported library.
      },
    },
  },

  // Plugins also used in the build process.
  plugins: [
    // Uses the 'vite-plugin-dts' plugin to generate TypeScript declaration files (d.ts).
    dts({
      tsconfigPath: './tsconfig.build.json', // Specifies a custom tsconfig to avoid generating declaration files for test files (__test__/{Component}.test.d.ts).
    }),
    // Uses the 'vite-plugin-lib-inject-css' to inject the CSS `import` statements into the respective components.
    libInjectCss(),
  ],

  // Configuration for Vitest usage.
  test: {
    environment: 'jsdom', // Sets the test environment to `jsdom` to simulate a browser.
    globals: true, // Enables global test APIs like `describe`, `it`, etc.
    setupFiles: './setupTests.ts', // Specifies a setup file to run before tests.
  },
} as IVitestConfigExport);
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Configure Vitest <img src="https://cdn.simpleicons.org/vitest/000/6E9F18" alt="Vitest" align=left width=24>

The tests are configured with Vitest, which is a testing framework compatible with most of the Jest API.

Vitest is intended to be used with Vite since the test runner uses the same configuration as Vite's `vite.config.ts` file.

There is a custom `setupTests.ts` file configured to run before the tests. Its purpose is to extend the `expect` function from Vitest with matchers from Jest-DOM. This allows the use of matchers like `.toBeInTheDocument()`.

<details>
<summary>Show code</summary>

#### `setupTests.ts`

```ts
// NOTE: https://vitest.dev/guide/extending-matchers
import * as matchers from '@testing-library/jest-dom/matchers';
import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// NOTE: Extends TypeScript `Assertion` interface used in Vitest's `expect` with the Jest-DOM matchers.
declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any
  interface Assertion<T = any>
    extends jest.Matchers<void, T>,
      TestingLibraryMatchers<T, void> {}
}

// NOTE: Extends the `expect` function from Vitest to add the matchers of Jest-DOM. Allowing the use of matchers like `.toBeInTheDocument()`.
expect.extend(matchers);
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Configure Storybook <img src="https://cdn.simpleicons.org/storybook/000/FF4785" alt="Storybook" align=left width=24>

> [!NOTE]
> This setup provides a basic Storybook integration. It can be expanded and customized to meet the specific needs of your project.

Storybook is an optional tool for developing and visualizing components in isolation and with different visual states.

It provides an interactive playground environment where components can be built, tested, and refined without needing to set up a full application to display them.

<details>
<summary>Show code</summary>

#### `main.ts`

```ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // Specifies the location of the stories.
  stories: ['../src/**/__docs__/*.stories.tsx', '../src/**/__docs__/*.mdx'],

  // Plugins that extend Storybook's functionality.
  addons: [
    '@storybook/addon-essentials', // Collection of addons like Background, Viewport, etc.
    // NOTE: Install more addons and add them here as needed.
  ],

  // Specifies the framework to use, enabling out-of-the-box support for the combination of a builder (e.g. Vite) and renderer (e.g. React).
  framework: {
    name: '@storybook/react-vite', // Plugin for React & Vite integration, offering a zero-config setup.
    options: {},
  },
};
export default config;
```

#### `preview.ts`

```ts
import type { Preview } from '@storybook/react';

// NOTE: This file is intended to configure the preview behavior of components in Storybook.
// The project has no preview configuration but global decorators, parameters, etc. can be added to customize component display in Storybook.
const preview: Preview = {};

export default preview;
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Configure Git Hooks <img src="https://cdn.simpleicons.org/lefthook/000/FF1E1E" alt="Lefthook" align=left width=24>

> [!NOTE]
> Git hooks are managed with _**Lefthook**_.
>
> Although _Husky_ is more extended, _Lefthook_ is a mature and actively maintained library that offers **better performance**, **parallel execution**, supports **partially staged files**, etc.

The different Git hooks used in this project and their respective purposes are:

- **pre-commit**: Runs before each commit to ensure that the staged code is properly linted and formatted. It supports partially staged files.
- **pre-push**: Executes before each push to ensure that all tests pass successfully.

> **💡 Tip**: Use the `--no-verify` or `-n` flag in the Git command to bypass these hooks.

<details>
<summary>Show code</summary>

#### `lefthook.yml`

```yml
# NOTE:
# Lefthook creates a backup stash before running the pre-commit hook.
# Supports partially staged files.
pre-commit:
  parallel: false
  # Stop running commands and scripts if one of them fails.
  piped: true
  # Commands that will be executed before commit.
  commands:
    # Commands run in alphabetical order, so they are prefixed with numbers.
    1_lint:
      # Since linter can fail even though it fixes some errors, we don't fix them in order to prevent unstaged changes.
      glob: '*.{ts,tsx}'
      run: npm run lint:no-fix {staged_files}
    2_format:
      # Format staged code.
      run: npm run format
    3_update-index:
      # Update Git index to include changes made by previous commands.
      run: git update-index --again
pre-push:
  commands:
    test:
      # Allow push if all tests pass.
      # The tests run in the all the code committed, staged and unstaged.
      run: npm run test
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Configure GitHub Actions <img src="https://cdn.simpleicons.org/githubactions/000/2088FF" alt="GitHub Actions" align=left width=24>

GitHub Actions automates workflows for tasks such as code **linting**, running **tests**, **building** the application, **generating releases**, **publishing** the releases, etc.

Below is an overview of the CI/CD setup for this project.

#### Continuous Integration (CI)

The `ci.yml` workflow runs whenever there is a pull request to `develop`, `master` or `main` branches.

- Installs and caches library dependencies to be reused by the other jobs.
- Runs linter.
- Runs tests.
- Builds the library.

#### Continuous Deployment (CD)

> [!IMPORTANT]
> For generate and publishing the release, the following tokens are required by `semantic-release`:
>
> - **GITHUB_TOKEN**: This token is generated from GitHub and is used for authentication with GitHub APIs.
> - **NPM_TOKEN**: If the release is being published to `npm` you will need to generate a token from the npm registry and add it to your repository secrets in order to authenticate with the NPM registry.
>
> 🚨 Note that tokens must be configured with the correct permissions to avoid issues during the release.

> [!NOTE]
> In this setup there is configured `semantic-release` to generate and publish the release.

The `cd.yml` workflow runs on pushes (pull request merges) to the `master` or `main` branches:

- Installs and caches library dependencies to be reused by the other jobs.
- Builds the library.
- Generates and publishes a new release using `semantic-release`.

<details>
<summary>Show code</summary>

#### `ci.yml`

```yml
name: Continuous Integration (Build, Lint, Tests)
on:
  pull_request:
    branches:
      - develop
      - master
      - main
jobs:
  install-cache:
    name: Install-Cache
    strategy:
      matrix:
        node-version: [22.x]
        os: [ubuntu-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4 # If no branch is specified, the branch that triggered the workflow will be checked out.
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - name: Cache npm dependencies
        uses: actions/cache@v4
        with:
          path: node_modules
          key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
          restore-keys: ${{ runner.os }}-npm-
      - name: Install Dependencies
        # If there is a `cache-hit`, dependencies are already installed and this step is skipped.
        # If there is no `cache-hit`, we install the dependencies
        if: steps.cache-dependencies.outputs.cache-hit != 'true'
        run: npm ci
  lint:
    name: Lint
    strategy:
      matrix:
        node-version: [22.x]
        os: [ubuntu-latest]
    runs-on: ${{ matrix.os }}
    needs: install-cache # Wait for `install-cache` job to complete so that the dependencies are installed and cached.
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      # Restore the npm dependencies from the actions/cache.
      # At this stage of the workflow the dependencies have been installed and cached.
      - name: Restore cached dependencies
        uses: actions/cache@v4
        id: cache-dependencies
        with:
          path: node_modules
          key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-npm-
      - name: Lint (ESLint)
        run: npm run lint:no-fix
  tests:
    name: Tests
    strategy:
      matrix:
        node-version: [22.x]
        os: [ubuntu-latest]
    runs-on: ${{ matrix.os }}
    needs: install-cache # Wait for `install-cache` job to complete so that the dependencies are installed and cached.
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - name: Restore cached dependencies
        uses: actions/cache@v4
        id: cache-dependencies
        with:
          path: node_modules
          key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-npm-
      - name: Tests (Vitest)
        run: npm run test
  build:
    name: Build
    strategy:
      matrix:
        node-version: [22.x]
        os: [ubuntu-latest]
    runs-on: ${{ matrix.os }}
    needs: [install-cache, lint, tests] # If previous jobs succeed, then run this build.
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - name: Restore cached dependencies
        uses: actions/cache@v4
        id: cache-dependencies
        with:
          path: node_modules
          key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-npm-
      - name: Build (Vite)
        run: npm run build
```

#### `cd.yml`

```yml
name: Continuous Deployment (Build, Generate Release, Publish)
on:
  push:
    branches:
      - master
      - main
jobs:
  install-cache:
    name: Install-Cache
    strategy:
      matrix:
        node-version: [22.x]
        os: [ubuntu-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - name: Cache npm dependencies
        uses: actions/cache@v4
        with:
          path: node_modules
          key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
          restore-keys: ${{ runner.os }}-npm-
      - name: Install Dependencies
        if: steps.cache-dependencies.outputs.cache-hit != 'true'
        run: npm ci

  build:
    name: Build
    strategy:
      matrix:
        node-version: [22.x]
        os: [ubuntu-latest]
    runs-on: ${{ matrix.os }}
    needs: [install-cache]
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - name: Restore cached dependencies
        uses: actions/cache@v4
        id: cache-dependencies
        with:
          path: node_modules
          key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-npm-
      - name: Build (Vite)
        run: npm run build
      - name: Save build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist
          retention-days: 1
          overwrite: true

  release:
    name: Generate release and publish
    strategy:
      matrix:
        node-version: [22.x]
        os: [ubuntu-latest]
    runs-on: ${{ matrix.os }}
    needs: [install-cache, build]
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - name: Restore cached dependencies
        uses: actions/cache@v4
        id: cache-dependencies
        with:
          path: node_modules
          key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-npm-
      - name: Download saved artifacts
        uses: actions/download-artifact@v4
        with:
          name: dist
          path: dist
      - name: Generate and publish release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: npx semantic-release
```

#### `release.config.mjs`

```js
/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  // Define branches which trigger the release.
  branches: ['main', 'master'],

  // NOTE: 'commit-analyzer', 'release-notes-generator', 'npm' and 'github' are already part of '@semantic-release'.
  plugins: [
    // Determines the type of version (major, minor, patch) following rules which use the "Conventional Commits" standard.
    // NOTE: If a commit match multiple rules, the highest release type is selected.
    [
      '@semantic-release/commit-analyzer',
      {
        // Preset default value is 'angular'.
        preset: 'angular',
        // Custom rules to determine the release type.
        releaseRules: [
          { release: 'patch', scope: 'README', type: 'docs' },
          { release: 'patch', type: 'refactor' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    '@semantic-release/npm',
    '@semantic-release/github',
    // Commits generated changes back to the Git repository (e.g., version updates to `package.json`).
    [
      '@semantic-release/git',
      {
        // Files to be committed.
        assets: ['package.json', 'README.md'],
        // Custom commit message.
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## ✍ Create a Component[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-create-a-component)

With the configuration setup complete, we can now create a component along with its styles, tests, and stories.

To create the first component we will create a basic `Button` component following this structure:

```
📁src
├── 📁components
│   ├── Button
│   │   ├── 📁__docs__
│   │   │   ├── Button.mdx
│   │   │   └── Button.stories.tsx
│   │   ├── 📁__test__
│   │   │   └── Button.test.tsx
│   │   ├── Button.css
│   │   └── Button.tsx
│   └── index.ts
└── index.ts
```

### Create the Component <img src="https://cdn.simpleicons.org/react/000/61DAFB" alt="React" align=left width=24>

To ensure that our components are exported and can be properly imported by consumers of the library, two `index.ts` files must be created.

<details>
<summary>Show code</summary>

#### `src/index.ts`

```tsx
export * from './components';
```

#### `src/components/index.ts`

```tsx
// NOTE: Export components from here.
export { Button } from './Button/Button';
```

</details>

Once the `index.ts` files are in place, you can proceed to create the component.

<details>
<summary>Show code</summary>

#### `src\components\Button\Button.tsx`

```jsx
import { MouseEventHandler } from 'react';

import './Button.css';

export type ButtonProps = {
  disabled?: boolean;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  disabled = false,
  label = 'Default',
  onClick = undefined,
}: ButtonProps) => (
  <button className="trcl" disabled={disabled} onClick={onClick}>
    {label}
  </button>
);
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Add Styles <img src="https://cdn.simpleicons.org/css/000/663399" alt="CSS" align=left width=24>

This project uses basic CSS for styling. Since 2024, features like [CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting) are [supported](https://caniuse.com/?search=CSS%20nesting) across all major browsers, making it a good alternative to Sass.

> **💡 Tip**: CSS libraries such as **Sass**, **Tailwind**, **Styled Components**, etc., could be implemented as well. Keep in mind that the way CSS is injected into the built package may vary, and adjustments to the Vite configuration might be required.

<details>
<summary>Show code</summary>

#### `src\components\Button\Button.css`

```css
button.trcl {
  transition: color 0.25s;
  border: solid 1px rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  background-color: rgb(32, 33, 39);
  padding: 4px 8px;
  color: rgba(255, 255, 245, 0.86);
  font-size: 16px;

  /* Button Interaction (Disabled) */
  &:disabled {
    color: rgba(255, 255, 255, 0.4);
    cursor: not-allowed;
  }

  /* Button Interaction (Not Disabled) */
  &:not(:disabled) {
    cursor: pointer;

    /* Hover State */
    &:hover {
      color: rgb(148, 153, 255);
    }
  }
}
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Add Tests <img src="https://cdn.simpleicons.org/vitest/000/6E9F18" alt="Vitest" align=left width=24>

> [!IMPORTANT]
> Test files should be placed in the `src\components\{Component}\__test__\` directory.

To ensure the component works as expected, we can add tests.

This project uses **Vitest** along with **React Testing Library** for writing and running tests.

<details>
<summary>Show code</summary>

#### `src\components\Button\__test__\Button.test.tsx`

```jsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';

describe('Button component', () => {
  it('Button should render correctly', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Add Storybook <img src="https://cdn.simpleicons.org/storybook/000/FF4785" alt="Storybook" align=left width=24>

Storybook allows rendering and documenting components in an isolated environment, so we can create the stories for the component we just built.

The purpose of the MDX and TSX files to be created is:

- **MDX**: To write the actual documentation for the Storybook combining Markdown and JSX. You can embed the components stories created and display interactive examples that describe how the component behaves.
- **TSX**: To define the different stories for the component. It specifies the different states and variations of the component for rendering in the Storybook UI.

<details>
<summary>Show code</summary>

#### `src\components\Button\__docs__\Button.mdx`

````mdx
import { Canvas, Meta } from '@storybook/blocks';
import * as Button from './Button.stories.tsx';

<Meta of={Button} title="Button" />

# Button

Button component with different props.

#### Example

<Canvas of={Button.ButtonDefault} />

## Usage

```tsx
import { Button } from 'template-react-component-library/button';

const SomeComponent = () => {
  return <Button label={'Submit'} onClick={() => alert('Submitted!')} />;
};

export default SomeComponent;
```

#### Arguments

- **label** - The text displayed on the button.
- **disabled** - Determines if the button is disabled.
- **onClick** - A function that is called when the button is clicked.
````

#### `src\components\Button\__docs__\Button.stories.tsx`

```jsx
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './../Button';

export default {
  component: Button,
  title: 'Button',
} as Meta<typeof Button>;

type Story = StoryObj<ButtonProps>;

export const ButtonDefault: Story = {
  args: {
    label: 'Button Default',
    onClick: () => alert('Default Button'),
  },
};

export const ButtonDisabled: Story = {
  args: {
    disabled: true,
    label: 'Button Disabled',
    onClick: () => alert('Disabled Button'),
  },
};
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 🚀 Publish Changes[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-publish-changes)

Once the changes are ready, the library can be built and published.

This process is managed by the GitHub Actions `cd.yml` workflow.

### Build the Library <img src="https://cdn.simpleicons.org/githubactions/000/2088FF" alt="GitHub Actions" align=left width=24>

When a commit is pushed to the `master` branch, whether by direct push (if allowed) or by **merging a pull request**, the CD pipeline is triggered.

The workflow will start installing the all dependencies in order to be able to run the the `build` script defined in the `package.json`.

Since the CI workflow should have already been executed (CI runs when the pull request is created), the library should compile and build without issues.

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Generate Release and Deploy <img src="https://cdn.simpleicons.org/npm/000/CB3837" alt="NPM" align=left width=24>

Once the build process is complete, the pipeline generates and publishes the latest release.

This is handled automatically by `semantic-release`, which:

- Creates a Git tag for the release.
- Updates the `package.json` version and commits the changes to the repository.
- Publishes the release to the NPM registry.

> [!IMPORTANT]
>
> `semantic-release` determines the version update (major, minor, or patch) based on the commit messages.
>
> - `fix:` Increments the patch version.
> - `feat:` Increments the minor version.
> - `BREAKING CHANGE:` (in the commit footer): Increments the major version.
>
> If multiple rules apply, the highest release type is selected.

Once the pipeline completes, the latest release will be available in the NPM repository.

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---
