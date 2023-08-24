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

const ConfirmPasswordResetCode = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Confirm</Text>

      <StatusBar barStyle="light-content" />
      <View style={styles.textContent}>
        <Text style={styles.smallText}>Check your phone messages</Text>
        <Text style={styles.smallText}>we have sent code to 07.....</Text>
        <Text style={styles.smallText}>Enter the code</Text>
      </View>

      <View style={styles.codeField}>
        <TextInput
          style={styles.codeInput}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
          maxLength={1}
        />
        <TextInput
          style={styles.codeInput}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
          maxLength={1}
        />
        <TextInput
          style={styles.codeInput}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
          maxLength={1}
        />
        <TextInput
          style={styles.codeInput}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
          maxLength={1}
        />
      </View>
      <Text style={styles.smallText}>
        Didn't received code? <Text style={styles.loginText}>Resend Code</Text>
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm</Text>
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
    marginTop: 50,
    marginBottom: 50,

    top: 100,
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
    marginBottom: 10,
    padding: 10,
    color: colors.white,
    borderRadius: 7,
  },
  smallText: {
    color: colors.white,
    top: 100,
    fontSize: 17,
    opacity: 0.7,
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
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    marginTop: 30,
    top: 100,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },
  textContent: {
    marginLeft: 20,
  },
  codeField: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
    gap: 10,
    marginBottom: 50,
    top: 100,
  },
  codeInput: {
    width: "15%",
    height: 50,
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 10,
    color: colors.white,
    textAlign: "center",
    backgroundColor: colors.white,
  },
});

export default ConfirmPasswordResetCode;
