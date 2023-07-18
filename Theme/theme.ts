import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    todo: PaletteOptions['primary'];
    progress: PaletteOptions['primary'];
    overlay: PaletteOptions['primary'];
  }

  interface PaletteOptions {
    todo: PaletteOptions['primary'];
    progress: PaletteOptions['primary'];
    overlay: PaletteOptions['primary'];
  }

  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    gray: string;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#00587A',
    },
    secondary: {
      main: '#DBEEF5',
    },
    error: {
      main: '#EF2206',
    },
    warning: {
      main: '#FFA500',
    },
    info: {
      main: '#5AC3DD',
    },
    success: {
      main: '#8BC48A',
    },
    background: {
      default: '#ffffff',
    },
    todo: {
      main: '#973FCF',
    },
    progress: {
      main: '#FFA500',
    },
    overlay: {
      main: '#F3F3F3',
    },
    text: {
      primary: '#0D062D',
      secondary: '#4C4E64',
      gray: '#8D8D8D',
    },
  },
  typography: {
    fontFamily: 'inherit',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1.5rem',
      fontWeight: 700,
      fontStyle: 'normal',
    },

    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },

    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '1rem',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '.5rem',
          '&:hover': {
            backgroundColor: '#DBEEF5',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
