import React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import styles from './index.style';
import SearchBar from '../../components/SearchBar';
import { MaterialIcons } from '@expo/vector-icons'; 

const  HeaderScreen = ({symbol,title,textValue,handleSearch , isSearch,onpress, cancleSearch}) => {

  return(
        <View style={styles.container}>
               <Text style={styles.leftsideText}>{symbol}</Text>
               <View style={styles.rowContainer}>
                   <Text style={styles.cointitle}>{title}</Text>
                      {!isSearch ? 
                        <MaterialIcons name="search" 
                          size={30} color="#4845ff" 
                          style={styles.iconsContainer}
                          onPress={()=> onpress()} />  
                        : 
                        <MaterialIcons name="clear"
                         size={30} color="#4845ff" 
                         style={styles.iconsContainer} 
                         onPress={()=>onpress()} />
                        }

                </View>
                  {isSearch ? 
                    <SearchBar textValue={textValue} onPress={cancleSearch} onchangeText={(e)=> handleSearch(e)}/> 
                     :
                    <View/>
                }
       </View>
    )

}


export default  HeaderScreen;
