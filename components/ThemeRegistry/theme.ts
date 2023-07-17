import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    todo: PaletteOptions['primary'];
    progress: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
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
      main: '#00587A',
      light: '#EADBF4',
    },
    progress: {
      main: '#FFA500',
      light: '#FCEACA',
    },
    gray: {
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
      fontStyle: 'normal',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      fontStyle: 'normal',
    },
    subtitle1: {
      fontSize: '1.5rem',
      fontWeight: 700,
      fontStyle: 'normal',
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
  },
});

theme = responsiveFontSizes(theme);

export default theme;
