import React, { useContext, useState } from "react";
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
import { GlobalContext } from "../../../../../context";

const PackageDetails = () => {
  const { updateState, state } = useContext(GlobalContext);
  const [weight, setWeight] = useState("");
  const [specialFeatures, setSpecialFeatures] = useState("");
  const [valueOfTheGoods, setValueOfTheGoods] = useState("");
  const [typeOfGoods, setTypeOfGoods] = useState("");

  const navigation = useNavigation();
  const handleGenerateQrCode = () => {
    if (weight && specialFeatures && valueOfTheGoods && typeOfGoods) {
      navigation.navigate("QRCodeScreen");
      updateState({
        seller: {
          ...state.seller,
          package_details: {
            weight,
            specialFeatures,
            valueOfTheGoods,
            typeOfGoods,
          },
        },
      });
    } else {
      return alert("Please fill all the details");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Package Details</Text>
      </View>

      <View style={styles.textField}>
        <TextInput
          value={weight}
          onChangeText={setWeight}
          placeholder={"weight"}
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
        <TextInput
          value={specialFeatures}
          onChangeText={setSpecialFeatures}
          placeholder={"special features"}
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
        <TextInput
          value={valueOfTheGoods}
          onChangeText={setValueOfTheGoods}
          placeholder={"value of goods"}
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
        <TextInput
          value={typeOfGoods}
          onChangeText={setTypeOfGoods}
          placeholder={"type of goods"}
          style={styles.input}
          placeholderTextColor="rgba(255, 255, 255, 0.2)"
        />
      </View>

      <View style={styles.buttonContents}>
        <TouchableOpacity style={styles.button} onPress={handleGenerateQrCode}>
          <Text style={styles.buttonText}>Generate Qr Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 50,
  },

  textField: {
    top: 30,
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
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
  detailsContentsContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 50,
    marginLeft: 16,
    backgroundColor: colors.green,
    marginRight: 16,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    top: 30,
    marginBottom: 20,
  },

  detailsContents: {
    width: "100%",
    height: "60%",
    backgroundColor: colors.white,
    marginTop: 40,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
  },

  button: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
  },
  buttonContents: {
    margin: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },
});

export default PackageDetails;
