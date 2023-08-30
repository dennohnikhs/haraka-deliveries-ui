import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import colors from "../../../../colors/colors";
import { useNavigation } from "@react-navigation/native";

const BuyerQRCodeScanner = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Bar code with data ${data} has been scanned!`);
  };
  const handleExitScanning = () => {
    navigation.navigate("ThankYouPage");
  };
  const handleScanOtherDeliveries = () => {
    navigation.navigate("ActiveDeliveries");
  };
  if (hasCameraPermission === null) {
    return (
      <Text style={styles.permissions}>
        Requesting for camera permission...
      </Text>
    );
  }
  if (hasCameraPermission === false) {
    return <Text style={styles.permissions}>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.scanningArea}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      <View style={styles.button}>
        {scanned && (
          <Button
            style={styles.exitButton}
            title="Tap to Scan Again"
            onPress={() => setScanned(false)}
          />
        )}
        {scanned && (
          <Button
            style={styles.exitButton}
            title="Confirm more
            Deliveries"
            onPress={() => handleScanOtherDeliveries(true)}
          />
        )}
        {scanned && (
          <Button
            style={styles.exitButton}
            title="Exit"
            onPress={() => handleExitScanning(true)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.black,
  },
  button: {
    marginTop: 30,
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    top: 20,
  },
  exitButton: {
    marginTop: 30,
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    top: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },

  button: {
    gap: 10,
  },
  scanningArea: {
    height: "100%",
    width: "70%",
  },
  permissions: {
    color: colors.white,
  },
});

export default BuyerQRCodeScanner;
