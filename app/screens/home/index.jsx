import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import colors from "../../colors/colors";

export default function WelcomeScreen(props) {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Dashboard");
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/image-background.png")}
        />
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
    color: "white",
    fontSize: 30,
    fontWeight: "800",
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
});
