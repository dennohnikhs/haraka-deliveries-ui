import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import colors from "../../../colors/colors";
import { StatusBar } from "expo-status-bar";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const QRCodeScreen = () => {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style="light" />
      <Text style={styles.title}>Scan the QR Code</Text>

      <View style={styles.scanner} />
      <Text style={styles.instructions}>Hold the camera up to the QR code</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.white,
  },
  qrCodeImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  scanner: {
    color: colors.white,
    height: "80%",
    width: "80%",
  },
  instructions: {
    fontSize: 16,
    marginTop: 20,
    color: colors.white,
  },
});

export default QRCodeScreen;
