import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Standard Variant - Medium Size
export const StandardMediumEnabled: Story = {
  args: {
    label: 'Label',
    variant: 'standard',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const StandardMediumEnabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'standard',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const StandardMediumHovered: Story = {
  args: {
    label: 'Label',
    variant: 'standard',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
      (e.currentTarget as HTMLDivElement).style.cursor = 'pointer';
    },
  },
};

export const StandardMediumHoveredWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'standard',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const StandardMediumFocused: Story = {
  args: {
    label: 'Label',
    variant: 'standard',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
    autoFocus: true,
  },
};

export const StandardMediumFocusedWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'standard',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
    autoFocus: true,
  },
};

export const StandardMediumDisabled: Story = {
  args: {
    label: 'Label',
    variant: 'standard',
    size: 'medium',
    disabled: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const StandardMediumDisabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'standard',
    size: 'medium',
    disabled: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const StandardMediumError: Story = {
  args: {
    label: 'Label',
    variant: 'standard',
    size: 'medium',
    error: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const StandardMediumErrorWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'standard',
    size: 'medium',
    error: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

// Standard Variant - Small Size
export const StandardSmallEnabled: Story = {
  args: {
    label: 'Label',
    variant: 'standard',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const StandardSmallEnabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'standard',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const StandardSmallFocused: Story = {
  args: {
    label: 'Label',
    variant: 'standard',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
    autoFocus: true,
  },
};

export const StandardSmallFocusedWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'standard',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
    autoFocus: true,
  },
};

export const StandardSmallDisabled: Story = {
  args: {
    label: 'Label',
    variant: 'standard',
    size: 'small',
    disabled: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const StandardSmallDisabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'standard',
    size: 'small',
    disabled: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const StandardSmallError: Story = {
  args: {
    label: 'Label',
    variant: 'standard',
    size: 'small',
    error: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const StandardSmallErrorWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'standard',
    size: 'small',
    error: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

// Filled Variant - Medium Size
export const FilledMediumEnabled: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledMediumEnabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'filled',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledMediumFocused: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
    autoFocus: true,
  },
};

export const FilledMediumFocusedWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'filled',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
    autoFocus: true,
  },
};

export const FilledMediumDisabled: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'medium',
    disabled: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledMediumDisabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'filled',
    size: 'medium',
    disabled: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledMediumError: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'medium',
    error: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledMediumErrorWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'filled',
    size: 'medium',
    error: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledMediumHovered: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledMediumHoveredWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'filled',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

// Filled Variant - Small Size
export const FilledSmallEnabled: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledSmallEnabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'filled',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledSmallFocused: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
    autoFocus: true,
  },
};

export const FilledSmallFocusedWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'filled',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
    autoFocus: true,
  },
};

export const FilledSmallDisabled: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'small',
    disabled: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledSmallDisabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'filled',
    size: 'small',
    disabled: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledSmallError: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'small',
    error: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledSmallErrorWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'filled',
    size: 'small',
    error: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledSmallHovered: Story = {
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const FilledSmallHoveredWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'filled',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

// Outlined Variant - Medium Size
export const OutlinedMediumEnabled: Story = {
  args: {
    label: 'Label',
    variant: 'outlined',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedMediumEnabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'outlined',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedMediumFocused: Story = {
  args: {
    label: 'Label',
    variant: 'outlined',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
    autoFocus: true,
  },
};

export const OutlinedMediumFocusedWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'outlined',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
    autoFocus: true,
  },
};

export const OutlinedMediumDisabled: Story = {
  args: {
    label: 'Label',
    variant: 'outlined',
    size: 'medium',
    disabled: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedMediumDisabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'outlined',
    size: 'medium',
    disabled: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedMediumError: Story = {
  args: {
    label: 'Label',
    variant: 'outlined',
    size: 'medium',
    error: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedMediumErrorWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'outlined',
    size: 'medium',
    error: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedMediumHovered: Story = {
  args: {
    label: 'Label',
    variant: 'outlined',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedMediumHoveredWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'outlined',
    size: 'medium',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

// Outlined Variant - Small Size
export const OutlinedSmallEnabled: Story = {
  args: {
    label: 'Label',
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedSmallEnabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedSmallFocused: Story = {
  args: {
    label: 'Label',
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
    autoFocus: true,
  },
};

export const OutlinedSmallFocusedWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
    autoFocus: true,
  },
};

export const OutlinedSmallDisabled: Story = {
  args: {
    label: 'Label',
    variant: 'outlined',
    size: 'small',
    disabled: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedSmallDisabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'outlined',
    size: 'small',
    disabled: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedSmallError: Story = {
  args: {
    label: 'Label',
    variant: 'outlined',
    size: 'small',
    error: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedSmallErrorWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'outlined',
    size: 'small',
    error: true,
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedSmallHovered: Story = {
  args: {
    label: 'Label',
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};

export const OutlinedSmallHoveredWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    style: { maxWidth: '220px' },
  },
};
