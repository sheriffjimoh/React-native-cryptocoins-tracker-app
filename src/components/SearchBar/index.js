import React from 'react';
import {View,TextInput, Text,TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 
import styles from './index.style';

const  SearchBar = ({onchangeText, onPress, textValue}) => {


   return(
      <View style={styles.searchContainer}>
            <View style={{width:20}}>
                <Ionicons name="md-search" size={25} color="black" />
            </View>
                 
            <TextInput value={textValue}  placeholder='Search with any keywords'  onChangeText={onchangeText}  style={styles.input}/> 
               {textValue.length > 0 ?
                  <View style={{width:40}}>
                     <TouchableOpacity  onPress={onPress}>
                         {/* <MaterialIcons name="clear" size={24} color="black" /> */}
                       <Text style={{fontSize:12, fontWeight:'bold'}}>Clear</Text>
                      </TouchableOpacity>
                  </View>

                   : <View/>
                }
               
        </View>
    )

}


export default  SearchBar;
