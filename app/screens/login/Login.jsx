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
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../../context";

const Login = () => {
  const navigation = useNavigation();
  // State for form inputs
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const {
    state: { userType },
  } = useContext(GlobalContext);

  const handleLogin = () => {
    if (userType === "buyer") {
      navigation.navigate("BuyerHomeScreen");
    } else if (userType === "seller") {
      navigation.navigate("SellerHomePage");
    } else if (userType === "bodabodaguy") {
      navigation.navigate("BodaBodaGuyHomeScreen");
    } else if (userType === "couriercompany") {
      navigation.navigate("CourierCompanyHomeScreen");
    }
  };
  const handlePasswordReset = () => {
    navigation.navigate("PasswordReset");
  };
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Log in</Text>
      <StatusBar barStyle="light-content" />
      <View style={styles.textField}>
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder={"Phone Number"}
          required="true"
          style={styles.input}
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
      <Text style={styles.forgotPassword} onPress={handlePasswordReset}>
        Forgot Password
      </Text>

      <Text style={styles.smallText}>
        You don't have account,{" "}
        <Text style={styles.loginText} onPress={handleSignUp}>
          Sign up
        </Text>
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleLogin}>
          Log in
        </Text>
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
    marginTop: 20,
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
    marginBottom: 10,
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
    marginTop: 10,
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    top: 50,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },
});

export default Login;
