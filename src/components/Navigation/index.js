import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import BottomTab from "../BottomTab";
import Settings from "../../screens/settingScreen"

export default function NavStack() {
  return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                    <Stack.Screen
                     options={{headerShown: false,}}
                    name="HomeScreen" component={BottomTab} />
                   
                    <Stack.Screen name="ConDetails" component={Settings} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}