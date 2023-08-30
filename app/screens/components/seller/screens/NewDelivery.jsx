import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import colors from "../../../../colors/colors";
import { useNavigation } from "@react-navigation/native";

const NewDelivery = () => {
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const navigation = useNavigation();

  const handleNext = () => {
    if (fullName && phoneNumber && address) {
      navigation.navigate("PackageDetails");
    } else {
      return alert("Please fill all the details");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.NewDeliveryText}>New Delivery</Text>
        <Text style={styles.headerText}>Enter the details of the Buyer</Text>
      </View>
      <View style={styles.textField}>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          placeholder={"Full Name"}
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder={"Phone Number"}
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
        <TextInput
          value={address}
          onChangeText={setAddress}
          placeholder={"Address"}
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    top: 30,
    marginBottom: 20,
  },
  NewDeliveryText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
    top: 30,
    marginBottom: 20,
  },
  textField: {
    top: 50,
  },
  firstNameInput: {
    height: 40,
    width: 170,
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: colors.white,
    borderRadius: 7,
  },
  lastNameInput: {
    height: 40,
    width: 170,
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: colors.white,
    borderRadius: 7,
  },
  nameTextField: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  phoneTextField: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 50,
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: 30,
    padding: 10,
    color: colors.white,
    borderRadius: 7,
  },
  smallText: {
    color: colors.white,
    marginTop: 20,
    top: 40,
  },
  forgotPassword: {
    color: colors.white,
    marginTop: 20,
    top: 40,
    fontSize: 18,
    fontWeight: "700",
  },
  loginText: {
    color: colors.white,
    marginLeft: 5,
    textDecorationLine: "underline",
    fontWeight: "600",
  },
  button: {
    marginTop: 70,
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    top: 70,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },
});

export default NewDelivery;
