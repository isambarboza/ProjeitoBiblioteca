import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity, } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext, useState } from 'react';
import { UserContext } from './Context/UserContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginPage from '../src/LoginPage';
import Livros from '../src/Livros';
import Agenda from '../src/Agenda';
import Home from '../src/Home';
import Sugestoes from '../src/Sugestoes';

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { logado, setLogado, cadastro, setCadastro } = useContext(UserContext);

    if (logado == false) {
        return (<LoginPage />)
    }

    if (cadastro) {
        return (
            <View style={css.container}>
                <TextInput
                    style={css.input}
                    placeholder="E-mail"
                    onChangeText={(digitado) => setEmail(digitado)}
                    value={email}
                />
                <TextInput
                    style={css.input}
                    placeholder="Senha"
                    onChangeText={(digitado) => setSenha(digitado)}
                    value={senha}
                />
                <TouchableOpacity style={css.btn} onPress={() => { setCadastro(false); setLogado(false); }}>
                    <Text style={css.btnText}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <NavigationContainer >
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: "#1A237E" },
                    headerStyle: { backgroundColor: "#1A237E" },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                }
                }>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={'white'} size={size} />
                    ),
                }} />
                <Tab.Screen name="Livros" component={Livros} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-open-page-variant-outline" color={'white'} size={size} />
                    ),
                }} />
                <Tab.Screen name="Sugestoes" component={Sugestoes} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="lightbulb-variant-outline" color={'white'} size={size} />
                    ),
                }} />
                <Tab.Screen name="Agenda" component={Agenda} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="calendar-month-outline" color={'white'} size={size} />
                    ),
                }} />



            </Tab.Navigator>
        </NavigationContainer>
    )
}
const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: "90%",
        backgroundColor: "#E4E4E4",
        height: 60,
        borderRadius: 3,
        padding: 15,
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 0
    },
    info: {
        marginTop: 20,
        color: 'blue',
    },
    iconeFoto: {
        width: "55%",
        height: "30%",
        borderRadius: 5,
        backgroundColor: "#E4E4E4",
        marginTop: 10,
        borderRadius: 120,
    },
    iconeFotoText: {
        lineHeight: 200,
        color: "black",
        textAlign: "center",
        fontSize: 10,
    },
    btn: {
        width: "90%",
        height: 45,
        borderRadius: 5,
        backgroundColor: "#A5D6A7",
        marginTop: 10,
    },
    btnText: {
        lineHeight: 45,
        color: "black",
        textAlign: "center",
        fontSize: 20,
    },
    btnTextCadastro: {
        color: "blue",
    },
});

