import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";
import colors from "../../colors/colors";

export default function HomeScreenMain(props) {
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/image-background.png")}
        />
      </View>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Welcome to Haraka Deliveries</Text>
      </View>
      <View style={styles.loginContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text style={styles.harakaText}>Haraka Deliveries</Text>
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
    color: colors.white,
    fontSize: 30,
    fontWeight: "800",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "400",
    color: colors.white,
  },

  logoContainer: {
    position: "absolute",
    bottom: 80,
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
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    bottom: 120,
    gap: 70,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.green,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,

    borderRadius: 5,
  },

  welcomeText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "800",
  },
  welcomeTextContainer: {
    marginTop: 110,
  },
});
