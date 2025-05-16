import { createContext } from 'react';
export type ThemeMode = 'dark' | 'light' | 'system' | string;

export interface ThemeContextProps {
  mode: ThemeMode;
  setThemeMode(mode: ThemeMode): void;
}

const ThemeContext = createContext({} as ThemeContextProps);

export default ThemeContext;
