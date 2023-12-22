// Material UI - Default Theme
// https://mui.com/customization/default-theme/
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#F4F5FA',
      paper: '#FFFFFF',
    },
    info: {
      main: '#41A6F0',
      light: '#7FD7FF',
      contrastText: '#FFFFFF',
    },
    light: {
      gris: '#E3E3EC',
      darkPurple: '#978EC0',
      blue: '#AACBFF',
      orange: '#FFC6C0',
      pink: '#FFAFD5',
      gray: '#E3E3EC',
      lightPurple: '#B5B5FF',
      yellow: '#FFEB9C',
      darkGreen: '#8EE3D5',
      fuchsia: '#D1ADFB',
    },
    primary: {
      main: '#546BE0',
      light: '#8B99FF',
      dark: '#0041AD',
    },
    secondary: {
      main: '#393B7A',
      light: '#FBF6D8',
      dark: '#02154D',
    },
    success: {
      main: '#25B781',
      light: '#65EAB1',
    },
    warning: {
      main: '#FF795C',
    },
    error: {
      main: '#FC4E55',
      light: '#FF6E68',
    },
    grey: {
      100: '#F8F9FF',
      200: '#F2F3FD',
      300: '#E7E9F4',
      500: '#ABAEC8',
      600: '#9D9CBE',
      900: '#33326B',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(53, 51, 108, 0.38)',
    },
    action: {
      active: 'rgba(53, 51, 108, 0.54)',
      selected: 'rgba(53, 51, 108, 0.08)',
      disabled: '#ABAEC8',
      disabledBackground: '#E7E9F4',
      focus: 'rgba(53, 51, 108, 0.12)',
      hover: 'rgba(12, 14, 18, 0.04)',
    },
    divider: 'rgba(86, 90, 242, 0.12)',
    other: {
      gray1: '#494F66',
      divider: '#0C0E12',
      gray5: '#DDE1F1',
      gray2: '#676F8F',
      red2: '#FFD7DA',
    },
  },
  mixins: {
    toolbar: {
      minHeight: 56,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
});

export default theme;
