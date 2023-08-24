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

const PackageDetails = ({
  sender,
  receiver,
  packageDetails,
  shippingMethod,
  Brand,
  ExpiryDate,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Package Details</Text>
      </View>

      <Text style={styles.title}>Package Details</Text>
      <View style={styles.detailsContentsContainer}>
        <Text style={styles.text}>Price: {sender}</Text>
        <Text style={styles.text}>Package Name: {receiver}</Text>
        <Text style={styles.text}>Payment Information: {packageDetails}</Text>
        <Text style={styles.text}>Payment Method: {shippingMethod}</Text>
        <Text style={styles.text}>Brand: {Brand}</Text>
        <Text style={styles.text}>Expiry Date: {ExpiryDate}</Text>
      </View>

      <View style={styles.buttonContents}>
        <TouchableOpacity style={styles.button}>
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
    paddingTop: 80,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  title: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  detailsContentsContainer: {
    // paddingLeft: 20,
    // paddingRight: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
    marginLeft: 16,
    backgroundColor: colors.gray,
    marginRight: 16,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
