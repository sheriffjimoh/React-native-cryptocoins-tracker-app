import React from 'react';
import { StyleSheet, Platform} from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default StyleSheet.create({
    container:{
         justifyContent:'space-between', 
         flexDirection:'row',
         marginTop:50,
         padding:10,
         paddingRight:20,
         alignItems:'center',
         borderBottomColor: '#f4f4f4',
         borderBottomWidth:2
    },
    text:{
      fontSize:10,
      padding:5,
      color:'#fff',
      borderRadius:30
    },
    bgInActive:{
     backgroundColor:'red',
    },
    bgActive:{
        backgroundColor:'green',
}

});
