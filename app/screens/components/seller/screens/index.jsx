import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import colors from "../../../../colors/colors";
import { useNavigation } from "@react-navigation/native";

export default function SellerHomePage(props) {
  const navigation = useNavigation();
  const handleStartNewDeliveries = () => {
    navigation.navigate("NewDelivery");
  };
  const handleSellerProfileEdit = () => {
    navigation.navigate("SellerProfileEdit");
  };
  const handlePastDeliveries = () => {
    navigation.navigate("SellerPastDeliveries");
  };

  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <View style={styles.sellerHeadlineContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <TouchableOpacity onPress={handleSellerProfileEdit}>
            <Image
              style={styles.sellerProfileImage}
              source={require("../../../../assets/logo.png")}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handlePastDeliveries}>
          <View style={styles.deliveriesDisplay}>
            <Text style={styles.totalDeliveriesText}>Total Deliveries</Text>
            <Text style={styles.totalDeliveriesValue}>10</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.logoContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleStartNewDeliveries}
        >
          <Text style={styles.buttonText}>Start New Deliveries</Text>
        </TouchableOpacity>
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
  sellerHeadlineContainer: {
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
  sellerProfileImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  deliveriesDisplay: {
    marginBottom: 80,
    height: 80,
    width: "100%",
    backgroundColor: "#373737",
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
  },
  totalDeliveriesText: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: 20,
    fontWeight: "600",
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
    marginBottom: 130,
    height: 50,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },
  welcomeText: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "700",
  },
});
