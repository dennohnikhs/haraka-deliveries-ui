import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import colors from "../../../../colors/colors";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";

const BodaBodaGuyQRCodeScreen = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;

  const handlePastDeliveries = () => {
    navigation.navigate("BodaBodaGuyHomeScreen");
  };
  return (
    <View style={styles.container}>
      <ExpoStatusBar style="light" />
      <Text style={styles.title}>Scan the QR Code</Text>

      <QRCode style={styles.scanner} value={data} size={200} />
      <Text style={styles.instructions}>Hold the camera up to the QR code</Text>
      <TouchableOpacity style={styles.button} onPress={handlePastDeliveries}>
        <Text style={styles.buttonText}>Past Deliveries</Text>
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
    paddingTop: 70,
  },
  buttonText: {
    color: colors.white,
  },
  button: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,

    height: 50,
    width: "85%",
    alignItems: "center",
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

export default BodaBodaGuyQRCodeScreen;
