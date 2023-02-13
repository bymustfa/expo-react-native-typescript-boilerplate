import React, { FC, ReactNode } from "react";
import { ScrollView as RNScrollView, ScrollViewProps } from "react-native";

import Box, { BoxProps } from "./Box";

interface IScrollViewProps extends ScrollViewProps, BoxProps {
  children: ReactNode;
}

const ScrollView: FC<IScrollViewProps> = ({ children, ...props }) => {
  return (
    <Box as={RNScrollView} px={15} py={10} {...props}>
      {children}
      <Box height={100} />
    </Box>
  );
};

export default ScrollView;
