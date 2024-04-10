import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Login from './Login';
import Livros from './Livros';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import Agenda from './Agenda';
import Home from './Home';
import Sugestoes from './Sugestoes';
import Reclamacoes from './Reclamacoes';
import Evento from './Evento';



const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(UserContext);

    if (logado == false) {
        return (<Login />)
    }

    return (
        <NavigationContainer >
      <Tab.Navigator  
      screenOptions={{
        tabBarStyle:{backgroundColor:"#1A237E"},
        headerStyle: { backgroundColor: "#1A237E"},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
      }
        }>
        <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-month-outline" color={'white'} size={size} />
        ),}} />
        <Tab.Screen name="Livros" component={Livros} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-page-variant-outline" color={'white'} size={size} />
        ),}} />

        <Tab.Screen name="Agenda" component={Agenda} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-month-outline" color={'white'} size={size} />
        ),}} />
         <Tab.Screen name="Sugestoes" component={Sugestoes} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="lightbulb-variant-outline" color={'white'} size={size} />
        ),}} />
         <Tab.Screen name="Reclamações" component={Reclamacoes} options={{ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="text-to-speech-off" color={'white'} size={size} />
        ),}} />
      </Tab.Navigator>   
    </NavigationContainer>
    )
}