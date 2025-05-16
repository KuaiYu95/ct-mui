import { zhCN } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { type Color, dark, light } from './color';
import componentStyleOverrides from './componentStyleOverrides';
import themePalette from './palette';
import shadows from './shadows';
import themeTypography from './typography';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export const theme = <T extends string = 'dark' | 'light'>({
  mode,
  colors,
  theme: customTheme = {},
}: {
  mode: T;
  colors?: Record<T, Color>;
  theme?: any;
}) => {
  const color: Color = colors ? colors[mode] : mode === 'light' ? light : dark;
  const themeOptions = {
    palette: customTheme.palette ? customTheme.palette(color, mode) : themePalette(color, mode),
    shadows: shadows(color),
    typography: themeTypography(),
    components: customTheme.components ? customTheme.components(color) : componentStyleOverrides(color),
  };
  let otherOptions = { ...customTheme };
  if (otherOptions.palette) delete otherOptions.palette
  if (otherOptions.components) delete otherOptions.components

  const themes = createTheme(deepmerge(themeOptions as any, otherOptions), zhCN);
  return themes;
};

export default theme;
