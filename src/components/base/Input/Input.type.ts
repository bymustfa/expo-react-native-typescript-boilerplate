import type { ReactNode } from "react";
import { TextInputProps } from "react-native";

export interface IInputProps extends TextInputProps {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  placeholder?: string;
  mb?: number | string;
  width?: number | string;
  required?: boolean;
}
