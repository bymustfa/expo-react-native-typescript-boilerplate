import { NavigatorScreenParams } from "@react-navigation/native";

export type RootTabParamList = {
  HomeScreen: undefined;
  InputsScreen: undefined;
  DemoScreen1: undefined;
  DemoScreen2: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
