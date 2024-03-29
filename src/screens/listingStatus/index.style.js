import React from 'react';
import { StyleSheet, Platform} from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default StyleSheet.create({
   
  container:{
    flex:1,
    flexDirection:'column',
    padding:10,

    backgroundColor:'#fff',
   },
   scrollContainer:{
       top:'5%'
   },
   listTitleContainer:{
       flexDirection:'row',
       justifyContent:"space-between",
       marginBottom:5,
       width:'100%',
       borderBottomColor:'#f4f4f4',
       borderBottomWidth:1,
       padding:10,
       paddingBottom:15,
       top:'10%'
     
   },
   listTitle:{
       textAlign:'center',
       flexBasis:'20%',
       fontSize:15,
       fontWeight:'800'
   },
   listTitlel:{
       fontSize:15
   },
   leftsideText:{
     color:'#4845ff',
     textAlign:'right',
     marginRight:15,
     fontWeight:'600',
     fontSize:20
   },
   filterContainer:{
       top:'5%',
       marginLeft:5
   },
   filters:{
       flexDirection:"row",
       justifyContent:'space-between',
       width:'70%',
       marginTop:10,
       marginBottom:10
      
    },
    cointitle:{
        fontSize:30,
        fontWeight:'bold'
    },
    button:{
        backgroundColor:'#f4f4f4',
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
        marginRight:10
    },
    buttonText:{
        textAlign:'center',
        color:'#4845ff',
        fontWeight:'bold'
       
        
    },
    activeButton:{
        backgroundColor:'#4845ff'
    },
    
    rowContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginBottom:10
    },
    iconsContainer:{
        fontWeight:'bold',
        marginTop:12,
        marginRight:10
     }
});

