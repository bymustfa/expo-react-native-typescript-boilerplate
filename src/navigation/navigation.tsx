import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, RootTabParamList } from "./navigation.types";

import { DarkTab, DefaultTab, PlusTab } from "components/navigation/BottomTabs";
import { DefaultHeaderBar } from "../components/navigation/HeaderBar";

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootTabParamList>();

// Screens
import HomeScreen from "screens/HomeScreen";
import DemoScreen from "screens/DemoScreen";
import InputsScreen from "screens/InputsScreen";

const BottomTabNavigator = () => (
  <BottomTab.Navigator
    initialRouteName="HomeScreen"
    tabBar={(props) => <PlusTab {...props} />}
    screenOptions={{
      header: (props) => (
        <DefaultHeaderBar
          leftComponentStatus="back"
          rightComponentStatus="search"
          centerComponentStatus="title"
          {...props}
        />
      ),
    }}
  >
    <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
    <BottomTab.Screen name="InputsScreen" component={InputsScreen} />
    <BottomTab.Screen name="DemoScreen1" component={DemoScreen} />
    <BottomTab.Screen name="DemoScreen2" component={DemoScreen} />
  </BottomTab.Navigator>
);

const Navigation: FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
