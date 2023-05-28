export type Breakpoints = string[];

export type MediaQueries = {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Transitions = {
  normal: string;
};

export type Fonts = {
  base: string;
  changa: string;
  roboto: string;
  exodemibold: string;
  inter: string;
};

export type FontSizes = {
  ms: number;
  xs: number;
  sm: number;
  base: number;
  md: number;
  xl: number;
  "2xl": number;
  "3xl": number;
};

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type FontWeights = {
  thin: number;
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  bolder: number;
  boldest: number;
};

export type Gradients = {
  bubblegum: string;
};

export type Colors = {
  primary: {
    regular: string;
    light: string;
    dark: string;
  };

  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  borderColor: string;
  card: string;

  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
