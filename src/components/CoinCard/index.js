import react from "react";
import {View, Text, TouchableOpacity} from "react-native"
import styles  from  "./index.style"
import LineCharts from "../../components/Chart"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default  function App(props) {
   let {rank,name,symbol,item, id, price, num_cum,chartsData,activeTab,marketcap,navigation} = props;
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

   const CheckTab = () => {
       if(activeTab == 'top'){

        return(
            <View>
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
        )
       }else{
           return( 
           <View style={{width:100, overflowX:'scroll',  marginLeft:20}}>
              <Text  tyle={styles.priceText} > {Math.round(marketcap * 1000) / 1000} </Text>
          </View>    
        )     
       }
   }
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('CoinDetails', {data: {coinID:id, chartsData:chartsData, item:item}})}  style={styles.container}>
             <View style={styles.rankContainer}>
                 <Text styles={styles.rankText} >{rank}</Text>
             </View>

             <View style={styles.coinNameCointainer}>
                    <Text style={styles.coinSymbol}>{symbol}</Text>
                    <Text style={styles.coinName} numberOfLines={1}>{name}</Text>
             </View>

             <View  style={styles.chartContainer}>
                  <CoinCharts />
             </View>

             <View style={styles.priceContainer}>
                 
                  <CheckTab />
                  
             </View>
        </TouchableWithoutFeedback>
    );
  }
