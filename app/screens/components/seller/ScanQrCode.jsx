import React, { useContext } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import colors from "../../../colors/colors";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import QRCode from "react-native-qrcode-svg";
import { GlobalContext } from "../../../../context";

const QRCodeScreen = () => {
  const {
    state: {
      seller: {
        package_details: weight,
        specialFeatures,
        valueOfTheGoods,
        typeOfGoods,
      },
    },
  } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <ExpoStatusBar style="light" />
      <Text style={styles.title}>Scan the QR Code</Text>

      <QRCode
        style={styles.scanner}
        value={(weight, specialFeatures, valueOfTheGoods, typeOfGoods)}
        size={200}
      />
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
