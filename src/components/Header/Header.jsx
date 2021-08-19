import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.containerHeader}>
      <View><Image style={styles.cont} source={require('./Account.svg')}></Image></View>
      <View><Text style={styles.textStyle}>Accounts</Text></View>
      <View><Text><Image style={styles.cont} source={require('./Search.svg')}></Image></Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent:"space-between",
  },
  cont:{
      marginTop:"5px",
      width:"24px",
      height:"24px"
  },
  textStyle:{
    fontSize:"26px",
    fontWeight:"600",
    lineHeight:"32px",
    color:"#FFFFFF",
  }
});
