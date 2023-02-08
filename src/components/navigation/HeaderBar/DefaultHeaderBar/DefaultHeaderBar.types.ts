import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

export interface IDefaultHeaderBarProps extends BottomTabHeaderProps {
  leftComponentStatus?: "back" | "menu";
  leftComponent?: JSX.Element;
  rightComponentStatus?: "search" | "cart";
  rightComponent?: JSX.Element;
  centerComponentStatus?: "title" | "logo";
  centerComponent?: JSX.Element;
}
