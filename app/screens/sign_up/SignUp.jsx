import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import colors from "../../colors/colors";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.headerText}>Sign up</Text>

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

      <View style={styles.phoneTextField}>
        <TextInput
          placeholder={"Phone Number"}
          style={styles.firstNameInput}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
        <TextInput
          placeholder={"ID Number"}
          style={styles.lastNameInput}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
      </View>

      <View style={styles.textField}>
        <TextInput
          placeholder={"Password"}
          style={styles.input}
          secureTextEntry
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
      </View>

      <Text style={styles.smallText}>
        Have an account already? <Text style={styles.loginText}>Log in</Text>
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    top: 20,
  },
  textField: {
    marginTop: 20,
    top: 20,
  },
  firstNameInput: {
    height: 50,
    width: 170,
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
    top: 20,
  },
  phoneTextField: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 20,
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
  smallText: {
    color: colors.white,
    marginTop: 20,
    top: 20,
  },
  loginText: {
    color: colors.white,
    marginLeft: 5,
    textDecorationLine: "underline",
    fontWeight: "600",
  },
  button: {
    marginTop: 10,
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    top: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },
});

export default SignUp;
