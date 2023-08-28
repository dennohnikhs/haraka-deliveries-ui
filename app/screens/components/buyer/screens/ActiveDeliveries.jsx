import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../../../../colors/colors";

export default function ActiveDeliveries(props) {
  const navigation = useNavigation();

  const handleFirstDelivery = () => {
    navigation.navigate("BuyerQRCodeScanner");
  };
  const handleSecondDelivery = () => {
    navigation.navigate("BuyerQRCodeScanner");
  };
  const handleThirdDelivery = () => {
    navigation.navigate("BuyerQRCodeScanner");
  };
  const handleFourthDelivery = () => {
    navigation.navigate("BuyerQRCodeScanner");
  };
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <Text style={styles.activeDeliveriesText}>Active Deliveries</Text>
      <View style={styles.deliveries}>
        <TouchableOpacity style={styles.button} onPress={handleFirstDelivery}>
          <Text style={styles.buttonText}>First Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSecondDelivery}>
          <Text style={styles.buttonText}>Second Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleThirdDelivery}>
          <Text style={styles.buttonText}>Third Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFourthDelivery}>
          <Text style={styles.buttonText}>Fourth Delivery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.black,
    padding: 20,
    paddingTop: 50,
  },
  activeDeliveriesText: {
    color: colors.white,
    fontSize: 30,
    top: 70,
    fontWeight: "400",
    marginBottom: 30,
  },
  button: {
    marginTop: 10,
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
  deliveries: {
    marginTop: 70,
  },
});
