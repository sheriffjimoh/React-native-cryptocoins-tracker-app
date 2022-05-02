import React from 'react';
import { StyleSheet, Platform} from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default StyleSheet.create({
   
     
    container:{
        flex:1,
        // alignContent:'center',
        // alignItems:'center',
        backgroundColor:'#fff',
         
     },

     image:{
      width: 50,
      height: 40,
      resizeMode: 'stretch',
     },
     button:{
      backgroundColor:'#4845ff',
      padding:10,
      paddingRight:20,
      width:130,
      borderRadius:20,
      textAlign:'center',
      paddingLeft:13,
      flexDirection:'row',
      justifyContent:'center',
      alignContent:'center',
      height:40,
  },
  buttonText:{
      textAlign:'center',
      color:'#fff',
      fontWeight:'bold'
  },
  headerContainer:{
    // flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    padding:20,
    paddingBottom:10
  },
  coinNameContainer:{
    flexDirection:'row',
  },
  contentContainer:{
    marginLeft:5
  },
  coinName:{
    fontWeight:'600',
    fontSize:16
  },
  coinSymbol:{
    fontWeight:'600',
    fontSize:16,
    color:'#ccc'
  },
  chartContainer:{
    padding:20,
    paddingTop:0
  },
  rankContainer:{
    textAlign:'center',
    alignContent:'center',
    backgroundColor:'#f4f4f4f4',
    padding:5,
    height:40,
    fontSize:20,
    marginRight:8,
    paddingTop:12,
},
rankText:{
    fontSize:20,
    paddingLeft:10,

},
descContainer:{
  marginTop:10
},
descText:{
  fontSize:15,
  fontFamily:'Avenir'
}


});

