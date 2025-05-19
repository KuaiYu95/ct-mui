'use client';
import * as React from 'react';
import ThemeContext from '../themes/themeContext';

export default function useThemeMode() {
  const theme = React.useContext(ThemeContext);
  return theme;
}
