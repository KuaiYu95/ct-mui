import { type Color } from './color';
export default function componentStyleOverrides(color: Color) {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: any) => {
          return {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
              ...(ownerState.color === 'neutral' && {
                color: color.primary.main,
                fontWeight: 700,
              }),
            },
          };
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          '.MuiFormLabel-asterisk': {
            color: color.error.main,
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '.MuiTableRow-root:hover': {
            '.MuiTableCell-root:not(.cx-table-empty-td)': {
              backgroundColor: color.table.row.hoverColor,
            },
          },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          background: color.background.paper,
          borderColor: color.table.cell.borderColor,
        },
        head: {
          backgroundColor: color.table.head.backgroundColor,
          color: color.table.head.color,
          fontSize: '12px',
          height: '28px',
          paddingTop: '0 !important',
          paddingBottom: '0 !important',
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 1,
      },
      styleOverrides: {
        root: ({ ownerState }: any) => {
          return {
            ...(ownerState.elevation === 0 && {
              backgroundColor: color.background.paper0,
            }),
            ...(ownerState.elevation === 2 && {
              backgroundColor: color.background.paper2,
            }),
            backgroundImage: 'none',
          };
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: color.background.chip,
          borderColor: color.divider,
        },
        label: {
          color: color.text.secondary,
          padding: '0 14px',
          fontSize: '14px',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 1,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: color.primary.main,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: color.divider,
          },
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          color: color.text.primary,
          backgroundColor: color.background.paper0,
          boxShadow: ' 0px 0px 20px 0px rgba(0,0,0,0.1)',
          padding: '16px',
          maxWidth: '600px',
          lineHeight: '22px',
          fontSize: '14px',
        },
        arrow: {
          color: color.background.paper0,
        },
      },
    },
  };
}
