'use client';
import { ThemeProvider as MUIThemeProvider, Theme } from '@mui/material';
import React from 'react';

interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
}

let globalTheme: Partial<Theme> | ((outerTheme: Theme) => Theme) = {};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = globalTheme,
}) => {
  if (theme) globalTheme = theme;
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
