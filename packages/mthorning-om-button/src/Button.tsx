import * as React from "react";
import { helloWorld } from "@mthorning-om/utils";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button style={{ background: "yellow", color: "black" }}>
      {helloWorld()}
    </button>
  );
}

Button.displayName = "Button";
