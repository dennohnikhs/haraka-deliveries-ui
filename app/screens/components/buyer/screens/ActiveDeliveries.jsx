import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import colors from "../../../../colors/colors";

export default function ActiveDeliveries(props) {
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <Text style={styles.activeDeliveriesText}>Active Deliveries</Text>
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
  },
});
