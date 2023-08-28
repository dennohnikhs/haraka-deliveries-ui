import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import colors from "../../colors/colors";
import { GlobalContext } from "../../../context";

export default function DashBoard(props) {
  const navigation = useNavigation();
  const { updateState } = useContext(GlobalContext);

  const navigateToLogin = (userType) => {
    updateState({
      userType: userType,
    });

    navigation.navigate("Login");
  };
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text style={styles.harakaText}>Haraka Deliveries</Text>
        <Text style={styles.proceedText}>Proceed as?</Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigateToLogin("buyer")}
          >
            Buyer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigateToLogin("seller")}
          >
            Seller
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigateToLogin("bodabodaguy")}
          >
            Boda Boda Guy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigateToLogin("couriercompany")}
          >
            Courier Company
          </Text>
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
  },
  harakaText: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },
  proceedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 40,
    marginTop: 15,
  },

  logoContainer: {
    position: "absolute",
    bottom: 120,
    alignItems: "center",
  },
  image: {
    height: 319,
    width: 395,
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  button: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    marginBottom: 30,
    height: 50,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },
});
