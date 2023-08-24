import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";

import colors from "../../../../colors/colors";
import { LogOut, ArrowUp, ChevronLeft } from "react-native-feather";
import Icon from "react-native-vector-icons/Ionicons";
export default function SellerProfileEdit(props) {
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <View style={styles.welcomeContainer}>
        <View style={styles.backButton}>
          <ChevronLeft
            style={styles.backButtonArrow}
            stroke="gray"
            width={32}
            height={32}
          />
          <ChevronLeft
            style={styles.backButtonArrow1}
            stroke="gray"
            width={32}
            height={32}
          />
        </View>
        <View style={styles.profile}>
          <Text style={styles.welcomeText}>Profile</Text>
        </View>
      </View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../../assets/logo.png")}
        />
        <Icon
          name="camera"
          size={20}
          color="green"
          style={{
            position: "relative",
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            borderRadius: 50,
            marginTop: -25,
            marginLeft: 40,
          }}
        />

        <Text style={styles.harakaText}>Edit Your Profile</Text>
      </View>
      <View style={styles.buyerHeadlineContainer}>
        <View style={styles.nameTextField}>
          <TextInput
            placeholder={"First name"}
            style={styles.firstNameInput}
            placeholderTextColor="rgba(255, 255, 255, 0.2)"
          />
          <TextInput
            placeholder={"Last name"}
            style={styles.lastNameInput}
            placeholderTextColor="rgba(255, 255, 255, 0.2)"
          />
        </View>

        <View style={styles.textField}>
          <TextInput
            placeholder={"Email"}
            style={styles.input}
            placeholderTextColor="rgba(255, 255, 255, 0.2)"
          />
        </View>
        <View style={styles.logoContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <LogOut stroke="white" width={24} height={24} />
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
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
  buyerHeadlineContainer: {
    marginTop: 10,
  },
  backButton: {
    display: "flex",
    flexDirection: "row",
  },
  harakaText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 15,
  },
  proceedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 40,
    marginTop: 15,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 0,
  },
  image: {
    height: 319,
    width: 395,
  },
  nameTextField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  backButtonArrow1: {
    marginLeft: -20,
  },
  input: {
    height: 50,
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: colors.white,
    borderRadius: 7,
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
    fontWeight: "400",
  },
  totalDeliveriesValue: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: "800",
  },
  textField: {
    marginTop: 20,
    marginBottom: 35,
  },
  smallText: {
    color: colors.white,
    marginTop: 20,
    top: 20,
  },
  firstNameInput: {
    height: 50,
    width: "49%",
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: colors.white,
    borderRadius: 7,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    top: 30,
  },
  lastNameInput: {
    height: 50,
    width: "49%",
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 10,
    color: colors.white,
    borderRadius: 7,
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    marginBottom: 50,
    height: 50,
    width: "85%",
  },
  logoutButton: {
    backgroundColor: colors.red,
    padding: 15,
    borderRadius: 5,
    height: 50,
    width: "85%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },
  welcomeText: {
    color: colors.white,
    fontSize: 23,
    fontWeight: "600",
  },
  profile: {
    width: "60%",
  },
});
