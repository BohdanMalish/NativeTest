import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Image style={styles.icon} source={require("./Home.svg")}></Image>
      <Image style={styles.icon} source={require("./Card.svg")}></Image>
      <Image style={styles.icon} source={require("./Money.svg")}></Image>
      <Image style={styles.icon} source={require("./Settings.svg")}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    paddingLeft: "34px",
    paddingTop: "13px",
    paddingRight: "50px",
    paddingBottom: "13px",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    position:"absolute",
    zIndex:"10",
    bottom:"0px",
  },
  icon: {
    width: "34px",
    height: "34px",
  },
});
