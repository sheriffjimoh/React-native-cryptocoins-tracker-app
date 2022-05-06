import react,{useEffect, useState} from "react";
import {View, Text,Image, TouchableOpacity,Linking, ScrollView} from "react-native"
import styles  from  "./index.styles"
const CoinMarketCap = require('coinmarketcap-api')
const apiKey = 'fa55b789-fae7-45c7-8627-9fee4681b042'
const  client = new CoinMarketCap(apiKey)
import LineCharts from "../../components/Chart"
import Icon from 'react-native-vector-icons/FontAwesome';


export default  function App(props) {
 const data = props.route.params.data;
 const [getDetails, setDetails] = useState([]);
   

   useEffect(() => {
    client.getMetadata({id: data.coinID})
    .then((result) =>{
     const dataResult = Object.values(result.data)
     setDetails(dataResult[0]);

     console.log("coin Details:",getDetails?getDetails:'');
    })
    .catch((error) => console.error(error))
   
    },[]);


    const ContactAddress = () =>{

      if (getDetails.contract_address.length > 0) {

        
      }

    }
    
    return (
        <View  style={styles.container}>
          <ScrollView >
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
          
           <View style={styles.priceContainer}>
               <Text style={styles.priceText}>Market Cap:   {data.item.quote.USD.market_cap}</Text>
                <Text style={styles.priceText}>Current Price (USD):   {data.item.quote.USD.price}</Text>
              <Text style={styles.priceText}>Volume Change(24hr):   {data.item.quote.USD.volume_change_24h}</Text>
               <Text style={styles.priceText}>Percentage Change(24hr):   {data.item.quote.USD.percent_change_24h}</Text>
               
           </View>

           <View style={styles.addressContainer}>
             <Text style={styles.addressTitle}>Contract Address</Text>


             <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >

           <View style={styles.ContainerAddressCard}>
                <View>
                         <Text style={styles.plat}>Platform</Text>
                          <Text>ETH</Text>
                          <Text>Ethereum</Text>
                </View>
                <View style={styles.addCon}>
                    <Text>0xa47...1acD</Text>
                    <TouchableOpacity  style={styles.copyButton}>
                   <Text>  
                      <Icon name="copy" size={15} color="#4845ff" />
                      </Text>
                    </TouchableOpacity>
                </View>
               
             </View>

              <View style={styles.ContainerAddressCard}>
                <View>
                         <Text style={styles.plat}>Platform</Text>
                          <Text>ETH</Text>
                          <Text>Ethereum</Text>
                </View>
                <View style={styles.addCon}>
                    <Text>0xa47...1acD</Text>
                    <TouchableOpacity  style={styles.copyButton}>
                   <Text>  
                      <Icon name="copy" size={15} color="#4845ff" />
                      </Text>
                    </TouchableOpacity>
                </View>
               
             </View>

 <View style={styles.ContainerAddressCard}>
                <View>
                         <Text style={styles.plat}>Platform</Text>
                          <Text>ETH</Text>
                          <Text>Ethereum</Text>
                </View>
                <View style={styles.addCon}>
                    <Text>0xa47...1acD</Text>
                    <TouchableOpacity  style={styles.copyButton}>
                   <Text>  
                      <Icon name="copy" size={15} color="#4845ff" />
                      </Text>
                    </TouchableOpacity>
                </View>
               
             </View>


           
          </ScrollView>

            
           </View>

           <View  style={styles.chartContainer}>
                  <LineCharts  width={370}  height={310}  chartsData={data.chartsData}/>
                
                <View style={styles.descContainer}>
                    <Text style={styles.descText}>
                         {getDetails.description}
                    </Text>
                </View>
           </View>
          </ScrollView> 
            
        </View>
    );
  }
