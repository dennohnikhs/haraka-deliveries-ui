import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import colors from "../../colors/colors";
import { GlobalContext } from "../../../context";

const SignUp = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const {
    state: { userType },
  } = useContext(GlobalContext);

  const handleSignUp = () => {
    navigation.navigate("Login");
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.headerText}>Sign up</Text>

      <View style={styles.nameTextField}>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          placeholder={"First name"}
          style={styles.firstNameInput}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          placeholder={"Last name"}
          style={styles.lastNameInput}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
      </View>

      <View style={styles.textField}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder={"Email"}
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
      </View>

      <View style={styles.phoneTextField}>
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder={"Phone Number"}
          style={styles.firstNameInput}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
        <TextInput
          value={idNumber}
          onChangeText={setIdNumber}
          placeholder={"ID Number"}
          style={styles.lastNameInput}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
      </View>

      <View style={styles.textField}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder={"Password"}
          style={styles.input}
          secureTextEntry
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
      </View>

      <Text style={styles.smallText} onPress={handleLogin}>
        Have an account already? <Text style={styles.loginText}>Log in</Text>
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
