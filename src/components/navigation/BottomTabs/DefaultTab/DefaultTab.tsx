import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { RootTabParamList } from "navigation/navigation.types";
import { BottomTabRoutes } from "navigation/BottomTabRoutes";
import { Box, Text } from "components/base";
import { theme } from "utils/theme/theme";

import DefaultTabButton from "./DefaultTabButton";
import { Animated } from "react-native";

const { colors } = theme;

const AnimatedBox = Animated.createAnimatedComponent(Box);

const DefaultTab: FC<BottomTabBarProps> = ({ state }) => {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  const tabBarRef = useRef(null);
  const [animation] = useState(new Animated.Value(0));

  const activeRoute = state.routes[state.index];
  const activeIndex = useMemo(() => state.index, [state.index]);

  useEffect(() => {
    if (tabBarRef.current) {
      // @ts-ignore
      tabBarRef.current.measure((x, y, width, height, pageX, pageY) => {
        const value = activeIndex * (width / BottomTabRoutes.length) + 50;

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
      ref={tabBarRef}
      flexDirection="row"
      width="100%"
      alignItems="center"
      justifyContent="space-around"
      backgroundColor={colors.white}
      height={75}
      pb={1}
    >
      {BottomTabRoutes.map((route, index) => {
        const active = activeRoute.name === route.screen;
        return (
          <DefaultTabButton
            key={route.id}
            onPress={() => handleNavigate(route.screen)}
            width={[1 / BottomTabRoutes.length]}
            height={55}
            position="relative"
          >
            <Text
              fontWeight={active ? "bold" : "normal"}
              color={active ? colors.primary : colors.dark}
            >
              {route.name}
            </Text>
          </DefaultTabButton>
        );
      })}

      <AnimatedBox
        size={8}
        bg={colors.primary}
        position="absolute"
        bottom={2}
        borderRadius={10}
        style={{
          transform: [
            {
              translateX: animation,
            },
          ],
        }}
      />
    </Box>
  );
};

export default DefaultTab;
