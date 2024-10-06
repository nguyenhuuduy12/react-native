import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeDetail from './components/learn/home.detail';
import Home from './components/learn/home';
import Like from './components/learn/like';
import LikeDetail from './components/learn/like.detail';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const TabApp=()=>{
    return(
      <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'aperture' : 'aperture-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName as any} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="like" component={Like} />
      </Tab.Navigator> 
    )
}
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      title: 'My home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <Stack.Screen 
      name="Home" 
      component={TabApp} 
      options={{title:"trang chu", headerShown: false}}
      />
      <Stack.Screen 
      name="HomeDetail" 
      component={HomeDetail} 
      options={({ route }: {route: any}) => ({ headerTitle: `detail ${route?.params?.userId ?? ""}`
      })}
      />
      <Stack.Screen 
      name="LikeDetail" 
      component={LikeDetail} 
      options={({ route }: {route: any}) => ({ headerTitle: `detail ${route?.params?.userId ?? ""}`
      })}
      />
    </Stack.Navigator>
    {/* <Drawer.Navigator>
      <Drawer.Screen 
      options={{
        drawerLabel: " Trang chu",
        headerTitle: "Trang chu "

      }}
      name="Feed" 
      component={HomeScreen} />
      <Drawer.Screen name="Article" component={DetailsScreen} />
    </Drawer.Navigator> */}
    
  </NavigationContainer>
  );
}

