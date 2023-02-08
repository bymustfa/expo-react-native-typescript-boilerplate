import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { RootTabParamList } from "navigation/navigation.types";
import { BottomTabRoutes } from "navigation/BottomTabRoutes";
import { Box, Text } from "components/base";
import { theme } from "utils/theme/theme";

const { colors } = theme;

const PlusTab: FC<BottomTabBarProps> = ({ state }) => {
  return (
    <Box
      height={75}
      bg="red"
      position="relative"
      flexDirection="row"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Box
        width="43%"
        bg="black"
        height="100%"
        borderTopRightRadius={55}
        alignItems="center"
        justifyContent="center"
      >
        <Text color="white">AA</Text>
      </Box>

      <Box
        width="43%"
        bg="black"
        height="100%"
        borderTopLeftRadius={55}
        alignItems="center"
        justifyContent="center"
      >
        <Text color="white">BB</Text>
      </Box>

      <Box
        width={55}
        height={55}
        bg="green"
        borderRadius={55}
        position="absolute"
        left={0}
        top={0}
        mx="auto"
      />
    </Box>
  );
};

export default PlusTab;
