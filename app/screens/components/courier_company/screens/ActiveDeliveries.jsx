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

export default function CourierCompanyActiveDeliveries(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <Text style={styles.activeDeliveriesText}>Active Deliveries</Text>
      <View style={styles.deliveries}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>First Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Second Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Third Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fourth Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fourth Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fourth Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fourth Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
    padding: 20,
    borderRadius: 5,
    top: 20,
    width: 250,
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
