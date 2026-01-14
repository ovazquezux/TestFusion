import * as React from "react";

export type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button type="button">
      {children}
    </button>
  );
}