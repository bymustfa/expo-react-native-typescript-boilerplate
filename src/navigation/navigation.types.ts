import { NavigatorScreenParams } from "@react-navigation/native";
import ButtonScreen from "../screens/ButtonScreen";

export type RootTabParamList = {
  HomeScreen: undefined;
  InputsScreen: undefined;
  ButtonScreen: undefined;
  DemoScreen2: undefined;
};

export type DrawerParamList = {
  HomeScreen: undefined;
  InputsScreen: undefined;
  ButtonScreen: undefined;
  DemoScreen2: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList>;
  Drawer: NavigatorScreenParams<DrawerParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
