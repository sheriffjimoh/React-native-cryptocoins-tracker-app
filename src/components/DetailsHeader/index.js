import {View, Text,TouchableOpacity} from "react-native"
import Styles from './index.style';
import Icon from 'react-native-vector-icons/FontAwesome';


function Header({status, navigation}){



    return (
        <View style={Styles.container}>
             <TouchableOpacity onPress={()=> navigation.goBack()}> 
                         <Text> <Icon name="angle-left" size={30} color="black" /> </Text>  
                </TouchableOpacity>
           <Text style={[Styles.text, status ? Styles.bgInActive : Styles.bgActive ]}>{ status ? 'Not available in market' : 'Available in market'}</Text>
     </View>
    )

}


export default Header;