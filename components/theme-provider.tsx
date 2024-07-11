"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const themeProps = { ...props, defaultTheme: props.defaultTheme?.trim() };

  console.log("ThemeProvider defaultTheme:", themeProps.defaultTheme); // Debugging log

  return <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>;
}
