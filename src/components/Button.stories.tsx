import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["contained", "outlined", "text"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "info", "warning", "inherit"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "contained",
    color: "primary",
    size: "medium",
    disabled: false,
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined",
    variant: "outlined",
    color: "primary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};