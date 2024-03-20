import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/Login';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
        tabBarStyle:{backgroundColor:"#1A237E"},
        headerStyle: { backgroundColor: "#1A237E"}
      }
        }>
        <Tab.Screen name=" " component={Login} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
        ),}} />
      </Tab.Navigator>   
    </NavigationContainer>
  );
}



