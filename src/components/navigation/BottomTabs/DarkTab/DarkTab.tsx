import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { Animated, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import type { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import type { RootTabParamList } from "navigation/navigation.types";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { BottomTabRoutes } from "navigation/BottomTabRoutes";
import DarkTabButton from "./DarkTabButton";

import { Box, Text } from "components/base";
import { theme } from "utils/theme/theme";

const { colors } = theme;

const AnimatedBox = Animated.createAnimatedComponent(Box);

const DarkTab: FC<BottomTabBarProps> = ({ state }) => {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  const lineBoxRef = useRef(null);
  const tabBarRef = useRef(null);

  const [animation] = useState(new Animated.Value(0));

  const activeIndex = useMemo(() => state.index, [state.index]);

  const activeRoute = useMemo(
    () => state.routes[activeIndex],
    [state.routes, activeIndex]
  );

  useEffect(() => {
    if (tabBarRef.current) {
      // @ts-ignore
      tabBarRef.current.measure((x, y, width, height, pageX, pageY) => {
        const value = activeIndex * (width / BottomTabRoutes.length) + 20;

        Animated.timing(animation, {
          toValue: value,
          duration: 100,
          useNativeDriver: true,
        }).start();
      });
    }
  }, [activeIndex, tabBarRef.current]);

  const handleNavigate = (screenName: keyof RootTabParamList) => {
    navigation.navigate(screenName);
  };

  return (
    <Box
      width="100%"
      alignItems="center"
      justifyContent="center"
      backgroundColor="transparent"
      position="absolute"
      bottom={0}
      pb="15px"
    >
      <Box
        ref={tabBarRef}
        bg={colors.dark}
        borderRadius={8}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        width="90%"
        height={65}
        position="relative"
        boxShadow="0px 5px 10px rgba(0, 0, 0, 0.4)"
      >
        {BottomTabRoutes.filter((x) => x.show.bottomTab).map((route, index) => {
          const active = activeRoute.name === route.screen;

          return (
            <DarkTabButton
              key={route.id}
              position="relative"
              height="100%"
              onPress={() => handleNavigate(route.screen)}
              width={[1 / BottomTabRoutes.length]}
            >
              <Feather
                name={route.iconName}
                size={18}
                color={active ? colors.white : colors.light}
              />
              <Text
                mt={1}
                fontWeight={active ? "bold" : "normal"}
                color={active ? colors.white : colors.light}
              >
                {route.name}
              </Text>

              {index !== BottomTabRoutes.length - 1 && (
                <Box
                  bg={colors.gray}
                  width={2}
                  height="70%"
                  position="absolute"
                  right={0}
                />
              )}
            </DarkTabButton>
          );
        })}

        <AnimatedBox
          ref={lineBoxRef}
          borderRadius={8}
          width={50}
          height={3}
          backgroundColor={colors.white}
          position="absolute"
          bottom={1}
          left={0}
          style={{
            transform: [
              {
                translateX: animation,
              },
            ],
          }}
        />
      </Box>
    </Box>
  );
};

export default DarkTab;
