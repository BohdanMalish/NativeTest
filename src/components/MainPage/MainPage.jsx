import React,{useState} from "react";
import { StyleSheet, Text, View, Image ,ScrollView } from "react-native";
import Header from "../Header/Header";
import Account from "../CurrencyAccount/Account";
import Footer from "../Footer/Footer";
import { useSelector,useDispatch } from "react-redux";
import {selectData,setData} from '../../Redux/Data.slices';


const MainPage=()=>{
  const data=useSelector(selectData);
  const dispatch=useDispatch();
  dispatch(setData());
  const list = [1, 2, 3, 4, 5];
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerDarkBlock}>
          <Header></Header>
          <View style={styles.currencBalance}>
            <Text style={styles.AccountsName}>Accounts Name (EUR)</Text>
            <Text style={styles.Money}>€3,496.00</Text>
            <Text style={styles.statusBalance}>Current balance</Text>{" "}
          </View>
          <View style={styles.containerHeader}>
            <View style={styles.containerImageBarMenu}>
              <Image style={styles.st} source={require("./info.svg")}></Image>{" "}
            </View>
            <View style={styles.containerImageBarMenuWhite}>
              <Image
                style={styles.st}
                source={require("./exchange.svg")}
              ></Image>{" "}
            </View>
            <View style={styles.containerImageBarMenu}>
              <Image style={styles.st} source={require("./send.svg")}></Image>{" "}
            </View>
            <View style={styles.containerImageBarMenuWhite}>
              <Image
                style={styles.st}
                source={require("./statistic.svg")}
              ></Image>{" "}
            </View>
          </View>
        </View>
        <View style={styles.ListOfAccounts}>
          <Text style={styles.ListOfAccountsTextHeader}>
            All currency accounts
          </Text>
          <ScrollView>
          {list.map((i, ind) => {
            return <Account key={ind}></Account>;
          })}</ScrollView>
        </View>
      </View>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D1F3C",
    fontFamily: "Titillium Web",
  },
  containerDarkBlock: {
    padding: "24px",
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "24px",
    marginBottom: "60px",
    marginLeft: "11px",
    marginRight: "11px",
  },
  currencBalance: {
    height: "105px",
    backgroundColor: "white",
    borderRadius: "12px",
    marginTop: "46px",
    textAlign: "center",
    paddingTop: "4px",
  },
  AccountsName: {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "28px",
    color: "#262F56",
    opacity: "0.9",
  },
  Money: {
    color: "black",
    fontSize: "35px",
    lineHeight: "40px",
    fontWeight: "600",
  },
  statusBalance: {
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "600",
    color: "#0D1F3C",
  },
  st: {
    width: "24px",
    height: "24px",
  },
  containerImageBarMenu: {
    backgroundColor: "#262F56",
    borderRadius: "7px",
    padding: "12px",
  },
  containerImageBarMenuWhite: {
    backgroundColor: "white",
    borderRadius: "7px",
    padding: "12px",
  },
  ListOfAccounts: {
    borderTopEndRadius: "20px",
    borderTopStartRadius: "20px",
    backgroundColor: "white",
    paddingTop: "24px",
    paddingHorizontal: "24px",
  },
  ListOfAccountsTextHeader: {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "28px",
    color: "#262F56",
    letterSpacing: "1px",
    marginBottom: "20px",
  },
  AccountOfCurrency: {
    backgroundColor: "#EDF1F9",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default MainPage;