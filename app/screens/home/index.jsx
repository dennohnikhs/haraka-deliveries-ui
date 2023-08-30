import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import colors from "../../colors/colors";

export default function WelcomeScreen(props) {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate("Dashboard");
  };

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

      <View style={styles.getStartedButton}>
        <TouchableOpacity onPress={handleGetStarted}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  harakaText: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },
  getStartedButton: {
    padding: 15,
    backgroundColor: colors.green,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    marginBottom: 130,
  },
  getStartedButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.white,
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
