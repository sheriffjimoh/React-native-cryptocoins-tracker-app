import react from "react";
import {View, Text} from "react-native"
import styles  from  "./index.style"
import LineCharts from "../../components/Chart"

export default  function App(props) {
   let {rank,name,symbol, price, num_cum,chartsData} = props;

  
  const CoinCharts = () =>{
       if(chartsData.length > 1){
           return(
            <LineCharts  width={120}  height={60}  chartsData={chartsData}/>
                 
           )
       }else{
           return(
               <View />
           )
       }
   }
    return (
        <View  style={styles.container}>
             <View style={styles.rankContainer}>
                 <Text styles={styles.rankText} >{rank}</Text>
             </View>

             <View style={styles.coinNameCointainer}>
                    <Text style={styles.coinSymbol}>{symbol}</Text>
                    <Text style={styles.coinName}>{name}</Text>
             </View>

             <View  style={styles.chartContainer}>
                  <CoinCharts />
             </View>

             <View style={styles.priceContainer}>
                  <Text style={styles.priceText} numberOfLines={1}> ${Math.round(price * 100) / 100} </Text>
                   
                   {num_cum > 1
                   ? <View style={[styles.bargecum, styles.bargeSuccess]}>
                   <Text style={styles.bargeText} >+{Math.round(num_cum * 10000) / 10000}%</Text>
                  </View>:
                   <View style={[styles.bargecum, styles.bargeerror]}>
                   <Text style={styles.bargeText} >{Math.round(num_cum * 10000) / 10000}%</Text>
                   </View>
                }
                  
             </View>
        </View>
    );
  }
