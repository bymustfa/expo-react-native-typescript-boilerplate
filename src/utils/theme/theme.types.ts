export interface IColors {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
  link: string;

  black: string;
  white: string;
  gray: string;
}

export interface IBorderRadius {
  none: string | number;
  sm: string | number;
  md: string | number;
  lg: string | number;
  xl: string | number;
}

export interface ILogo {
  uri: string;
}

export interface IThemeTypes {
  colors: IColors;
  borderRadius: IBorderRadius;
  logo: ILogo;
}
