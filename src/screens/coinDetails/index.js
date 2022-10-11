import {useEffect, useState} from "react";
import {View, Text,Image, TouchableOpacity,Linking, ScrollView} from "react-native"
import styles  from  "./index.styles"
import client from "../../services/env";
import LineCharts from "../../components/Chart"
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Clipboard from 'expo-clipboard';
import { customFlash } from "../../components/customFlashMessage/customFlash";
import Loader from "../../components/Loader";
import DetailsHeader from "../../components/DetailsHeader"


export default  function App(props) {
 const params = props.route.params.data;

 
 const [getDetails, setDetails] = useState([]);
 const [data, setData] = useState({quote: null})
 const [isLoading, setLoading] = useState(false)
 const [chartsData, setChartdata] = useState([]);
 const [coinName, setCoinName] = useState("");

 const [copiedText, setCopiedText] = useState('');

 const copyToClipboard = async (text) => {
    await Clipboard.setString(text);
    customFlash('success',`Token copied to the clipboard`)
    };


   
   function getConiDetails(){
    setLoading(true)
     
      client.getQuotes(({id: params.coinID}))
      .then((response) => { 
        setData(Object.values(response.data)[0]);
        const result = Object.values(response.data)[0];
        const chartsData=
          [
             result?.quote?.USD?.percent_change_1h,
             result?.quote?.USD?.percent_change_24h,
             result.quote.USD.percent_change_7d,
             result.quote.USD.percent_change_30d,
             result.quote.USD.percent_change_60d,
             result.quote.USD.percent_change_90d
           ];

           setChartdata(chartsData);
      }).catch((error) => console.log(error))
      .finally(() => setLoading(false))
    }
 

    useEffect(() =>{
      setCoinName(params?.item?.name)
    },[params])


   useEffect(() => {
    client.getMetadata({id: params.coinID})
    .then((result) =>{
     const dataResult = Object.values(result.data)
     setDetails(dataResult[0]);
    }).catch((error) => console.error(error));

    getConiDetails();
   
    },[]);


    const ContactAddress = () =>{

      if ( getDetails  && getDetails?.contract_address?.length  > 0) {

        return getDetails.contract_address.map((item ,index) =>(
             <View style={styles.ContainerAddressCard} key={index}>
                <View>
                         <Text style={styles.plat}>Platform</Text>
                          <Text>{item.platform.coin.symbol}</Text>
                          <Text>{item.platform.coin.name}</Text>
                </View>
                <View style={styles.addCon}>
                    <Text>{`${item.contract_address.substring(0, 5)}...${item.contract_address.substring(item.contract_address.length - 5, item.contract_address.length)}`}
                 
                    </Text>
                    <TouchableOpacity  style={styles.copyButton} onPress={() => copyToClipboard(item.contract_address)}>
                    <Text>  
                       <Icon name="copy" size={15} color="#4845ff" />
                    </Text>
                    </TouchableOpacity>
                </View>
              

             </View>
          ))

        
      }else{
        return(
          <View/>
        )
      }

    }

    const Websites = () =>{

      if (getDetails?.urls?.website[0]) {

        return(
          <View style={styles.exploreContainer}>
          <Text style={styles.exploreText}> Website</Text>
          <TouchableOpacity onPress={()=> Linking.openURL(getDetails?.urls?.website[0])}>
            <Text style={styles.exploreLink}>{getDetails?.urls?.website[0]}</Text>
          </TouchableOpacity>
        </View>  
        )
        
      }else{
        return(<View/>)
      }

    }
    

     const Chat = () =>{
       if (getDetails?.urls?.chat[0]) {

        return(
          <View style={styles.exploreContainer}>
          <Text style={styles.exploreText}> Chat</Text>
         <TouchableOpacity  onPress={()=> Linking.openURL(getDetails?.urls?.chat[0])}>
             <Text style={styles.exploreLink}>{getDetails?.urls?.chat[0]}</Text> 
         </TouchableOpacity >
     </View> 
        )
      }else{
        return(<View/>)
      }
     }

    const Announcement = () =>{
      if (getDetails?.urls?.announcement[0]) {
         return(
          <View style={styles.exploreContainer}>
          <Text style={styles.exploreText}> Announcement</Text>
          <TouchableOpacity onPress={()=> Linking.openURL(getDetails?.urls?.announcement[0])}>
            <Text style={styles.exploreLink}>{getDetails?.urls?.announcement[0]}</Text>
          </TouchableOpacity>
        </View> 
         )
        }else{
          return(<View/>)
        }
    }

  
    const Explore = () =>{
      if (getDetails?.urls?.explorer?.length > 0) {

        return(
          <View style={styles.exploreContainer}>
                  <Text style={styles.exploreText}> Explore</Text>
                {  getDetails?.urls?.explorer?.length > 0 ? getDetails?.urls?.explorer?.map((item,index) =>(
                  <TouchableOpacity key={index} onPress={()=> Linking.openURL(item)}>
                    <Text style={styles.exploreLink}>{item}</Text>
                  </TouchableOpacity>
              )) : <Text/>}
           </View> 
        )
      }else{
        return(<View/>)
      }
    }



     const Socials = () =>{
       if (getDetails?.urls?.twitter[0] || getDetails?.urls?.reddit[0]) {

        return(
          <View style={styles.exploreContainer}>
                     <Text style={styles.exploreText}> Socials</Text>
                    <TouchableOpacity  onPress={()=> Linking.openURL(getDetails?.urls?.twitter[0])}>
                        <Text style={styles.exploreLink}>{getDetails?.urls?.twitter[0]}</Text> 
                    </TouchableOpacity >

                    <TouchableOpacity  onPress={()=> Linking.openURL(getDetails?.urls?.reddit[0])}>
                        <Text style={styles.exploreLink}>{getDetails?.urls?.reddit[0]}</Text> 
                    </TouchableOpacity >

                    <TouchableOpacity  onPress={()=> Linking.openURL(getDetails?.urls?.facebook[0])}>
                        <Text style={styles.exploreLink}>{getDetails?.urls?.facebook[0]}</Text> 
                    </TouchableOpacity >
              </View> 
        )
      }else{
        return(<View/>)
      }
     }


    return (
        <View  style={styles.container}>
          {!isLoading? 

          <View>
              <DetailsHeader  navigation={props.navigation} status={data?.cmc_rank == null} />
          

              <View style={styles.headerContainer}>
             <View style={styles.coinNameContainer}>
             <View style={[styles.rankContainer, {display:data?.cmc_rank == null ? 'none': 'flex'}]}>
                 <Text styles={styles.rankActiveText} >{data?.cmc_rank}
                 
                 </Text>
             </View>
               <Image  source={{uri: getDetails?.logo}} 
                 style={styles.image}/>

                 <View style={styles.contentContainer}>
                    
                     <Text style={[styles.coinName, data?.cmc_rank == null ? { width: '100%'} : '']}>
                         {getDetails?.name}
                     </Text>
                     <Text style={styles.coinSymbol}>
                       {getDetails?.symbol}
                     </Text>
                 </View>
              </View>
              <View style={[styles.buttonContainer, {display: data?.cmc_rank == null ? 'none': 'flex'}]}>
                  <TouchableOpacity  style={styles.button} onPress={()=> Linking.openURL(getDetails?.urls?.website[0])}>
                      <Text style={styles.buttonText}>Buy</Text>
                  </TouchableOpacity>

              </View>
           </View>


          <ScrollView contentContainerStyle={{  paddingBottom:170}} showsVerticalScrollIndicator={false} >
           
          

           <View style={{flex:1, alignItems:'center'}}>
               <LineCharts  width={370}  height={310}  chartsData={chartsData}/>
                
           </View>
          
           <View style={styles.priceContainer}>
               <Text style={styles.priceText}>Market Cap:   {   data?.quote?.USD?.market_cap }</Text>
                <Text style={styles.priceText}>Current Price (USD):   {  data?.quote?.USD?.price }</Text>
              <Text style={styles.priceText}>Volume Change(24hr):   {   data?.quote?.USD?.volume_change_24h }</Text>
               <Text style={styles.priceText}>Percentage Change(24hr):   {  data?.quote?.USD?.percent_change_24h }</Text>
               
           </View>
         { getDetails  && getDetails?.contract_address?.length  > 0 ? 
           
           <View style={styles.addressContainer}>
                 <Text style={styles.addressTitle}>Contract Address</Text>
                  <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false} >
                                <ContactAddress />
                    </ScrollView>
         </View>
        : <Text/>
           
        }
        

           <View  style={styles.chartContainer}>
               
                <View style={styles.descContainer}>
                    <Text style={styles.descText}>
                         {getDetails.description}
                    </Text>
                </View>

              <View style={styles.subContainer}>

                <Websites />
                <Announcement />
                <Chat />
                <Explore />
                <Socials />

               
              </View>
                

            
           </View>
          </ScrollView> 
         </View>

          : 
          <Loader  textValue={`Loading  ${coinName} Details....`}  />
      }
            
        </View>
    );
  }
