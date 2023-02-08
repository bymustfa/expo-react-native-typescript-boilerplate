import React, { FC, useEffect, useMemo, useRef, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { RootTabParamList } from "navigation/navigation.types";
import { BottomTabRoutes } from "navigation/BottomTabRoutes";
import DefaultButton from "components/base/Button/DefaultButton";

import { theme } from "utils/theme/theme";
import { Feather } from "@expo/vector-icons";
import { Box, Text } from "components/base";

const { colors } = theme;

const PlusTab: FC<BottomTabBarProps> = ({ state }) => {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  const WIDTH = "41%";
  const BOX_SIZE = 75;

  const activeRoute = state.routes[state.index];

  const LEFTDATAS = useMemo(
    () => BottomTabRoutes.slice(0, Math.floor(BottomTabRoutes.length / 2)),
    [BottomTabRoutes]
  );

  const RIGHTDATAS = useMemo(
    () => BottomTabRoutes.slice(Math.floor(BottomTabRoutes.length / 2)),
    [BottomTabRoutes]
  );

  const handleNavigate = (screenName: keyof RootTabParamList) => {
    navigation.navigate(screenName);
  };

  return (
    <Box
      width="100%"
      position="absolute"
      bottom={0}
      flexDirection="row"
      alignItems="flex-end"
      justifyContent="space-between"
      height={75}
    >
      <Box
        width={WIDTH}
        bg={colors.white}
        height="100%"
        borderTopRightRadius={55}
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        {LEFTDATAS.map((item, index) => {
          const active = activeRoute.name === item.screen;

          return (
            <DefaultButton
              key={index}
              mr={15}
              onPress={() => handleNavigate(item.screen)}
            >
              <Feather
                name={item.iconName}
                size={20}
                color={active ? colors.primary : colors.black}
              />
              <Text color={active ? colors.primary : colors.black}>
                {item.name}
              </Text>
            </DefaultButton>
          );
        })}
      </Box>

      <Box
        width={WIDTH}
        bg={colors.white}
        height="100%"
        borderTopLeftRadius={55}
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        {RIGHTDATAS.map((item, index) => {
          const active = activeRoute.name === item.screen;

          return (
            <DefaultButton
              key={index}
              mr={15}
              onPress={() => handleNavigate(item.screen)}
            >
              <Feather
                name={item.iconName}
                size={20}
                color={active ? colors.primary : colors.black}
              />
              <Text color={active ? colors.primary : colors.black}>
                {item.name}
              </Text>
            </DefaultButton>
          );
        })}
      </Box>

      <Box
        width={85}
        bg={colors.white}
        height={45}
        position="absolute"
        left={0}
        bottom={0}
        style={{
          // center horizontally
          left: "50%",
          marginLeft: -(85 / 2),
        }}
      />

      <DefaultButton
        size={BOX_SIZE}
        bg="green"
        borderRadius={55}
        position="absolute"
        style={{
          bottom: 10,
          left: "50%",
          marginLeft: -(BOX_SIZE / 2),
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 1,
        }}
      >
        <Feather name="plus" size={24} color="white" />
      </DefaultButton>
    </Box>
  );
};

export default PlusTab;
