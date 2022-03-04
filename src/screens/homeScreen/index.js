import react from "react";
import {View, Text,  ScrollView} from "react-native"
import styles  from  "./index.style"
import CoinCard from "../../components/CoinCard"

export default  function App() {
    return (
        <View  style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer} >
            <CoinCard  rank={1} symbol="BTC" name="Bitcoin" price={2300321}  num_cum={33234}/>
            <CoinCard  rank={2} symbol="BTC" name="Bitcoin" price={94383213423} num_cum={-43433}/>
            <CoinCard  rank={3} symbol="BTC" name="Bitcoin" price={65433234}  num_cum={24363}/>
            <CoinCard  rank={3} symbol="BTC" name="Bitcoin" price={65433234}  num_cum={24363}/>
            <CoinCard  rank={3} symbol="BTC" name="Bitcoin" price={65433234}  num_cum={24363}/>
            <CoinCard  rank={3} symbol="BTC" name="Bitcoin" price={65433234}  num_cum={24363}/>
            <CoinCard  rank={3} symbol="BTC" name="Bitcoin" price={65433234}  num_cum={24363}/>
            <CoinCard  rank={3} symbol="BTC" name="Bitcoin" price={65433234}  num_cum={24363}/>
            <CoinCard  rank={3} symbol="BTC" name="Bitcoin" price={65433234}  num_cum={24363}/>
            <CoinCard  rank={3} symbol="BTC" name="Bitcoin" price={65433234}  num_cum={24363}/>
            <CoinCard  rank={3} symbol="BTC" name="Bitcoin" price={65433234}  num_cum={24363}/>
            <CoinCard  rank={3} symbol="BTC" name="Bitcoin" price={65433234}  num_cum={24363}/>
            <CoinCard  rank={3} symbol="BTC" name="Bitcoin" price={65433234}  num_cum={24363}/>
            <CoinCard  rank={3} symbol="BTC" name="Bitcoin" price={65433234}  num_cum={24363}/>
           
            <View style={{height:100}}></View>
           
            </ScrollView>
        </View>
    );
  }
