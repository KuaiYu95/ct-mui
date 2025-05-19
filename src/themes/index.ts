import { zhCN } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { dark, light, type Color } from './color';
import componentStyleOverrides from './componentStyleOverrides';
import themePalette from './palette';
import shadows from './shadows';
import themeTypography from './typography';

// declare module '@mui/material/styles' {
//   interface Palette {
//     neutral: Palette['primary'];
//   }

//   // allow configuration using `createTheme`
//   interface PaletteOptions {
//     neutral: PaletteOptions['primary'];
//   }
// }
// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     neutral: true;
//   }
// }

export const theme = <T extends string = 'dark' | 'light'>({
  mode,
  colors,
  theme = {},
}: {
  mode: T;
  colors?: Record<T, Color>;
  theme?: object;
}) => {
  const color: Color = colors ? colors[mode] : mode === 'light' ? light : dark;
  const themeOptions = {
    palette: themePalette(color, mode),
    shadows: shadows(color),
    typography: themeTypography(),
    components: componentStyleOverrides(color),
  };

  const themes = createTheme(deepmerge(themeOptions as any, theme), zhCN);
  return themes;
};

export default theme;
