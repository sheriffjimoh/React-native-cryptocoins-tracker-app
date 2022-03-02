import react from "react";
import {View, Text} from "react-native"
import styles  from  "./index.style"

export default  function App(props) {
   let {rank,name,symbol, price, num_cum} = props;
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
                   <Text>Charts</Text>
             </View>

             <View style={styles.priceContainer}>
                  <Text style={styles.priceText} numberOfLines={1}> $ {price} </Text>
                   
                   {num_cum > 1
                   ? <View style={[styles.bargecum, styles.bargeSuccess]}>
                   <Text style={styles.bargeText}>+{num_cum}%</Text>
                  </View>:
                   <View style={[styles.bargecum, styles.bargeerror]}>
                   <Text style={styles.bargeText}>{num_cum}%</Text>
                   </View>
                }
                  
             </View>
        </View>
    );
  }
