import React, { FC } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";

import Navigation from "navigation/navigation";

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
