import React, { FC, useEffect, useMemo, useState } from "react";
import DefaultButton from "./DefaultButton";
import Box from "../Elements/Box";
import { Animated } from "react-native";
import { theme } from "utils/theme/theme";
import { IColors } from "../../../utils/theme/theme.types";

const { colors } = theme;

const Ball = Animated.createAnimatedComponent(Box);

interface IToggleButtonProps {
  status?: boolean;
  variant?: keyof IColors;
  onChange?: (status: boolean) => void;
}

const ToggleButton: FC<IToggleButtonProps> = ({
  status = false,
  variant = "primary",
  onChange,
}) => {
  const toggleStatus = useMemo(() => status, [status]);

  const SIZE = 28;

  const [animation] = useState(new Animated.Value(0));

  const handleToggle = () => {
    Animated.timing(animation, {
      toValue: toggleStatus ? 0 : SIZE - 4,
      duration: 100,
      useNativeDriver: true,
    }).start();

    onChange && onChange(!toggleStatus);
  };

  return (
    <DefaultButton
      backgroundColor={colors.light}
      height={SIZE}
      borderRadius={SIZE}
      position="relative"
      onPress={handleToggle}
      width={SIZE * 2 - 8}
    >
      <Ball
        bg={toggleStatus ? colors[variant] : colors.white}
        borderColor={colors.light}
        borderWidth={1}
        width={SIZE - 2}
        height={SIZE - 2}
        borderRadius={SIZE}
        position="absolute"
        left={0}
        top={0}
        style={{
          transform: [
            {
              translateX: animation,
            },
          ],
        }}
      />
    </DefaultButton>
  );
};

export default ToggleButton;
