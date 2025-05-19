import { useTheme } from '@mui/material';

function useDefaultProps<Props extends Record<string, any>>(
  props: Props,
  name: string,
) {
  const theme = useTheme();
  const config = (
    theme.components as Record<
      string,
      { defaultProps?: any; styleOverrides?: any; variants?: any }
    >
  )?.[name];
  const output = { ...props };
  if (config?.defaultProps) {
    Object.keys(config.defaultProps).forEach((key) => {
      if (output[key] === undefined) {
        (output as any)[key] = config.defaultProps[key];
      }
    });
  }
  return output;
}

export default useDefaultProps;
