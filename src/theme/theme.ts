import { createTheme } from '@mui/material/styles';

// Extend MUI theme to include custom button colors
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    destructive: true;
    approve: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    destructive: Palette['primary'];
    approve: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    destructive?: PaletteOptions['primary'];
    approve?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#32628D',
      contrastText: '#EBEFF4',
    },
    secondary: {
      main: '#2EA095',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#30393A',
      light: '#F5F5F5',
      dark: '#364041',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    destructive: {
      main: '#DB3D32',
      light: '#FBECEB',
      dark: '#902821',
      contrastText: '#FBECEB',
    },
    approve: {
      main: '#186218',
      light: '#E8F5E8',
      dark: '#0D4A0D',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Roboto Flex, -apple-system, Roboto, Helvetica, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          letterSpacing: '0.46px',
          fontFeatureSettings: "'liga' off, 'clig' off",
        },
        sizeLarge: {
          fontSize: 16,
          lineHeight: '26px',
          padding: '8px 22px',
          minHeight: 42,
        },
        sizeMedium: {
          fontSize: 14,
          lineHeight: '24px',
          padding: '6px 16px',
          letterSpacing: '0.4px',
          minHeight: 36,
        },
        sizeSmall: {
          fontSize: 12,
          lineHeight: '22px',
          padding: '4px 10px',
          letterSpacing: '0.46px',
          minHeight: 30,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: 1,
          '&:hover': {
            borderWidth: 1,
          },
        },
      },
      variants: [
        // Primary contained
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: '#32628D',
            color: '#EBEFF4',
            '&:hover': {
              backgroundColor: '#2B5479',
            },
            '&:focus': {
              backgroundColor: '#32628D',
            },
            '&:active': {
              backgroundColor: '#32628D',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Secondary contained
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: '#2EA095',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#268A81',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Tertiary contained
        {
          props: { variant: 'contained', color: 'tertiary' },
          style: {
            backgroundColor: '#F5F5F5',
            color: 'rgba(0, 0, 0, 0.87)',
            '&:hover': {
              backgroundColor: '#EEEEEE',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Destructive contained
        {
          props: { variant: 'contained', color: 'destructive' },
          style: {
            backgroundColor: '#DB3D32',
            color: '#FBECEB',
            '&:hover': {
              backgroundColor: '#C73529',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Approve contained
        {
          props: { variant: 'contained', color: 'approve' },
          style: {
            backgroundColor: '#186218',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#145014',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Primary outlined
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            borderColor: 'rgba(50, 98, 141, 0.5)',
            color: '#32628D',
            '&:hover': {
              backgroundColor: 'rgba(50, 98, 141, 0.08)',
              borderColor: '#32628D',
            },
            '&.Mui-disabled': {
              borderColor: 'rgba(0, 0, 0, 0.12)',
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Secondary outlined
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: {
            borderColor: 'rgba(46, 160, 149, 0.5)',
            color: '#2EA095',
            '&:hover': {
              backgroundColor: 'rgba(46, 160, 149, 0.08)',
              borderColor: '#2EA095',
            },
            '&.Mui-disabled': {
              borderColor: 'rgba(0, 0, 0, 0.12)',
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Tertiary outlined
        {
          props: { variant: 'outlined', color: 'tertiary' },
          style: {
            borderColor: 'rgba(48, 57, 58, 0.5)',
            color: '#30393A',
            '&:hover': {
              backgroundColor: 'rgba(54, 64, 65, 0.08)',
              borderColor: '#30393A',
            },
            '&.Mui-disabled': {
              borderColor: 'rgba(0, 0, 0, 0.12)',
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Destructive outlined
        {
          props: { variant: 'outlined', color: 'destructive' },
          style: {
            borderColor: 'rgba(144, 40, 33, 0.5)',
            color: '#902821',
            '&:hover': {
              backgroundColor: 'rgba(219, 61, 50, 0.08)',
              borderColor: '#902821',
            },
            '&.Mui-disabled': {
              borderColor: 'rgba(0, 0, 0, 0.12)',
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Approve outlined
        {
          props: { variant: 'outlined', color: 'approve' },
          style: {
            borderColor: 'rgba(24, 98, 24, 0.5)',
            color: '#186218',
            '&:hover': {
              backgroundColor: 'rgba(24, 98, 24, 0.08)',
              borderColor: '#186218',
            },
            '&.Mui-disabled': {
              borderColor: 'rgba(0, 0, 0, 0.12)',
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Primary text
        {
          props: { variant: 'text', color: 'primary' },
          style: {
            color: '#32628D',
            '&:hover': {
              backgroundColor: 'rgba(50, 98, 141, 0.08)',
            },
            '&.Mui-disabled': {
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Secondary text
        {
          props: { variant: 'text', color: 'secondary' },
          style: {
            color: '#2EA095',
            '&:hover': {
              backgroundColor: 'rgba(46, 160, 149, 0.08)',
            },
            '&.Mui-disabled': {
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Tertiary text
        {
          props: { variant: 'text', color: 'tertiary' },
          style: {
            color: 'rgba(0, 0, 0, 0.87)',
            '&:hover': {
              backgroundColor: 'rgba(54, 64, 65, 0.08)',
            },
            '&.Mui-disabled': {
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Destructive text
        {
          props: { variant: 'text', color: 'destructive' },
          style: {
            color: '#902821',
            '&:hover': {
              backgroundColor: 'rgba(144, 40, 33, 0.08)',
            },
            '&.Mui-disabled': {
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
        // Approve text
        {
          props: { variant: 'text', color: 'approve' },
          style: {
            color: 'rgba(24, 98, 24, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(24, 98, 24, 0.08)',
              color: '#186218',
            },
            '&.Mui-disabled': {
              color: 'rgba(0, 0, 0, 0.56)',
            },
          },
        },
      ],
    },
  },
});

export default theme;
