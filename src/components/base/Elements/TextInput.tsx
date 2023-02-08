import { TextInput as RNTextInput } from "react-native";
import styled from "styled-components/native";
import {
  compose,
  color,
  size,
  space,
  border,
  flexbox,
  borderRadius,
  position,
  background,
  typography,
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
  TypographyProps,
} from "styled-system";

export interface TextInputProps
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
    HeightProps,
    TypographyProps {}

const TextInput = styled(RNTextInput)<TextInputProps>(
  compose(
    color,
    size,
    space,
    border,
    borderRadius,
    position,
    background,
    flexbox,
    typography
  )
);

export default TextInput;
