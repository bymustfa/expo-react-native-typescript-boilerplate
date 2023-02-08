import { ReactNode } from "react";
import { RootTabParamList } from "./navigation.types";
interface IBottomTabRoutes {
  id: number;
  name: string;
  icon: ReactNode;
  screen: keyof RootTabParamList;
}

export const BottomTabRoutes: IBottomTabRoutes[] = [
  { id: 1, name: "Home", screen: "HomeScreen", icon: <></> },
  { id: 4, name: "Inputs", screen: "InputsScreen", icon: <></> },
  { id: 2, name: "Demo1", screen: "DemoScreen1", icon: <></> },
  { id: 3, name: "Demo2", screen: "DemoScreen2", icon: <></> },
];
