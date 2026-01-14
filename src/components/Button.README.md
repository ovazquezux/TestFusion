# Button Component

A fully-featured button component based on MUI (Material-UI) that implements the Figma design system with custom color variants and comprehensive styling.

## Features

- ✅ Built on top of `@mui/material/Button`
- ✅ Preserves all MUI behavior and accessibility features
- ✅ Custom color variants: Primary, Secondary, Tertiary, Destructive, and Approve
- ✅ Three button styles: Contained, Outlined, and Text
- ✅ Three sizes: Large, Medium, and Small
- ✅ Fully responsive and pixel-perfect implementation
- ✅ Type-safe with TypeScript
- ✅ Comprehensive Storybook stories

## Usage

```tsx
import { Button } from "@/components/Button";

// Basic usage
<Button>Click me</Button>

// With custom props
<Button 
  variant="contained" 
  color="primary" 
  size="medium"
>
  Submit
</Button>

// Different variants
<Button variant="contained" color="secondary">Contained Secondary</Button>
<Button variant="outlined" color="destructive">Outlined Destructive</Button>
<Button variant="text" color="approve">Text Approve</Button>

// Different sizes
<Button size="large">Large Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="small">Small Button</Button>

// Disabled state
<Button disabled>Disabled Button</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'contained' \| 'outlined' \| 'text'` | `'contained'` | Button style variant |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'destructive' \| 'approve' \| 'inherit'` | `'primary'` | Button color theme |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `children` | `React.ReactNode` | - | Button content/label |
| ...rest | `MuiButtonProps` | - | All other MUI Button props are supported |

## Color Variants

### Primary
- **Contained**: Blue background (#32628D) with light text
- **Outlined**: Blue border and text
- **Text**: Blue text only
- **Use case**: Primary actions, main CTAs

### Secondary
- **Contained**: Teal background (#2EA095) with white text
- **Outlined**: Teal border and text
- **Text**: Teal text only
- **Use case**: Secondary actions, alternative options

### Tertiary
- **Contained**: Light gray background with dark text
- **Outlined**: Gray border with dark text
- **Text**: Dark text only
- **Use case**: Tertiary actions, neutral options

### Destructive
- **Contained**: Red background (#DB3D32) with light text
- **Outlined**: Red border and text (#902821)
- **Text**: Red text only
- **Use case**: Destructive actions (delete, remove, cancel)

### Approve
- **Contained**: Green background (#186218) with white text
- **Outlined**: Green border and text
- **Text**: Green text (semi-transparent)
- **Use case**: Approval actions (confirm, accept, approve)

## Sizes

- **Large**: 42px min-height, 16px font-size
- **Medium**: 36px min-height, 14px font-size
- **Small**: 30px min-height, 12px font-size

## Design Tokens

The component uses design tokens from the Figma design:

```css
--Component-button-primary-contained-label: #EBEFF4
--Component-button-primary-contained-background-default: #32628D
--Component-button-secondary-contained-label: #FFF
--Component-button-tertiary-contained-label: rgba(0, 0, 0, 0.87)
--Component-button-destructive-contained-label: #FBECEB
--Component-button-approve-contained-label: #FFF
--radii-border-radius: 8px
```

## Typography

- **Font Family**: Roboto Flex (with fallbacks)
- **Font Weight**: 500
- **Text Transform**: None (no uppercase)
- **Letter Spacing**: 0.46px (large/small), 0.4px (medium)

## Accessibility

All MUI accessibility features are preserved:

- Proper ARIA attributes
- Keyboard navigation support
- Focus states
- Screen reader compatibility
- Disabled state handling

## Storybook

View all variants and states in Storybook:

```bash
npm run storybook
```

Stories include:
- All color variants (Primary, Secondary, Tertiary, Destructive, Approve)
- All style variants (Contained, Outlined, Text)
- All sizes (Large, Medium, Small)
- Disabled states
- Complete showcase view

## Theme Integration

The button is integrated with the MUI theme system via `src/theme/theme.ts`. All styling is done through theme overrides, ensuring consistency across the application.

To customize the button further, modify the theme configuration:

```tsx
// src/theme/theme.ts
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // Add custom overrides here
      },
    },
  },
});
```

## Examples

### Action Buttons
```tsx
<Button variant="contained" color="primary">Save Changes</Button>
<Button variant="outlined" color="secondary">Cancel</Button>
```

### Form Actions
```tsx
<Button variant="contained" color="approve" type="submit">Submit</Button>
<Button variant="text" color="tertiary" type="reset">Reset</Button>
```

### Destructive Actions
```tsx
<Button variant="contained" color="destructive">Delete Account</Button>
<Button variant="outlined" color="destructive">Remove Item</Button>
```

## Development

The component is located at `src/components/Button.tsx` and follows these principles:

1. **MUI First**: Always use MUI's Button as the base
2. **Theme Over Inline**: Prefer theme overrides over sx prop
3. **Accessibility**: Maintain all ARIA and keyboard navigation features
4. **Type Safety**: Full TypeScript support with proper prop types
