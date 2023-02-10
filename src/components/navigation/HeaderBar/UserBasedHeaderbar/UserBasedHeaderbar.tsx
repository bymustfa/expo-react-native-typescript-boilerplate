import React, { FC } from "react";
import { TouchableOpacity, Image, Platform, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { theme } from "utils/theme/theme";
import { BottomTabRoutes } from "navigation/BottomTabRoutes";
import { Box, Text } from "components/base";

import type { RootTabParamList } from "navigation/navigation.types";
import type { UserBasedHeaderbarProps } from "./UserBasedHeaderbar.types";

const { colors, logo } = theme;

const UserBasedHeaderbar: FC<UserBasedHeaderbarProps> = ({
  layout,
  options,
  ...props
}) => {
  const PROFILE_IMAGE =
    "https://pbs.twimg.com/profile_images/1587517246309650433/w15qbyfZ_400x400.jpg";
  const PROFILE_IMAGE_SIZE = 40;

  return (
    <Box
      width="100%"
      p={3}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor={colors.white}
    >
      <TouchableOpacity activeOpacity={0.8} onPress={() => console.log("Menu")}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>

      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png",
        }}
        style={{ width: 20, height: 20 }}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => console.log("Profile")}
      >
        <Box
          as={Image}
          source={{
            uri: "https://pbs.twimg.com/profile_images/1587517246309650433/w15qbyfZ_400x400.jpg",
          }}
          style={{
            width: PROFILE_IMAGE_SIZE,
            height: PROFILE_IMAGE_SIZE,
            borderRadius: PROFILE_IMAGE_SIZE,
          }}
        />
      </TouchableOpacity>
    </Box>
  );
};

export default UserBasedHeaderbar;
