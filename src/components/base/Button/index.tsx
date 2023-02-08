import React, { FC } from "react";
import type { IButtonProps } from "./Button.types";
import { theme } from "utils/theme/theme";

import type { IColors } from "utils/theme/theme.types";
import Text from "components/base/Elements/Text";
import Box from "components/base/Elements/Box";
import DefaultButton from "./DefaultButton";

const BACKGROUND_COLORS: IColors = {
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
  success: theme.colors.success,
  danger: theme.colors.danger,
  warning: theme.colors.warning,
  info: theme.colors.info,
  light: theme.colors.light,
  dark: theme.colors.dark,
  link: theme.colors.link,

  black: theme.colors.black,
  white: theme.colors.white,
  gray: theme.colors.gray,
};

const TEXT_COLORS = {
  primary: "white",
  secondary: "white",
  success: "white",
  danger: "white",
  warning: "black",
  info: "white",
  light: "black",
  dark: "white",
  link: "white",

  black: "white",
  white: "black",
  gray: "black",
};

const PADDING = {
  sm: "5px 10px",
  md: "10px 20px",
  lg: "15px 30px",
  xl: "20px 40px",
};

const FONT_SIZE = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

const Button: FC<IButtonProps> = ({
  variant = "primary",
  size = "md",
  text = null,
  leftIcon = null,
  rightIcon = null,
  ...props
}) => {
  return (
    <DefaultButton
      width="auto"
      bg={BACKGROUND_COLORS[variant]}
      p={PADDING[size]}
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      {...props}
    >
      {leftIcon && <Box mr={2}>{leftIcon}</Box>}
      {text && (
        <Text fontSize={FONT_SIZE[size]} color={TEXT_COLORS[variant]}>
          {text}
        </Text>
      )}
      {rightIcon && <Box ml={2}>{rightIcon}</Box>}
    </DefaultButton>
  );
};

export default Button;
