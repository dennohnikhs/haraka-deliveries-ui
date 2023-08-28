import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import colors from "../../colors/colors";
import { useNavigation } from "@react-navigation/native";

const UpdatePassword = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleUpdateNewPassword = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>New Password</Text>

      <StatusBar barStyle="light-content" />

      <View style={styles.textField}>
        <TextInput
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder={"New Password"}
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
        <TextInput
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
          placeholder={"ConfirmNew Password"}
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
      </View>

      {/* <View style={styles.textField}>
        <TextInput
          placeholder={"Confirm New Password"}
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
      </View> */}

      <TouchableOpacity style={styles.button} onPress={handleUpdateNewPassword}>
        <Text style={styles.buttonText}>Update</Text>
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
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    top: 30,
  },
  textField: {
    marginTop: 40,
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

export default UpdatePassword;
