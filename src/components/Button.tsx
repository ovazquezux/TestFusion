import * as React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export type ButtonProps = MuiButtonProps;

export function Button({
  children,
  variant = "contained",
  ...props
}: ButtonProps) {
  return (
    <MuiButton variant={variant} {...props}>
      {children}
    </MuiButton>
  );
}
