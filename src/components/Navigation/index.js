import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import BottomTab from "../BottomTab";
import Settings from "../../screens/settingScreen"
import CoinDetails from "../../screens/coinDetails"

export default function NavStack() {
  return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
             <Stack.Screen options={{headerShown: false,}} name="Home" component={BottomTab} />
              <Stack.Screen name="CoinDetails" initialParams={{data: null}} component={CoinDetails} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}