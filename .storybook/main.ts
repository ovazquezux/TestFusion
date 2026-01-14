import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  // Storybook 10: don't use @storybook/addon-essentials (it’s stuck on v8.x)
  addons: [],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};

export default config;