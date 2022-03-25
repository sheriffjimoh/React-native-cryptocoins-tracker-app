import react,{useEffect, useState} from "react";
import {View, Text,  ScrollView,TouchableOpacity} from "react-native"
import styles  from  "./index.style"
import CoinCard from "../../components/CoinCard"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const CoinMarketCap = require('coinmarketcap-api')
const apiKey = 'fa55b789-fae7-45c7-8627-9fee4681b042'
const  client = new CoinMarketCap(apiKey)

export default  function App() {
    let _ismount = false;

   const[getList, setList] = useState([]);
   const [activeTab, setActiveTab] = useState('top')
   
    function getCoinsList(){
        console.log("reach")
        client.getTickers({limit:100})
        .then((response) => { 

            if(getList.length < 1 ){
                 setList(response.data);
                 console.log("Updated")
            }
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        if(getList.length < 1 ){
           getCoinsList();   
        }  
    },[]);

 const LoadCoins =()=>{

    if(getList.length > 1){
        return getList.map((data, index) =>{
       return(
        <CoinCard key={index} rank={data?.cmc_rank} symbol={data?.symbol} name={data.name} price={data.quote.USD.price}  num_cum={data.quote.USD.percent_change_24h} 
        chartsData={
            [
                data?.quote?.USD?.percent_change_1h,
                data?.quote?.USD?.percent_change_24h,
                data.quote.USD.percent_change_7d,
                data.quote.USD.percent_change_30d,
                data.quote.USD.percent_change_60d,
                data.quote.USD.percent_change_90d
            ]
            }
            marketcap={data.quote.USD.market_cap}  activeTab={activeTab}
            />
       )
   }) 
    }else{
        return(
            <View/>
        )
    }
  
 }
   
    return (
        <View  style={styles.container}>

           
    
                <View style={styles.filterContainer}>
                    
                    <Text style={styles.leftsideText}>USD</Text>
                    <Text style={styles.cointitle}>Coins</Text>

                     <View style={styles.filters}>
                          <TouchableOpacity style={[styles.button, activeTab == 'top' ? styles.activeButton : '']}
                          onPress={()=>{
                            setActiveTab('top')
                          }}
                          >
                               <MaterialCommunityIcons  name="align-vertical-top" size={18} color={activeTab == 'top' ? "#fff": "#4845ff"}>
                                     <Text style={[styles.buttonText, activeTab == 'top' ? {color:'#fff'} :'']}> Top 100</Text>
                               </MaterialCommunityIcons>
                          </TouchableOpacity>
                          <TouchableOpacity style={[styles.button,activeTab == 'cap' ? styles.activeButton : '']} onPress={()=>{
                              setActiveTab('cap')
                          }}>
                               <Text style={[styles.buttonText,{marginLeft:8} , activeTab == 'cap' ? {color:'#fff'} : '']}>Market Cap   </Text>
                               <MaterialCommunityIcons  name="equalizer" size={20} color={activeTab == 'cap' ? "#fff": "#4845ff"}/>
                          </TouchableOpacity>
                     </View>
                </View>
            {/* </View> */}

            <View  style={styles.listTitleContainer}>
                 <Text style={styles.listTitle}>Coin</Text>
                 <Text  style={styles.listTitle}>Charts</Text>

                 <Text  style={styles.listTitlel}> { activeTab == 'cap' ? 'Market Cap' : 'Price / % change 24hr '}</Text>
            </View>
          
            <ScrollView showsVerticalScrollIndicator={false}
             contentInset={{bottom: 120}} 
             style={styles.scrollContainer}
             >
               <LoadCoins />
            <Text/>
            <Text/>
            </ScrollView>
        </View>
    );
  }
