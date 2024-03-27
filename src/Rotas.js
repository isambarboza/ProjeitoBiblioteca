import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Login from './Login';
import Livros from './Livros';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(UserContext);

    if (logado == false) {
        return (<Login />)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: "#1A237E" },
                    headerStyle: { backgroundColor: "#1A237E" }
                }
                }>
                <Tab.Screen name=" " component={Livros} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-open-page-variant-outline" color={color} size={size} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}