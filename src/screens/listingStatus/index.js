import react , {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, ScrollView, FlatList} from "react-native"
import styles  from  "./index.style"
import LineChart from "../../components/Chart"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from  "react-native-vector-icons/Ionicons"
import ListingCard from "../../components/ListingCard"
const CoinMarketCap = require('coinmarketcap-api')
const apiKey = 'fa55b789-fae7-45c7-8627-9fee4681b042'
const  client = new CoinMarketCap(apiKey)
export default  function App() {
    const [activeTab, setActiveTab] = useState('active');
     const [isLoading, setIsLoading] = useState(false)
    const [getList, setList] = useState([]);

    function getCoinsList(value = activeTab){
        setIsLoading(true)
        setActiveTab(value)
        
        client.getIdMap({listingStatus: value, })
        .then((response) => {  
            if(response.status){
                setList(response.data);
                setIsLoading(false)
            }
        })
        .catch((error) => console.log(error));
        console.log("status:", activeTab) 
 }



 function onTabchange(value){
   
    getCoinsList(value)
 }

 useEffect(() => {
        getCoinsList();   
       
 },[]);

    const LoadCoins = () =>{
            
     if(getList.length > 1){
        return(
            <FlatList
            data={getList}
            renderItem={({ item, index, separators }) => (
                <ListingCard key={index} rank={index+1} data={item} />
            
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            style={styles.scrollContainer}
            onRefresh={() => 
            getCoinsList()
            }
            refreshing={isLoading}
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
                    <Text style={styles.cointitle}>Coins Status</Text>

                     <View style={styles.filters}>
                          <TouchableOpacity style={[styles.button, activeTab == 'active' ? styles.activeButton : '']}
                          onPress={()=>{
                           onTabchange('active')
                          }}
                          >
                               <Ionicons  name="ios-checkmark-sharp" size={18} color={activeTab == 'active' ? "#fff": "#4845ff"}>
                                     <Text style={[styles.buttonText, activeTab == 'active' ? {color:'#fff'} :'']}> Active</Text>
                               </Ionicons>
                          </TouchableOpacity>
                          <TouchableOpacity style={[styles.button,activeTab == 'inactive' ? {backgroundColor:'red'}: '']} onPress={()=>{
                              onTabchange('inactive')
                          }}>
                               <Text style={[styles.buttonText,{marginLeft:8} , activeTab == 'inactive' ? {color:'#fff'} : '']}>In Active  </Text>
                               <Ionicons  name="close-sharp" size={20} color={activeTab == 'inactive' ? "#fff": "#4845ff"}/>
                          </TouchableOpacity>
                     </View>
                </View>
            {/* </View> */}
            

            <View  style={styles.listTitleContainer}>
                 <Text style={styles.listTitle}>Rank</Text>
                 <Text  style={styles.listTitle}>Name & Symbol</Text>
                 <Text  style={styles.listTitle}>Last Hist. Data</Text>
           </View>
          

           <LoadCoins />



        </View>
    );
  }
