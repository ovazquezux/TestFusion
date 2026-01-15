# TextField Component

A Material-UI based text input component with comprehensive theme overrides matching the Figma design system.

## Overview

The `TextField` component provides a flexible, accessible text input field with three variants: **Standard**, **Filled**, and **Outlined**. Each variant supports two sizes (**Medium** and **Small**) and multiple states (**Enabled**, **Hovered**, **Focused**, **Disabled**, **Error**).

## Features

- ✅ **Three Variants**: Standard, Filled, Outlined
- ✅ **Two Sizes**: Medium (default), Small
- ✅ **Multiple States**: Enabled, Hovered, Focused, Disabled, Error
- ✅ **Value Support**: Works with empty and filled states
- ✅ **Accessibility**: Full WCAG 2.1 compliance
- ✅ **Customizable**: Built on MUI with theme overrides
- ✅ **Type-Safe**: Full TypeScript support

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#32628D` | Focus state underline/border |
| Error | `#B7332A` | Error state |
| Text Primary | `rgba(0, 0, 0, 0.87)` | Input text color |
| Text Secondary | `rgba(0, 0, 0, 0.70)` | Label and placeholder text |
| Text Disabled | `rgba(0, 0, 0, 0.56)` | Disabled state text |
| Border Default | `rgba(0, 0, 0, 0.42)` | Standard/enabled border |
| Border Hover | `#000` | Hover state border |
| Filled Background | `rgba(0, 0, 0, 0.06)` | Filled variant background |
| Filled Hover | `rgba(0, 0, 0, 0.08)` | Filled variant hover background |

### Typography

- **Font Family**: Roboto Flex
- **Label Font Size**: 12px
- **Input Font Size**: 16px
- **Font Weight**: 400 (regular)
- **Line Height**: 12px (label), 24px (input)
- **Letter Spacing**: 0.15px

### Spacing & Dimensions

- **Border Radius**: 8px
- **Padding (Medium)**: 16px (vertical), 12px (horizontal)
- **Padding (Small)**: 8px (vertical), 12px (horizontal)
- **Focus Border Width**: 2px

## Variants

### Standard
The minimal variant with only an underline. Perfect for clean, simple forms.

```tsx
<TextField
  label="Label"
  variant="standard"
  size="medium"
/>
```

**States:**
- Enabled: Gray underline (1px)
- Hovered: Black underline (2px)
- Focused: Primary color underline (2px)
- Disabled: Gray underline (1px), disabled styling
- Error: Error color underline (2px)

### Filled
The filled variant with a background. Ideal for dense forms.

```tsx
<TextField
  label="Label"
  variant="filled"
  size="medium"
/>
```

**States:**
- Enabled: Light gray background, gray underline (1px)
- Hovered: Darker gray background, black underline (2px)
- Focused: Light gray background, primary underline (2px)
- Disabled: Light gray background, gray underline (1px)
- Error: Light gray background, error underline (2px)

### Outlined
The outlined variant with a border. Recommended for most use cases.

```tsx
<TextField
  label="Label"
  variant="outlined"
  size="medium"
/>
```

**States:**
- Enabled: Light border (1px)
- Hovered: Black border (1px)
- Focused: Primary border (2px)
- Disabled: Light border (1px)
- Error: Error border (1px)

## Sizes

### Medium (Default)
```tsx
<TextField
  label="Label"
  size="medium"
/>
```
- Label font size: 12px
- Input font size: 16px
- Padding: 16px vertical, 12px horizontal

### Small
```tsx
<TextField
  label="Label"
  size="small"
/>
```
- Label font size: 12px
- Input font size: 16px
- Padding: 8px vertical, 12px horizontal

## States

### Enabled
Default state, ready for user input.

```tsx
<TextField label="Label" />
```

### Focused
Activated when the input receives focus.

```tsx
<TextField label="Label" autoFocus />
```

### Disabled
Input is disabled and cannot be interacted with.

```tsx
<TextField label="Label" disabled />
```

### Error
Indicates a validation error.

```tsx
<TextField label="Label" error />
```

## Props

The `TextField` component accepts all standard MUI TextField props:

```tsx
interface TextFieldProps extends MuiTextFieldProps {
  // All MUI TextField props are supported
  label?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  size?: 'small' | 'medium';
  disabled?: boolean;
  error?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // ... and more
}
```

## Usage Examples

### Basic Input
```tsx
<TextField
  label="Email"
  variant="outlined"
  size="medium"
  fullWidth
/>
```

### With Default Value
```tsx
<TextField
  label="Username"
  defaultValue="john_doe"
  variant="filled"
  size="medium"
/>
```

### Error State with Helper Text
```tsx
<TextField
  label="Password"
  type="password"
  error
  helperText="Password must be at least 8 characters"
  variant="outlined"
  size="medium"
/>
```

### Controlled Component
```tsx
const [value, setValue] = React.useState('');

<TextField
  label="Input"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  variant="standard"
  size="small"
/>
```

### Custom Styling
```tsx
<TextField
  label="Label"
  variant="outlined"
  sx={{
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#f5f5f5',
    },
  }}
/>
```

## Storybook

View all TextField variants and states in Storybook:

```bash
npm run storybook
```

Then navigate to **Components > TextField** to see:
- All 3 variants (Standard, Filled, Outlined)
- All 2 sizes (Medium, Small)
- All 5 states (Enabled, Hovered, Focused, Disabled, Error)
- With and without values (60+ stories total)

## Showcase

View a live showcase of all TextField combinations at `/textfields`:

```bash
npm run dev
# Visit http://localhost:3000/textfields
```

## Accessibility

The TextField component includes:
- Proper label associations
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Focus indicators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Related Components

- [Button](/docs/components-button--docs) - Action buttons with similar styling
- [Form](/docs/components-form--docs) - Container for multiple inputs
- [Select](/docs/components-select--docs) - Dropdown selection field
