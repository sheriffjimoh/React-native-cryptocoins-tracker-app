import React from 'react';
import { StyleSheet, Platform} from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default StyleSheet.create({
     
    container:{
        flex:1,
        backgroundColor:'#fff',
        height:height,
        width:width
         
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
    fontSize:16,
    width:80
  },
  coinSymbol:{
    fontWeight:'600',
    fontSize:16,
    color:'#ccc'
  },
  chartContainer:{
    padding:20,
    paddingTop:0,
    marginBottom:30,
    height:height
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
},
priceContainer:{
  paddingLeft:18,
  padding:5,
  
},
priceText:{
  fontSize:15,
  paddingTop:5,
  fontFamily:'Avenir',
  fontWeight:'800'
},
addressContainer:{
  paddingLeft:18,
  marginTop:10,
  marginBottom:10,
  backgroundColor:'#f4f4f4',
  height:150
},
addressTitle:{
  fontWeight:'900',
  fontSize:15,
  width:'100%',
  borderBottomColor:'#f4f4f4',
  borderBottomWidth:1,
  paddingBottom:5,
  paddingTop:5,
  marginBottom:5
},
ContainerAddressCard:{

  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  elevation:2,
  shadowOffset:{
      width:0,
      height:2
  },
  shadowOpacity:0.1,
  shadowRadius:2,
  backgroundColor:'#fff',
  padding:10,
  width:200,
  fontFamily:'Avenir',
  height:90,
  marginRight:15
},
plat:{
  fontFamily:'Avenir',
  fontWeight:'900',
  textTransform:'uppercase',
  marginBottom:5
},

copyButton:{
  backgroundColor:'#fff',
  padding:5,
  borderRadius:20,
  textAlign:'center',
  flexDirection:'row',
  justifyContent:'center',
  alignContent:'center',
  marginTop:5,
  width:70,
  borderColor:'#f4f4f4',
  borderWidth:2
},
addCon:{
  marginTop:18
},
exploreContainer:{
  marginTop:20,
  
},
exploreText:{
  fontSize:30,
  borderBottomColor:'red',
  borderBottomWidth:2,
},
exploreLink:{
  paddingLeft:5,
  color:'#4845ff',
  marginTop:5
},
subContainer:{
 
},





});

