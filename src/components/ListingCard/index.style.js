import React from 'react';
import { StyleSheet, Platform} from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default StyleSheet.create({
   
  container:{
        flexDirection:'row',
        padding:15,
        backgroundColor:'#fff',
        height:76,
        marginBottom:10,
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        elevation:2,
       shadowOffset:{
           width:0,
           height:2
       },
       shadowOpacity:0.1,
       shadowRadius:2,
       
   },

   rankContainer:{
    flexBasis:'30%',
    justifyContent:'center',
   },
   nameContainer:{
    textAlign:'center',
    alignContent:'flex-end',
    alignSelf:'flex-end',
    padding:10,
    flexBasis:'30%'
   },
   rankText:{
       textAlign:'center',
       alignContent:'center',
       fontSize:15,
       fontWeight:'500'
   },
   conName:{
       fontWeight:'100',
       fontSize:13
   },
   symbol:{
    fontSize:15,
    fontWeight:'bold'
   }
   
});

