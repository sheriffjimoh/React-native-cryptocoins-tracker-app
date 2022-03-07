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
        marginBottom:10

       },
       rankContainer:{
           flexBasis:"9%",
           textAlign:'center',
           alignContent:'center',
        //    backgroundColor:'#f4f4f4f4',
           padding:5,
           height:35,
           right:5,
           top:7,
           fontSize:20,
           marginRight:5
       },
       rankText:{
           fontSize:20,

       },
       coinNameCointainer:{
           marginTop:3,
           flexBasis:'20%'
       },
       coinSymbol:{
           fontWeight:'700'
       },
       coinName:{
           fontWeight:'normal',
           color:'grey'
       },
       chartContainer:{
           flexBasis:'40%'
       },
       priceText:{
           fontWeight:'bold',
           width:76
       },
       bargecum:{
          padding:3,
          top:4,
         
       },
       bargeSuccess:{
           backgroundColor:'green',
           justifyContent:'center',
           textAlign:'center'
       },
       bargeerror:{
        backgroundColor:'red',
        justifyContent:'center',
        textAlign:'center'
       },

       bargeText:{
           textAlign:'center',
           color:'#fff',
           width:76

       }
});

