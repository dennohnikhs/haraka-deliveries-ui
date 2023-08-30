import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import colors from "../../../../colors/colors";

export default function BodaBodaGuyPastDeliveries(props) {
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <Text style={styles.activeDeliveriesText}>Past Deliveries</Text>
      <View style={styles.deliveries}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> 2015</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> 2016</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> 2017</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> 2018</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> 2019</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> 2020</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> 2021</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> 2022</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> 2023</Text>
        </TouchableOpacity>
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
  activeDeliveriesText: {
    color: colors.white,
    fontSize: 30,
    top: 70,
    fontWeight: "400",
    marginBottom: 30,
  },
  button: {
    marginTop: 10,
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 5,
    top: 20,
    width: 250,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  },
  deliveries: {
    marginTop: 70,
  },
});
