import { NavigatorScreenParams } from "@react-navigation/native";
import ButtonScreen from "../screens/ButtonScreen";

export type RootTabParamList = {
  HomeScreen: undefined;
  InputsScreen: undefined;
  ButtonScreen: undefined;
  SettingScreen: undefined;
  QRScreen: undefined;
  DemoScreen2: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList>;
  Drawer: NavigatorScreenParams<RootTabParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
