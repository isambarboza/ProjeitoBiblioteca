import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Agenda from "./Agenda";
import Sugestoes from './Sugestoes';



const Tab = createBottomTabNavigator();

export default function Rotas() {
    return (
      
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Agenda" component={Agenda} options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="calendar-month" color={color} size={size} />
                        ),
                    }} />
                    <Tab.Screen name="Sugestões" component={Sugestoes} options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="lightbulb-variant-outline" color={color} size={size} />
                        ),
                    }} />
                    
                </Tab.Navigator>
            </NavigationContainer>
       

    ); 
}