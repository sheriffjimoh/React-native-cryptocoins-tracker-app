import React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import styles from './index.style';

const  Loader = ({textValue}) => {

  return(
        <View style={styles.container}>
              <ActivityIndicator animating={true} size="large" color="black" />
              <Text>{textValue}</Text>
        </View>
    )

}


export default  Loader;
