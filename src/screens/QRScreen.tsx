import React, { FC, useState } from "react";
import { Box, Button, Text, ScrollView, Input } from "components/base";
import QRCode from "react-native-qrcode-svg";
import { Feather } from "@expo/vector-icons";
import { guid } from "utils/helpers/string";
import QRScanner from "components/QRScanner/QRScanner";
import Modal from "react-native-modal";
import { theme } from "../utils/theme/theme";
import { Alert } from "react-native";
import DefaultButton from "../components/base/Button/DefaultButton";

const { colors, borderRadius } = theme;

interface IQRModalContentProps {
  onClose: () => void;
}
const QRModalContent: FC<IQRModalContentProps> = ({ onClose }) => {
  const [QRdata, setQRdata] = useState({
    code: guid(),
    amount: 100,
    currency: "TRY",
    description: "Test",
    reference: "123456789",
  });

  const handleGenerateQR = () => {
    setQRdata({
      ...QRdata,
      code: guid(),
    });
  };

  return (
    <>
      <DefaultButton
        mx="auto"
        bg={colors.white}
        alignItems="center"
        justifyContent="center"
        width={218}
        height={218}
        borderRadius={borderRadius.md}
        onLongPress={handleGenerateQR}
      >
        <QRCode
          value={JSON.stringify(QRdata)}
          size={200}
          logo={{ uri: "https://mustafaozturk.kim/images/me.png" }}
          logoBackgroundColor="transparent"
          logoBorderRadius={8}
        />
      </DefaultButton>

      <Box mt={2} alignItems="center" justifyContent="center">
        <Button
          variant="dark"
          text="İptal"
          rightIcon={<Feather name="x" size={22} color="white" />}
          onPress={onClose}
          onLongPress={() => {
            Alert.alert(JSON.stringify(QRdata));
          }}
        />
      </Box>
    </>
  );
};

const QRScreen: FC = () => {
  const [qrMode, setQrMode] = useState(false);
  const [scanMode, setScanMode] = useState(false);

  return (
    <ScrollView flex={1}>
      <Modal isVisible={qrMode}>
        <QRModalContent onClose={() => setQrMode(false)} />
      </Modal>

      <Modal isVisible={scanMode}>
        <QRScanner />
      </Modal>

      {(!qrMode || !scanMode) && (
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            variant="dark"
            text="Gönder"
            width="45%"
            onPress={() => setScanMode(true)}
          />
          <Button text="Al" width="45%" onPress={() => setQrMode(true)} />
        </Box>
      )}
    </ScrollView>
  );
};

export default QRScreen;
