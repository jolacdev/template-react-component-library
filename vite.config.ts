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
      name: 'react-component-library', // NOTE: Name for the UMD/IIFE format. // NOTE: It is not used (since the output format is ES Modules) but added for reference.
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
