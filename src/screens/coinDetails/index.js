import react,{useEffect, useState} from "react";
import {View, Text,Image, TouchableOpacity, Linking} from "react-native"
import styles  from  "./index.styles"
const CoinMarketCap = require('coinmarketcap-api')
const apiKey = 'fa55b789-fae7-45c7-8627-9fee4681b042'
const  client = new CoinMarketCap(apiKey)
import LineCharts from "../../components/Chart"

export default  function App(props) {
 const data = props.route.params.data;
 const [getDetails, setDetails] = useState([]);
   

   useEffect(() => {
    client.getMetadata({id: data.coinID})
    .then((result) =>{
     const dataResult = Object.values(result.data)
     setDetails(dataResult[0]);
    })
    .catch((error) => console.error(error))
     console.log(data.item);
    },[]);
    return (
        <View  style={styles.container}>
           <View style={styles.headerContainer}>
             <View style={styles.coinNameContainer}>
             <View style={styles.rankContainer}>
                 <Text styles={styles.rankText} >{data.item.cmc_rank}</Text>
             </View>
               <Image  source={{uri: getDetails?.logo}} 
                 style={styles.image}/>

                 <View style={styles.contentContainer}>
                    
                     <Text style={styles.coinName}>
                         {getDetails?.name}
                     </Text>
                     <Text style={styles.coinSymbol}>
                       {getDetails?.symbol}
                     </Text>
                 </View>
              </View>
              <View style={styles.buttonContainer}>
                  <TouchableOpacity  style={styles.button} onPress={()=> Linking.openURL(getDetails?.urls?.website[0])}>
                      <Text style={styles.buttonText}>Buy</Text>
                  </TouchableOpacity>

              </View>
           </View>
          
           <View style={styles.price}>
               
           </View>

           <View  style={styles.chartContainer}>
                  <LineCharts  width={370}  height={310}  chartsData={data.chartsData}/>
                
                <View style={styles.descContainer}>
                    <Text style={styles.descText}>
                         {getDetails.description}
                    </Text>
                </View>
           </View>
            
            
        </View>
    );
  }
