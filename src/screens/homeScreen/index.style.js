import React from 'react';
import { StyleSheet, Platform} from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default StyleSheet.create({
   
    container:{
     flex:1,
     flexDirection:'column',
     top:'10%',
     padding:10,
    },
    scrollContainer:{
        flex:1,
        paddingBottom:20
    }
    
});

