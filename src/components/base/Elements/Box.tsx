import { View } from "react-native";
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
  WidthProps,
  HeightProps,
} from "styled-system";

export interface BoxProps
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
    WidthProps,
    HeightProps {}

const Box = styled(View)<BoxProps>(
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
    flex
  )
);

export default Box;
