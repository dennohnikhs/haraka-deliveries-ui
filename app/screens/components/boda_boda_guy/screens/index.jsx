import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import colors from "../../../../colors/colors";
import { useNavigation } from "@react-navigation/native";

export default function BodaBodaGuyHomeScreen(props) {
  const navigation = useNavigation();
  const handleStartDelivery = () => {
    navigation.navigate("BodaBodaGuyQRCodeScanner");
  };
  const handleProfilePictureEdit = () => {
    navigation.navigate("BodaBodaGuyProfileEdit");
  };
  const handleTotalPastDeliveries = () => {
    navigation.navigate("BodaBodaGuyPastDeliveries");
  };

  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <View style={styles.buyerHeadlineContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <TouchableOpacity onPress={handleProfilePictureEdit}>
            <View style={styles.profileEdit}>
              <Image
                style={styles.bodaGuyProfileImage}
                source={require("../../../../assets/logo.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleTotalPastDeliveries}>
          <View style={styles.deliveriesDisplay}>
            <Text style={styles.totalDeliveriesText}>Total Deliveries</Text>
            <Text style={styles.totalDeliveriesValue}>120</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.logoContainer}>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.button} onPress={handleStartDelivery}>
            <Text style={styles.buttonText}>Start Delivery</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.logo}
          source={require("../../../../assets/logo.png")}
        />
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
  buyerHeadlineContainer: {
    marginTop: 70,
    width: "80%",
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
    bottom: 50,
    alignItems: "center",
    gap: 20,
  },
  image: {
    height: 319,
    width: 395,
  },
  actionButtons: {
    marginTop: 20,
    gap: 20,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  bodaGuyProfileImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  deliveriesDisplay: {
    color: colors.black,
    marginBottom: 80,
    height: 100,
    width: "100%",
    backgroundColor: colors.darkGray,
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
  },
  totalDeliveriesText: {
    marginTop: 20,
    fontSize: 23,
    fontWeight: "800",
    color: colors.white,
  },
  totalDeliveriesValue: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: "800",
    color: colors.white,
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    height: 60,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "400",
  },
  welcomeText: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "700",
  },
});
