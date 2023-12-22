import '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette {
    other: {
      divider: string;
      gray5: string;
      gray2: string;
      gray1: string;
      red2: string;
    };
    light: {
      gris: string;
      darkPurple: string;
      blue: string;
      orange: string;
      pink: string;
      gray: string;
      lightPurple: string;
      yellow: string;
      darkGreen: string;
      fuchsia: string;
    };
    secondary: {
      shades: string;
    };
  }
  interface PaletteOptions {
    other: {
      divider: string;
      gray5: string;
      gray2: string;
      gray1: string;
      red2: string;
    };
    light: {
      gris: string;
      darkPurple: string;
      blue: string;
      orange: string;
      pink: string;
      gray: string;
      lightPurple: string;
      yellow: string;
      darkGreen: string;
      fuchsia: string;
    };
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsColorOverrides {
    customColors: true;
    light: true;
  }
}

declare module '@mui/material/Box' {
  interface BoxPropsColorOverrides {
    customColors: true;
    light: true;
  }
}

declare module '@mui/material/Badge' {
  interface BoxPropsColorOverrides {
    info: {
      light: true;
    };
  }
}

declare module '@mui/material/Box' {
  interface BoxPropsColorOverrides {
    customColors: true;
    light: true;
  }
}
