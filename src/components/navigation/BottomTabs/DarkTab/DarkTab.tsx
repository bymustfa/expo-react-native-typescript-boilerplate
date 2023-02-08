import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { RootTabParamList } from "navigation/navigation.types";
import { BottomTabRoutes } from "navigation/BottomTabRoutes";
import { Box, Text } from "components/base";
import { theme } from "utils/theme/theme";
import DarkTabButton from "./DarkTabButton";

const { colors } = theme;

const AnimatedBox = Animated.createAnimatedComponent(Box);

const DarkTab: FC<BottomTabBarProps> = ({ state }) => {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  const lineBoxRef = useRef(null);
  const tabBarRef = useRef(null);

  const [animation] = useState(new Animated.Value(0));

  const activeIndex = useMemo(() => state.index, [state.index]);

  const activeRoute = state.routes[state.index];

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
        height={60}
        position="relative"
      >
        {BottomTabRoutes.map((route, index) => {
          const active = activeRoute.name === route.screen;

          return (
            <DarkTabButton
              key={route.id}
              position="relative"
              height="100%"
              onPress={() => handleNavigate(route.screen)}
              width={[1 / BottomTabRoutes.length]}
            >
              <Text
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
          bottom={2}
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
