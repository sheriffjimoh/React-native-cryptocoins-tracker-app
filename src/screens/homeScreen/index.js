import {useEffect, useState} from "react";
import {View, Text,TouchableOpacity,KeyboardAvoidingView, FlatList, Platform} from "react-native"
import styles  from  "./index.style"
import CoinCard from "../../components/CoinCard"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Loader from "../../components/Loader";
import client from "../../services/env";
import HeaderScreen from "../../components/ScreenHeader";

export default  function App({navigation}) {

   const[getList, setList] = useState([]);
   const [activeTab, setActiveTab] = useState('top')
   const [isLoading, setIsLoading] = useState(true)
   const [isSearch, setIsSearch] = useState(false);
   const [textValue, setTextVlaue] = useState("");
   const [searchList, setSearchList] = useState([])
   
   
   function getCoinsList(){
        client.getTickers({limit:100})
        .then((response) => { 
            if (response.status) {
               setList(response.data);
               setSearchList(response.data);
            }
        })
        .catch((error) => console.log(error))
        .finally(()=> setIsLoading(false));
   }


   function getCoinsListForSearch(searchQ){
      setIsLoading(true);
      client.getTickers()
      .then((response) => { 
          if (response.status) {

            const searchPoll = response.data;
            const result = filterIt(searchPoll, searchQ);
            setList(result);
            setSearchList(response.data);
          }
      })
      .catch((error) => console.log(error))
      .finally(()=> setIsLoading(false));
 }


   function  onTabchange(value){
          setActiveTab(value)
   }

   useEffect(() => {
            getCoinsList();   
   },[]);

 

   function filterIt(arr, searchKey) {
      return arr.filter(function(obj) {
        return Object.values(obj).some(function(key) {
          return obj.name?.toLowerCase().includes(searchKey) || obj.symbol?.toLowerCase().includes(searchKey);
        })
      });
    }



function cancleSearch() {
      if(textValue){
           setTextVlaue("");
           getCoinsList();
      }
}  

function handleSearch(e){
      const searchQ =  e.toLowerCase();
      setTextVlaue(searchQ);
      getCoinsListForSearch(searchQ);
     
}

function  handleOnpress(){
       setList(searchList),
       setIsSearch(!isSearch),
       handleSearch("")
      
   }

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
        onRefresh={() => 
          getCoinsList()
        }
        refreshing={isLoading}
        removeClippedSubviews={true}
        ListFooterComponent={
          <View style={{height:150,  flex:1, justifyContent:'center', alignItems:'center', alignContent:'center'}}>
            
          </View>
        }
      />


      
       )
   
    }else{
        return(
            <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{textAlign:'center', fontWeight:'600',  fontSize:15}}>

                   {isSearch ? 'No result found for '+textValue : ' No result found' }
                   </Text>
            </View>
        )
    }
  
 }
   

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  style={styles.container}>

           
            <View style={styles.filterContainer}>
               <HeaderScreen isSearch={isSearch} symbol={'USD'} title={'Coins'} onpress={handleOnpress} handleSearch={handleSearch} textValue={textValue}  cancleSearch={cancleSearch} />

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
         
              {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.avoidCotainer}
              > */}
                     <View  style={styles.listTitleContainer}>
                        <Text style={styles.listTitle}>Coin</Text>
                        <Text  style={styles.listTitle}>Charts</Text>
                        <Text  style={styles.listTitlel}> { activeTab == 'cap' ? 'Market Cap' : 'Price / % change 24hr '}</Text>
                     </View>
                     <View style={{flex:1,  marginTop:20}}>
                           {!isLoading ?
                              <LoadCoins />
                           :
                              <Loader  textValue={'Loading  Coins....'} />
                           }
                     </View>
               {/* </KeyboardAvoidingView>      */}
               
          
        </KeyboardAvoidingView>
    );
  }
