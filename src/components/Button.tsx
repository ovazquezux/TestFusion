import * as React from "react";
import MuiButton from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export type ButtonColor = 
  | 'primary' 
  | 'secondary' 
  | 'tertiary' 
  | 'destructive' 
  | 'approve' 
  | 'inherit';

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  color?: ButtonColor;
}

export function Button({ 
  children, 
  variant = "contained", 
  color = "primary",
  size = "medium",
  ...props 
}: ButtonProps) {
  return (
    <MuiButton 
      variant={variant} 
      color={color as any}
      size={size}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
