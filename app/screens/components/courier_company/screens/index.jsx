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

export default function CourierCompanyHomeScreen(props) {
  const navigation = useNavigation();
  const handlePastDeliveries = () => {
    navigation.navigate("CourierCompanyPastDeliveries");
  };
  const handleProfilePictureEdit = () => {
    navigation.navigate("CourierCompanyProfileEdit");
  };
  const handleActiveDeliveries = () => {
    navigation.navigate("CourierCompanyActiveDeliveries");
  };
  const handleAddDelivery = () => {
    navigation.navigate("CourierCompanyQRCodeScanner");
  };
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <View style={styles.buyerHeadlineContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <TouchableOpacity onPress={handleProfilePictureEdit}>
            <Image
              style={styles.buyerProfileImage}
              source={require("../../../../assets/logo.png")}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handlePastDeliveries}>
          <View style={styles.deliveriesDisplay}>
            <Text style={styles.totalDeliveriesText}>Total Deliveries</Text>
            <Text style={styles.totalDeliveriesValue}>100</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.logoContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddDelivery}>
          <Text style={styles.buttonText}>Add Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleActiveDeliveries}
        >
          <Text style={styles.buttonText}>Active Deliveries</Text>
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
  buyerProfileImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  deliveriesDisplay: {
    color: colors.black,
    marginBottom: 80,
    height: 80,
    width: "100%",
    backgroundColor: colors.white,
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
    fontWeight: "700",
  },
  totalDeliveriesValue: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: "800",
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
    height: 50,
    marginBottom: 60,
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
