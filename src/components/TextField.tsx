import * as React from 'react';
import { FormControl, InputBase, FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { InputBaseProps } from '@mui/material/InputBase';

export interface TextFieldProps extends Omit<InputBaseProps, 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium';
  variant?: 'standard' | 'filled' | 'outlined';
  fullWidth?: boolean;
}

const TextFieldContainer = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '6px',
  width: '100%',

  '&.MuiFormControl-sizeSmall': {
    gap: '4.5px',
  },
}));

const Label = styled('label')(({ theme }) => ({
  fontFamily: 'Roboto Flex, -apple-system, Roboto, Helvetica, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '12px',
  letterSpacing: '0.15px',
  color: 'rgba(0, 0, 0, 0.70)',

  '[role="presentation"] &': {
    color: 'rgba(0, 0, 0, 0.70)',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontFamily: 'Roboto Flex, -apple-system, Roboto, Helvetica, sans-serif',
  width: '100%',

  // Standard variant
  '&.standard-variant': {
    '& .MuiInputBase-input': {
      padding: 0,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.15px',
      color: 'rgba(0, 0, 0, 0.87)',

      '&::placeholder': {
        color: 'rgba(0, 0, 0, 0.70)',
        opacity: 1,
      },
    },

    '& .MuiInput-underline::before': {
      borderBottomColor: 'rgba(0, 0, 0, 0.42)',
      borderBottomWidth: '1px',
    },

    '&:hover .MuiInput-underline::before': {
      borderBottomColor: '#000',
      borderBottomWidth: '2px',
    },

    '&.Mui-focused .MuiInput-underline::after': {
      borderBottomColor: '#32628D',
      borderBottomWidth: '2px',
    },

    '&.Mui-error .MuiInput-underline::before': {
      borderBottomColor: '#B7332A',
      borderBottomWidth: '2px',
    },

    '&.Mui-error:hover .MuiInput-underline::before': {
      borderBottomColor: '#B7332A',
      borderBottomWidth: '2px',
    },

    '&.Mui-disabled .MuiInput-underline::before': {
      borderBottomColor: 'rgba(0, 0, 0, 0.42)',
      borderBottomWidth: '1px',
    },
  },

  // Filled variant
  '&.filled-variant': {
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    borderRadius: '8px 8px 0px 0px',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },

    '&.Mui-focused': {
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
    },

    '&.Mui-error': {
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
    },

    '&.Mui-disabled': {
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
    },

    '& .MuiInputBase-input': {
      padding: '16px 12px',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.15px',
      color: 'rgba(0, 0, 0, 0.87)',

      '&::placeholder': {
        color: 'rgba(0, 0, 0, 0.70)',
        opacity: 1,
      },
    },

    '&.MuiInputBase-sizeSmall .MuiInputBase-input': {
      padding: '12px 12px',
    },

    '& .MuiFilledInput-underline::before': {
      borderBottomColor: 'rgba(0, 0, 0, 0.42)',
      borderBottomWidth: '1px',
    },

    '&:hover .MuiFilledInput-underline::before': {
      borderBottomColor: '#000',
      borderBottomWidth: '2px',
    },

    '&.Mui-focused .MuiFilledInput-underline::after': {
      borderBottomColor: '#32628D',
      borderBottomWidth: '2px',
    },

    '&.Mui-error .MuiFilledInput-underline::before': {
      borderBottomColor: '#B7332A',
      borderBottomWidth: '2px',
    },

    '&.Mui-error:hover .MuiFilledInput-underline::before': {
      borderBottomColor: '#B7332A',
      borderBottomWidth: '2px',
    },

    '&.Mui-disabled .MuiFilledInput-underline::before': {
      borderBottomColor: 'rgba(0, 0, 0, 0.42)',
      borderBottomWidth: '1px',
    },
  },

  // Outlined variant
  '&.outlined-variant': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
      borderRadius: '8px',
    },

    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#000',
    },

    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#32628D',
      borderWidth: '2px',
    },

    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: '#B7332A',
    },

    '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#B7332A',
    },

    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },

    '& .MuiInputBase-input': {
      padding: '16px 12px',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.15px',
      color: 'rgba(0, 0, 0, 0.87)',

      '&::placeholder': {
        color: 'rgba(0, 0, 0, 0.70)',
        opacity: 1,
      },
    },

    '&.MuiInputBase-sizeSmall .MuiInputBase-input': {
      padding: '8px 12px',
    },
  },

  // Disabled state
  '&.Mui-disabled': {
    '& .MuiInputBase-input': {
      color: 'rgba(0, 0, 0, 0.56)',
      cursor: 'not-allowed',
    },
  },

  // Error state label color
  '&.Mui-error label': {
    color: '#B7332A',
  },
}));

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      label,
      helperText,
      error = false,
      disabled = false,
      size = 'medium',
      variant = 'outlined',
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const inputId = props.id || `text-field-${Math.random().toString(36).substr(2, 9)}`;
    const labelId = `${inputId}-label`;
    const errorId = `${inputId}-error`;

    return (
      <TextFieldContainer
        ref={ref}
        fullWidth={fullWidth}
        size={size}
        error={error}
        disabled={disabled}
        className={className}
      >
        {label && (
          <Label
            htmlFor={inputId}
            id={labelId}
            style={{
              color: error
                ? '#B7332A'
                : disabled
                  ? 'rgba(0, 0, 0, 0.56)'
                  : 'rgba(0, 0, 0, 0.70)',
            }}
          >
            {label}
          </Label>
        )}
        <StyledInputBase
          id={inputId}
          className={`${variant}-variant`}
          disabled={disabled}
          error={error}
          size={size === 'small' ? 'small' : 'medium'}
          variant={variant as any}
          aria-labelledby={labelId}
          aria-describedby={helperText ? errorId : undefined}
          {...props}
        />
        {helperText && (
          <FormHelperText id={errorId} error={error}>
            {helperText}
          </FormHelperText>
        )}
      </TextFieldContainer>
    );
  }
);

TextField.displayName = 'TextField';
