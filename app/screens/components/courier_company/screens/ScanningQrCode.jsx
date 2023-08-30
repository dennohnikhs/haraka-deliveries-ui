import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import colors from "../../../../colors/colors";
import { useNavigation } from "@react-navigation/native";

const CourierCompanyQRCodeScanner = () => {
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
    navigation.navigate("CourierCompanyQRCodeScreen", { data: data });
  };

  if (hasCameraPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.activeDeliveriesText}>Active Deliveries</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
      )}
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

export default CourierCompanyQRCodeScanner;
