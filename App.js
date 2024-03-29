import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import BottomTabs from "./src/components/BottomTab"
const CoinMarketCap = require('coinmarketcap-api')
import services from "./src/services"
import NavStack from "./src/components/Navigation"
import FlashMessage from "react-native-flash-message";
// import { useFonts,Feather} from 'expo-font';
export default function App() {

  const apiKey = 'fa55b789-fae7-45c7-8627-9fee4681b042'
  const client = new CoinMarketCap(apiKey)

  // let [fontsLoaded] = useFonts({
  //   Avenir: require("./assets/fonts/AvenirLTStd-Book.otf"),
  //   "Avenir-Bold": require("./assets/fonts/AvenirLTStd-Black.otf"),
  //   "Avenir-Roman": require("./assets/fonts/AvenirLTStd-Roman.otf"),
  //   Feather
  // });
 
 
  // client.getGlobal().then(console.log).catch(console.error)


  useEffect(() => {
 
  //   client.getTickers()
  // console.log("NEW SET ++++++++++=")
  //  client.getGlobal()
  // const getCoinsList = getCoinsList;
  // console.log("List:", services.getCoinsList());
  // get active coins
  // client.getIdMap({listingStatus: 'inactive', limit: 10})

  // display coins by cmc_rank
  // client.getIdMap({sort: 'cmc_rank'}) 

  // get more details for each coin
  // client.getMetadata({id: '1'})
  // // client.getTickers({limit: 3})
  // .then((result) => console.log(result))
  // .catch((error) => console.error(error))

   });
  return (
    <View style={styles.container}>
      {/* <Text>Crypto currency trakcer app !</Text>
      <StatusBar style="auto" /> */}
      <NavStack /> 
      <FlashMessage position="top" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    justifyContent:'center'
   
  },
});
