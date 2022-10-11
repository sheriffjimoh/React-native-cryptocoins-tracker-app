import {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, KeyboardAvoidingView,Platform, FlatList} from "react-native"
import styles  from  "./index.style"
import Ionicons from  "react-native-vector-icons/Ionicons"
import ListingCard from "../../components/ListingCard"
import client from "../../services/env";
import SearchBar from '../../components/SearchBar';
import { MaterialIcons } from '@expo/vector-icons'; 
import HeaderScreen from "../../components/ScreenHeader";
import Loader from "../../components/Loader";


export default  function App(props) {
    const [activeTab, setActiveTab] = useState('active');
    const [isLoading, setIsLoading] = useState(false)
    const [getList, setList] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [textValue, setTextVlaue] = useState("");
    const [searchList, setSearchList] = useState([])



function getCoinsList(value = activeTab){
        setIsLoading(true)
        setActiveTab(value)
        client.getIdMap({listingStatus: value, })
        .then((response) => {  
            if(response.status){

                setList(response.data.sort((a, b) => a.rank - b.rank));
                setSearchList(response.data)
                setIsLoading(false)

                if(textValue !== ""){
                  console.log('textValue:', textValue)
                  handleSearch(textValue);
                 }
            }
        })
        .catch((error) => console.log(error));
 }


function onTabchange(value){
  getCoinsList(value)
    
 }
  
 useEffect(() => {
  getCoinsList();   
  },[activeTab]);


  function filterIt(arr, searchKey) {
    return arr.filter(function(obj) {
      return Object.values(obj).some(function(key) {
        return obj.name?.toLowerCase().includes(searchKey) || obj.symbol?.toLowerCase().includes(searchKey);
      })
    });
  }



  function handleSearch(e){
    setIsLoading(true)
    const searchQ =  e.toLowerCase();
    setTextVlaue(searchQ);
    const searchPoll = searchList;
    const result = filterIt(searchPoll, searchQ);
    setList(result.sort((a, b) => a.rank - b.rank));
    setIsLoading(false)

 }

 function cancleSearch() {
  if(textValue){
       setTextVlaue("");
       getCoinsList();
  }
}  



function  handleOnpress(){
   setList(searchList),
   setIsSearch(!isSearch),
   handleSearch("")
  
}

    const LoadCoins = () =>{
            
     if(getList?.length > 1){
        return(
            <FlatList
            data={getList}
            renderItem={({ item, index, separators }) => (
                <ListingCard key={index}  navigation={props.navigation} rank={item.rank ?  item.rank : index + 1} data={item} />
            
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
                    <HeaderScreen isSearch={isSearch}  title={'Coins Status'} onpress={handleOnpress} handleSearch={handleSearch} textValue={textValue}  cancleSearch={cancleSearch} />
                      
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
                          }} 
                          >
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
          
         { !isLoading ?
           <LoadCoins />

           :
           <Loader textValue={`Loading ${activeTab} coins....`}   />
          }


        </KeyboardAvoidingView>
    );
  }
