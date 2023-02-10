import React, { FC, useState, useEffect, useCallback } from "react";
import { TouchableOpacity, Image, Platform, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { theme } from "utils/theme/theme";
import { BottomTabRoutes } from "navigation/BottomTabRoutes";
import { Box, Input, Text } from "components/base";

import type { RootTabParamList } from "navigation/navigation.types";
import type { IDefaultHeaderBarProps } from "./DefaultHeaderBar.types";

const { colors, logo } = theme;

const DefaultHeaderBar: FC<IDefaultHeaderBarProps> = ({
  leftComponentStatus = "back",
  leftComponent = null,
  rightComponentStatus = "search",
  rightComponent,
  centerComponentStatus = "title",
  centerComponent,
  layout,
  options,
  ...props
}) => {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();
  const route = useRoute();
  const findScreen = BottomTabRoutes.find((item) => item.screen === route.name);
  const [searchMode, setSearchMode] = useState(false);

  const [searchText, setSearchText] = useState<string>("");

  return (
    <Box
      width="100%"
      p={3}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor={colors.white}
      // mb={10}
    >
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />

      {rightComponentStatus === "search" && searchMode && (
        <Box
          position="absolute"
          left={0}
          top={0}
          right={0}
          bottom={0}
          zIndex={2}
          px={3}
          alignItems="center"
          justifyContent="center"
        >
          <Input
            width="100%"
            placeholder="Search..."
            onChangeText={setSearchText}
            value={searchText}
            rightIcon={
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setSearchMode(false);
                  setSearchText("");
                }}
              >
                <Feather name="x" color={colors.gray} size={22} />
              </TouchableOpacity>
            }
          />
        </Box>
      )}

      <Box>
        {leftComponent ? (
          leftComponent
        ) : (
          <>
            {leftComponentStatus === "back" && navigation.canGoBack() && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
              >
                <Feather name="chevron-left" size={24} color="black" />
              </TouchableOpacity>
            )}

            {leftComponentStatus === "menu" && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => console.log("Menu")}
              >
                <Feather name="menu" size={24} color="black" />
              </TouchableOpacity>
            )}
          </>
        )}
      </Box>

      <Box>
        {centerComponent ? (
          centerComponent
        ) : (
          <>
            {centerComponentStatus === "title" && (
              <Text fontWeight="bold" fontSize={24}>
                {findScreen?.name}
              </Text>
            )}

            {centerComponentStatus === "logo" && (
              <Image
                source={{
                  uri: logo.uri,
                }}
                style={{ width: 100, height: 32 }}
              />
            )}
          </>
        )}
      </Box>

      <Box>
        {rightComponent ? (
          rightComponent
        ) : (
          <>
            {rightComponentStatus === "search" && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSearchMode(true)}
              >
                <Feather name="search" size={24} color="black" />
              </TouchableOpacity>
            )}
            {rightComponentStatus === "cart" && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => console.log("Cart")}
              >
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default DefaultHeaderBar;
