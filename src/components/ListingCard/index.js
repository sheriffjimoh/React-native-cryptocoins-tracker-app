import react from "react";
import {View,Text} from 'react-native';
import Index from "../../screens/listingStatus";
import styles  from  "./index.style"

export default function ListingCard(props){

    const {id, name,symbol,rank,last_historical_data} = props.data;
 

    return(

        <View style={styles.container}>
            <View style={styles.rankContainer}>
                <Text style={styles.rankText}>{props.rank}</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.symbol}>{symbol}</Text>
                <Text style={styles.conName}>{name}</Text>
                
            </View>
            <View style={styles.dateContainer}>
                <Text>2022/09/12</Text>
            </View>
            
        </View>

    )

}