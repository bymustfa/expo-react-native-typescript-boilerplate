import { IThemeTypes, IColors, IBorderRadius, ILogo } from "./theme.types";

const COLORS: IColors = {
  primary: "#004FC4",
  secondary: "#00B7C4",
  success: "#05A660",
  danger: "#FF3B3B",
  warning: "#E5B800",
  info: "#4D0099",
  light: "#f8f9fa",
  dark: "#1C1C28",
  link: "#007bff",

  black: "#000000",
  white: "#ffffff",
  gray: "#6c757d",
};

const BORDER_RADIUS: IBorderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
};

const LOGO: ILogo = {
  uri: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
};

export const theme: IThemeTypes = {
  colors: COLORS,
  borderRadius: BORDER_RADIUS,
  logo: LOGO,
};
