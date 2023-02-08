import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import {
  compose,
  color,
  size,
  space,
  border,
  borderRadius,
  position,
  background,
  display,
  boxShadow,
  flexbox,
  flex,
  width,
  height,
} from "styled-system";

import type {
  ColorProps,
  SizeProps,
  SpaceProps,
  BorderProps,
  BorderRadiusProps,
  PositionProps,
  BackgroundProps,
  DisplayProps,
  BoxShadowProps,
  FlexboxProps,
  FlexProps,
  MarginProps,
  PaddingProps,
  WidthProps,
  HeightProps,
} from "styled-system";
import { theme } from "utils/theme/theme";

export interface DefaultButtonProps
  extends ColorProps,
    SizeProps,
    SpaceProps,
    BorderProps,
    BorderRadiusProps,
    PositionProps,
    BackgroundProps,
    DisplayProps,
    BoxShadowProps,
    FlexboxProps,
    FlexProps,
    MarginProps,
    PaddingProps,
    WidthProps,
    HeightProps,
    TouchableOpacityProps {}

const DarkTabButton = styled(TouchableOpacity)<DefaultButtonProps>(
  compose(
    color,
    size,
    space,
    border,
    borderRadius,
    position,
    background,
    display,
    boxShadow,
    flexbox,
    flex,
    width,
    height
  )
);

DarkTabButton.defaultProps = {
  activeOpacity: 0.8,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.borderRadius.md,
};

export default DarkTabButton;
