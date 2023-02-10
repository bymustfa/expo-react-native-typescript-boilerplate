import React, { FC, useState } from "react";
import { Box, Button, Text, ScrollView, Input } from "components/base";
import QRCode from "react-native-qrcode-svg";
import { Feather } from "@expo/vector-icons";

const HomeScreen: FC = () => {
  const [guid, setGuid] = useState<string>("");

  const generateGuid = () => {
    const guid = "1234567890";
    setGuid(guid);
  };

  return (
    <ScrollView>
      {guid.trim().length > 0 && <QRCode size={300} value={guid} />}
      {guid.trim().length === 0 ? (
        <Button text="Generate Code" onPress={generateGuid} />
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
