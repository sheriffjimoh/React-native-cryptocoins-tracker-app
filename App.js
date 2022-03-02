import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import BottomTabs from "./src/components/BottomTab"
const CoinMarketCap = require('coinmarketcap-api')


export default function App() {

  const [count, setCount] = useState(0);

  const apiKey = 'fa55b789-fae7-45c7-8627-9fee4681b042'
  const client = new CoinMarketCap(apiKey)
  
 
  // client.getGlobal().then(console.log).catch(console.error)


  useEffect(() => {
 
  //   client.getTickers()
  // console.log("NEW SET ++++++++++=")
  //  client.getGlobal()

  // get active coins
  // client.getIdMap({listingStatus: 'active', limit: 10})

  // display coins by cmc_rank
  // client.getIdMap({sort: 'cmc_rank'}) 

  // get more details for each coin
  // client.getMetadata({id: '1'})
  // client.getTickers({limit: 3})
  // .then((result) => console.log(result))
  // .catch((error) => console.error(error))

   });
  return (
    <View style={styles.container}>
      {/* <Text>Crypto currency trakcer app !</Text>
      <StatusBar style="auto" /> */}
      <BottomTabs /> 
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
