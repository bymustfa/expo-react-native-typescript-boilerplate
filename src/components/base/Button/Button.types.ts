import type { ReactNode } from "react";
import { DefaultButtonProps } from "./DefaultButton";
import { IColors } from "../../../utils/theme/theme.types";

export type ButtonVariantTypes = keyof IColors;

export type ButtonSizeTypes = "sm" | "md" | "lg" | "xl";

export interface IButtonProps extends DefaultButtonProps {
  variant?: ButtonVariantTypes;
  size?: ButtonSizeTypes;
  text?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
