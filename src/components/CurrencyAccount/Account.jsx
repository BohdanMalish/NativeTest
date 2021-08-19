import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
export default function Account() {
  return (
      <View style={styles.Pad}><View style={styles.AccountOfCurrency}><Image style={styles.IconCurrency} source={require("../Header/Account.svg")}></Image><View> <Text style={styles.TextOfNameCurrency}>Euro (EUR)</Text><Text style={styles.underCurrencyText}>Account details</Text></View></View><Text style={styles.cost}>€ 3,496.00</Text></View>

  );
}

const styles = StyleSheet.create({
  AccountOfCurrency:{
      flexDirection:"row",
      justifyContent:"space-between",
      color:"#0D1F3C",
      fontFamily:"Titillium Web",
      fontSize:"15px",
  },
  Pad:{
    backgroundColor:"#EDF1F9",
    flexDirection:"row",
    justifyContent:"space-between",
    borderRadius:"20px",
    padding:"13px",
    marginBottom:"16px",
  },
  TextOfNameCurrency:{
    fontWeight:"600",
    marginLeft:"13px",
    fontSize:"16px"

  },
  underCurrencyText:{
    color:"#485068",
    fontWeight:"400",
    marginLeft:"13px",
    fontSize:"16px"


  },
  IconCurrency:{
      bottom:"-5px",
      height:"34px",
      width:"34px",
  },
  cost:{
      fontWeight:"600",
      fontSize:"16px"
  }
});
