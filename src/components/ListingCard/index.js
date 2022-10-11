import react from "react";
import {View,Text, TouchableWithoutFeedback} from 'react-native';
import styles  from  "./index.style"

export default function App(props){

    const {id, name,symbol,rank,last_historical_data} = props.data;

    return(

      
        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('CoinDetails', {data: {coinID:id,item:{name} }})}  
            >
                  <View style={styles.container}>
            <View style={styles.rankContainer}>
                <Text style={styles.rankText}>{props.rank}</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.symbol}>{symbol}</Text>
                <Text style={styles.conName}>{name}</Text>
                
            </View>
            <View style={styles.dateContainer}>
                <Text>{new Date(last_historical_data).toLocaleDateString()}</Text>
            </View>
            </View>
        </TouchableWithoutFeedback>
       

    )

}