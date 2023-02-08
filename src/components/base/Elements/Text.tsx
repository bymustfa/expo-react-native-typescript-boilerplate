import styled from "styled-components/native";

import {
  compose,
  color,
  size,
  typography,
  space,
  border,
  flexbox,
} from "styled-system";

import type {
  ColorProps,
  SizeProps,
  SpaceProps,
  BorderProps,
  FlexboxProps,
  TypographyProps,
} from "styled-system";

export interface TextProps
  extends ColorProps,
    SizeProps,
    SpaceProps,
    BorderProps,
    FlexboxProps,
    TypographyProps {}

const Text = styled.Text<TextProps>(
  compose(color, size, space, border, flexbox, typography)
);

export default Text;
