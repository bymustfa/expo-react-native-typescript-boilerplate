import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUserPreferences } from "./storage.types";

const userPreferencesKey = "userPreferences";

export const getUserPreferences = async (): Promise<IUserPreferences> => {
  const userPreferences = await AsyncStorage.getItem(userPreferencesKey);
  if (userPreferences) {
    return JSON.parse(userPreferences);
  } else {
    return {
      language: "en",
    };
  }
};

export const setUserPreferences = async (
  key: keyof IUserPreferences,
  value: string
) => {
  const userPreferences = await getUserPreferences();
  await AsyncStorage.setItem(
    userPreferencesKey,
    JSON.stringify({ ...userPreferences, [key]: value })
  );
};
