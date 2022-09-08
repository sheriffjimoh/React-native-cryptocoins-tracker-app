import react,{useState,useEffect} from "react";
import {View, Text, FlatList} from "react-native"
import styles  from  "./index.style"
import SearchBar from '../../components/SearchBar';
import client from "../../services/env";
import CoinCard from "../../components/CoinCard";
import Loader from "../../components/Loader";

export default  function App({navigation}) {

    const [textValue, setTextVlaue] = useState('');
    const[ getList, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
     

    function cancleSearch() {
        if(textValue){
             setTextVlaue("");
        }
          
    }

    function onchangeText(inputValue){
        setTextVlaue(inputValue.toLowerCase());
    }

    function getCoinsList(){
        client.getTickers({limit:100})
        .then((response) => { 
            if (response.status) {
               setList(response.data);      
            }
      
        })
        .catch((error) => console.log(error))
        .finally(()=> setIsLoading(false));
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
                    activeTab={'top'}
                    item={item}
                    navigation={navigation}
                    />
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            // style={styles.scrollContainer}
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
                <View/>
            )
        }
      
     }

    return (
        <View  style={styles.container}>
             {/* search bar */}
             <SearchBar textValue={textValue} onPress={cancleSearch} onchangeText={(e)=>onchangeText(e)}/> 
       
             <View  style={styles.listTitleContainer}>
                 <Text style={styles.listTitle}>Coin</Text>
                 <Text  style={styles.listTitle}>Charts</Text>

                 <Text  style={styles.listTitlel}> {'Price / % change 24hr '}</Text>
            </View>
          
                <View style={{flex:1,  marginTop:20}}>

                  {!isLoading ?
                     <LoadCoins />
                  :
                     <Loader  textValue={'Loading  Coins....'} />
                  }
               
                </View>
        </View>
    );
  }
