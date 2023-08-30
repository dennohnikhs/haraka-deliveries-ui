import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import colors from "../../../../colors/colors";
import QRCode from "react-native-qrcode-svg";
import { useNavigation } from "@react-navigation/native";

const CourierCompanyQRCodeScreen = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;

  const handleBackHome = () => {
    navigation.navigate("CourierCompanyHomeScreen");
  };
  return (
    <View style={styles.container}>
      <ExpoStatusBar style="light" />
      <Text style={styles.title}>Scan the QR Code</Text>
      <QRCode style={styles.scanner} value={data} size={200} />
      <Text style={styles.instructions}>Hold the camera up to the QR code</Text>
      <TouchableOpacity style={styles.button} onPress={handleBackHome}>
        <Text style={styles.buttonText}>Back Home</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    marginBottom: 50,
    height: 50,
    width: "85%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
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

export default CourierCompanyQRCodeScreen;
