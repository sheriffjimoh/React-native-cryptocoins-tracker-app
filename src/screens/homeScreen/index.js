import react,{useEffect, useState} from "react";
import {View, Text,  ScrollView,TouchableOpacity,FlatList} from "react-native"
import styles  from  "./index.style"
import CoinCard from "../../components/CoinCard"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const CoinMarketCap = require('coinmarketcap-api')
const apiKey = 'fa55b789-fae7-45c7-8627-9fee4681b042'
const  client = new CoinMarketCap(apiKey)

export default  function App({navigation}) {
    let _ismount = false;
   const[getList, setList] = useState([]);
   const [activeTab, setActiveTab] = useState('top')
   const [isLoading, setIsLoading] = useState(false)
   
   
   function getCoinsList(){
        setIsLoading(true)
        client.getTickers({limit:100})
        .then((response) => { 
            if (response.status) {
               setList(response.data);
               setIsLoading(false)
            }
      
        })
        .catch((error) => console.log(error));
    }


     function  onTabchange(value){
        setActiveTab(value)
     }

     useEffect(() => {
            getCoinsList();   
        },[]);

 const LoadCoins =()=>{

    if(getList && getList.length > 1){
       return(
       <FlatList
         data={getList}
         renderItem={({ item, index, separators }) => (
            <CoinCard key={index} id={item.id} rank={item?.cmc_rank} symbol={item?.symbol} name={item.name} price={item.quote.USD.price}  num_cum={item.quote.USD.percent_change_24h} 
              chartsData={
                 [
                    item?.quote?.USD?.percent_change_1h,
                    item?.quote?.USD?.percent_change_24h,
                    item.quote.USD.percent_change_7d,
                    item.quote.USD.percent_change_30d,
                    item.quote.USD.percent_change_60d,
                    item.quote.USD.percent_change_90d
                  ]
                }
                marketcap={item.quote.USD.market_cap}  
                activeTab={activeTab}
                item={item}
                navigation={navigation}
                />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        style={styles.scrollContainer}
        onRefresh={() => 
          getCoinsList()
        }
        refreshing={isLoading}
        removeClippedSubviews={true}
      />


      
       )
   
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
                          onPress={()=> onTabchange('top')}
                          >
                               <MaterialCommunityIcons  name="align-vertical-top" size={18} color={activeTab == 'top' ? "#fff": "#4845ff"}>
                                     <Text style={[styles.buttonText, activeTab == 'top' ? {color:'#fff'} :'']}> Top 100</Text>
                               </MaterialCommunityIcons>
                          </TouchableOpacity>

                          <TouchableOpacity style={[styles.button,activeTab == 'cap' ? styles.activeButton : '']} 
                          onPress={()=> onTabchange('cap')}>
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
          
            {/* <ScrollView showsVerticalScrollIndicator={false}
             contentInset={{bottom: 120}} 
             style={styles.scrollContainer}
             > */}
               <LoadCoins />
            {/* <Text/>
            <Text/>
            </ScrollView> */}
        </View>
    );
  }
