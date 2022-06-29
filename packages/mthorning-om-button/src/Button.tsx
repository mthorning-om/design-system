import * as React from "react";
import { toSlug } from "@mthorning-om/utils";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button style={{ background: "yellow", color: "black" }}>
      {toSlug("hello + world")}
    </button>
  );
}

Button.displayName = "Button";
