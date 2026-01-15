import * as React from 'react';
import MuiTextField from '@mui/material/TextField';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export interface TextFieldProps extends MuiTextFieldProps {}

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    return <MuiTextField ref={ref} {...props} />;
  }
);

TextField.displayName = 'TextField';
