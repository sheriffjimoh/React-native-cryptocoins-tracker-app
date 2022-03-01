import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// fonts
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"


// screens
import HomeScreen from "../../screens/homeScreen"
import ListingStatus from "../../screens/listingStatus"
import SearchScreen from "../../screens/searchScreen"


export default function MyTabs() {
    const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
            <Tab.Navigator 
             initialRouteName="Home"
             screenOptions={{
                tabBarStyle: { position: 'absolute', height:70 },
              }}
             >
            
            
            <Tab.Screen name="Home" 
            options={{
                headerShown: false,
                tabBarLabel: "Home",
                tabBarLabelStyle: {
                fontSize: 15,
                marginBottom:10
                },
                tabBarOptions: {
                 activeTintColor: "blue",
                 color:'blue'
                },
                tabBarIcon: (tabInfo) => {
                    return (
                        <AntDesign name="home" size={30} color={ tabInfo.focused ? "blue":"lightgrey"} />)
                  },
            }} 
            
            component={HomeScreen} />

            <Tab.Screen name="Coins Status"
             options={{
                headerShown: false,
                tabBarLabel: "Coin Status",
                tabBarLabelStyle: {
                    fontSize: 15,
                    marginBottom:10
                    },
                tabBarOptions: {
                 activeTintColor: "blue",
                },
                tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome5 name="coins" size={30} color={ tabInfo.focused ? "blue":"lightgrey"} />)
                  },
            }} 
            
            component={ListingStatus} />


      <Tab.Screen name="Search"
             options={{
                headerShown: false,
                tabBarLabel: "Search",
                tabBarLabelStyle: {
                    fontSize: 15,
                    marginBottom:10
                    },
                tabBarOptions: {
                 activeTintColor: "blue",
                },
                tabBarIcon: (tabInfo) => {
                    return (
                        <FontAwesome5 name="search" size={30} color={ tabInfo.focused ? "blue":"lightgrey"} />)
                  },
            }} 
            
            component={SearchScreen} />
            </Tab.Navigator>
  </NavigationContainer>
  );
}