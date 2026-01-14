import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { 
      control: "select", 
      options: ["contained", "outlined", "text"],
      description: "Button variant style"
    },
    size: { 
      control: "select", 
      options: ["small", "medium", "large"],
      description: "Button size"
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "destructive", "approve"],
      description: "Button color theme"
    },
    disabled: { 
      control: "boolean",
      description: "Disabled state"
    },
    children: { 
      control: "text",
      description: "Button label text"
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

// ===== Contained Variants =====

export const PrimaryContained: Story = {
  args: {
    children: "Label",
    variant: "contained",
    color: "primary",
    size: "medium",
  },
};

export const SecondaryContained: Story = {
  args: {
    children: "Label",
    variant: "contained",
    color: "secondary",
    size: "medium",
  },
};

export const TertiaryContained: Story = {
  args: {
    children: "Label",
    variant: "contained",
    color: "tertiary",
    size: "medium",
  },
};

export const DestructiveContained: Story = {
  args: {
    children: "Label",
    variant: "contained",
    color: "destructive",
    size: "medium",
  },
};

export const ApproveContained: Story = {
  args: {
    children: "Label",
    variant: "contained",
    color: "approve",
    size: "medium",
  },
};

// ===== Outlined Variants =====

export const PrimaryOutlined: Story = {
  args: {
    children: "Label",
    variant: "outlined",
    color: "primary",
    size: "medium",
  },
};

export const SecondaryOutlined: Story = {
  args: {
    children: "Label",
    variant: "outlined",
    color: "secondary",
    size: "medium",
  },
};

export const TertiaryOutlined: Story = {
  args: {
    children: "Label",
    variant: "outlined",
    color: "tertiary",
    size: "medium",
  },
};

export const DestructiveOutlined: Story = {
  args: {
    children: "Label",
    variant: "outlined",
    color: "destructive",
    size: "medium",
  },
};

export const ApproveOutlined: Story = {
  args: {
    children: "Label",
    variant: "outlined",
    color: "approve",
    size: "medium",
  },
};

// ===== Text Variants =====

export const PrimaryText: Story = {
  args: {
    children: "Label",
    variant: "text",
    color: "primary",
    size: "medium",
  },
};

export const SecondaryText: Story = {
  args: {
    children: "Label",
    variant: "text",
    color: "secondary",
    size: "medium",
  },
};

export const TertiaryText: Story = {
  args: {
    children: "Label",
    variant: "text",
    color: "tertiary",
    size: "medium",
  },
};

export const DestructiveText: Story = {
  args: {
    children: "Label",
    variant: "text",
    color: "destructive",
    size: "medium",
  },
};

export const ApproveText: Story = {
  args: {
    children: "Label",
    variant: "text",
    color: "approve",
    size: "medium",
  },
};

// ===== Size Variants =====

export const LargeButton: Story = {
  args: {
    children: "Label",
    variant: "contained",
    color: "primary",
    size: "large",
  },
};

export const MediumButton: Story = {
  args: {
    children: "Label",
    variant: "contained",
    color: "primary",
    size: "medium",
  },
};

export const SmallButton: Story = {
  args: {
    children: "Label",
    variant: "contained",
    color: "primary",
    size: "small",
  },
};

// ===== Disabled State =====

export const DisabledContained: Story = {
  args: {
    children: "Label",
    variant: "contained",
    color: "primary",
    size: "medium",
    disabled: true,
  },
};

export const DisabledOutlined: Story = {
  args: {
    children: "Label",
    variant: "outlined",
    color: "primary",
    size: "medium",
    disabled: true,
  },
};

export const DisabledText: Story = {
  args: {
    children: "Label",
    variant: "text",
    color: "primary",
    size: "medium",
    disabled: true,
  },
};

// ===== Complete Showcase =====

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      <div>
        <h3 style={{ marginBottom: "16px", fontWeight: 500 }}>Contained Buttons</h3>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="contained" color="primary" size="large">Primary Large</Button>
          <Button variant="contained" color="secondary" size="large">Secondary Large</Button>
          <Button variant="contained" color="tertiary" size="large">Tertiary Large</Button>
          <Button variant="contained" color="destructive" size="large">Destructive Large</Button>
          <Button variant="contained" color="approve" size="large">Approve Large</Button>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}>
          <Button variant="contained" color="primary" size="medium">Primary</Button>
          <Button variant="contained" color="secondary" size="medium">Secondary</Button>
          <Button variant="contained" color="tertiary" size="medium">Tertiary</Button>
          <Button variant="contained" color="destructive" size="medium">Destructive</Button>
          <Button variant="contained" color="approve" size="medium">Approve</Button>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}>
          <Button variant="contained" color="primary" size="small">Primary Small</Button>
          <Button variant="contained" color="secondary" size="small">Secondary Small</Button>
          <Button variant="contained" color="tertiary" size="small">Tertiary Small</Button>
          <Button variant="contained" color="destructive" size="small">Destructive Small</Button>
          <Button variant="contained" color="approve" size="small">Approve Small</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: "16px", fontWeight: 500 }}>Outlined Buttons</h3>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="outlined" color="primary" size="large">Primary Large</Button>
          <Button variant="outlined" color="secondary" size="large">Secondary Large</Button>
          <Button variant="outlined" color="tertiary" size="large">Tertiary Large</Button>
          <Button variant="outlined" color="destructive" size="large">Destructive Large</Button>
          <Button variant="outlined" color="approve" size="large">Approve Large</Button>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}>
          <Button variant="outlined" color="primary" size="medium">Primary</Button>
          <Button variant="outlined" color="secondary" size="medium">Secondary</Button>
          <Button variant="outlined" color="tertiary" size="medium">Tertiary</Button>
          <Button variant="outlined" color="destructive" size="medium">Destructive</Button>
          <Button variant="outlined" color="approve" size="medium">Approve</Button>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}>
          <Button variant="outlined" color="primary" size="small">Primary Small</Button>
          <Button variant="outlined" color="secondary" size="small">Secondary Small</Button>
          <Button variant="outlined" color="tertiary" size="small">Tertiary Small</Button>
          <Button variant="outlined" color="destructive" size="small">Destructive Small</Button>
          <Button variant="outlined" color="approve" size="small">Approve Small</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: "16px", fontWeight: 500 }}>Text Buttons</h3>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="text" color="primary" size="large">Primary Large</Button>
          <Button variant="text" color="secondary" size="large">Secondary Large</Button>
          <Button variant="text" color="tertiary" size="large">Tertiary Large</Button>
          <Button variant="text" color="destructive" size="large">Destructive Large</Button>
          <Button variant="text" color="approve" size="large">Approve Large</Button>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}>
          <Button variant="text" color="primary" size="medium">Primary</Button>
          <Button variant="text" color="secondary" size="medium">Secondary</Button>
          <Button variant="text" color="tertiary" size="medium">Tertiary</Button>
          <Button variant="text" color="destructive" size="medium">Destructive</Button>
          <Button variant="text" color="approve" size="medium">Approve</Button>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}>
          <Button variant="text" color="primary" size="small">Primary Small</Button>
          <Button variant="text" color="secondary" size="small">Secondary Small</Button>
          <Button variant="text" color="tertiary" size="small">Tertiary Small</Button>
          <Button variant="text" color="destructive" size="small">Destructive Small</Button>
          <Button variant="text" color="approve" size="small">Approve Small</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: "16px", fontWeight: 500 }}>Disabled State</h3>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="contained" color="primary" disabled>Contained Disabled</Button>
          <Button variant="outlined" color="primary" disabled>Outlined Disabled</Button>
          <Button variant="text" color="primary" disabled>Text Disabled</Button>
        </div>
      </div>
    </div>
  ),
};
