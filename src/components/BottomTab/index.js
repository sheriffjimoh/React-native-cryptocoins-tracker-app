import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// fonts
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { Ionicons } from "@expo/vector-icons";


// screens
import HomeScreen from "../../screens/homeScreen"
import ListingStatus from "../../screens/listingStatus"


export default function MyTabs() {
    const Tab = createBottomTabNavigator();
  return (
            <Tab.Navigator 
             initialRouteName="Home-draw"
             screenOptions={{
                tabBarStyle: { position: 'absolute', height:100 },
              }}
             >
            
            
            <Tab.Screen 
             name="Home-draw" 
             options={{
                headerShown: false,
                tabBarLabel: "Home",
                tabBarLabelStyle: {
                fontSize: 15,
                marginBottom:10
                },
            
                tabBarActiveTintColor: '#4845ff',
                tabBarInactiveTintColor: 'lightgrey',
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons name="home" size={30} color={ tabInfo.focused ? "#4845ff":"lightgrey"}  />
                        )
                  },
            }} 
            
            component={HomeScreen} />

           
           
            <Tab.Screen 
             name="Coins Status"
             options={{
                headerShown: false,
                tabBarLabel: "Coin Status",
                tabBarLabelStyle: {
                    fontSize: 15,
                    marginBottom:10
                    },
               
                tabBarActiveTintColor: '#4845ff',
                tabBarInactiveTintColor: 'lightgrey',
                tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome5 name="coins" size={30} color={ tabInfo.focused ? "#4845ff":"lightgrey"} />)
                  },
            }} 
            
            component={ListingStatus} />

            </Tab.Navigator>
  );
}