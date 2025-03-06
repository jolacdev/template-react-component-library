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
