import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../../../../colors/colors";
import { useNavigation } from "@react-navigation/native";

const ThankYouPage = () => {
  const navigation = useNavigation();

  const handleBackHome = () => {
    navigation.navigate("Dashboard");
  };
  return (
    <View style={styles.background}>
      <StatusBar barStyle="auto" />
      <Image
        source={require("../../../../assets/thankyou_main.png")}
        style={styles.thankyouImage}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.successText}>Package Delivered</Text>
        <Text style={styles.successSummary}>
          Thank you for choosing Haraka Deliveries
        </Text>

        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeButtonText} onPress={handleBackHome}>
            Back Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThankYouPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.black,
  },
  descriptionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeButton: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    marginBottom: 50,
    height: 50,
    width: "60%",
    marginTop: 40,
  },
  homeButtonText: {
    color: colors.white,
    alignItems: "center",
    textAlign: "center",
  },
  successText: {
    color: colors.white,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "800",
  },
  successSummary: {
    color: colors.white,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 60,
    fontSize: 15,
    fontWeight: "400",
    marginTop: 10,
  },
});
