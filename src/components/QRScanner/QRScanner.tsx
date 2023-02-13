import React, { FC, useCallback, useEffect, useState } from "react";
import { Dimensions, Alert } from "react-native";
import { BarCodeScannedCallback, BarCodeScanner } from "expo-barcode-scanner";
import Text from "../base/Elements/Text";
import { Box, Button } from "../base";
import { PermissionResponse } from "expo-modules-core";
import {
  BarCodeEvent,
  BarCodePoint,
} from "expo-barcode-scanner/src/BarCodeScanner";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const QRScanner: FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [scanned, setScanned] = useState<boolean>(false);

  const [cornerPoints, setCornerPoints] = useState<BarCodePoint[]>([]);

  const getBarCodeScannerPermissions = async () => {
    const permission: PermissionResponse =
      await BarCodeScanner.requestPermissionsAsync();

    setHasPermission(permission.granted);
  };

  useEffect(() => {
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = useCallback(
    (datas: BarCodeEvent) => {
      if (!scanned) {
        setCornerPoints(datas.cornerPoints);
        if (datas.data) {
          Alert.alert("QR Code", datas.data);
          setScanned(true);
        }
      }
    },
    [scanned]
  );

  if (!hasPermission) return <Text>Camera permission is not granted</Text>;

  return (
    <Box position="relative">
      {!scanned && cornerPoints.length > 0 && (
        <Box
          position="absolute"
          top={cornerPoints[0].y}
          left={cornerPoints[0].x}
          width={cornerPoints[1].x - cornerPoints[0].x}
          height={cornerPoints[2].y - cornerPoints[1].y}
          borderWidth={2}
          borderColor="red"
          borderStyle="dashed"
          zIndex={9999}
        />
      )}

      <BarCodeScanner
        style={{
          height: DEVICE_HEIGHT,
        }}
        onBarCodeScanned={handleBarCodeScanned}
      />
    </Box>
  );
};

export default QRScanner;
