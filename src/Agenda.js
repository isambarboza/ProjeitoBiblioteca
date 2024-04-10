import { TextInput, StyleSheet, TouchableOpacity, FlatList, Platform, Image, Keyboard  } from "react-native";
import { Text, View } from "react-native";
import { useState, useEffect, useContext } from "react";
import Evento from "./Evento";
import * as Calendar from 'expo-calendar';
import uuid from 'react-native-uuid';
import { UserContext } from "./Context/UserContext";



export default function Agenda( )
{

    const[ agenda, setAgenda ] = useState();
    const[ inicio, setInicio ] = useState();
    const[ final, setFinal ] = useState();
    const[ dados, setDados] = useState([]);

   const {usuario} = useContext( UserContext );
    
    async function getPermissions()
    {        
        const {status} = await Calendar.requestCalendarPermissionsAsync();
        if (status === "granted")
        {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        }
    }

    useEffect(() =>{
        getPermissions();
    },[]);

    async function Salvar()
    {
        
        if( agenda != "" && inicio != "" && final != "" ) {
            Keyboard.dismiss();
            const evento = {
                id: uuid.v4(),
                nome: agenda,
                inicio: inicio,
                final: final
            };
            const novoEvento = [ ...dados , evento ];
            setDados( novoEvento );
            
            

            const defaultCalendarSource =
            Platform.OS === 'ios'
            ? await Calendar.getDefaultCalendarAsync()
            : {isLocalAccount: true, name: 'Expo Calendar'};
            

            const newCalendarID = await Calendar.createCalendarAsync({
                title: 'Expo Calendar',
                color: 'blue',
                entityType: Calendar.EntityTypes.EVENT,
                sourceId: defaultCalendarSource.id,
                source: defaultCalendarSource,
                name: 'internalCalendarName',
                ownerAccount: 'personal',
                accessLevel: Calendar.CalendarAccessLevel.OWNER,
              });

              

              let inicioDataHora = inicio.split(" ");
              let inicioData = inicioDataHora[0].split("-");
              let inicioHora = inicioDataHora[1].split(".");
              
              let finalDataHora = final.split(" ");
              let finalData = finalDataHora[0].split("-");
              let finalHora = finalDataHora[1].split(".");

              
              const newEvent = {
                title: agenda,
                startDate: new Date(inicioData[2], inicioData[1] -1, inicioData[0], inicioHora[0], inicioHora[1]),
                endDate: new Date(finalData[2],finalData[1] -1 , finalData[0], finalHora[0], finalHora[1]),
                location: 'Biblioteca',
                notes: 'Livros para ler'
              };

              try{
                await Calendar.createEventAsync(newCalendarID, newEvent);
                alert('Evento criado com sucesso!!');
                
              } catch(error) {
                alert('Erro ao criar evento!!')              
              }

            setAgenda( "" );
            setInicio( "" );
            setFinal( "" );
            
        }
        
        
    }


    return(
        <View>
             <Text> Bem Vindo: {usuario} </Text>
          <Image source={require("../assets/livro.png" )}style={css.imagem}></Image>
            <Text style={css.btnText}>Agende agora o seu livro!!</Text>
            <View>
                <TextInput
                placeholder="Nome Evento" 
                style={css.input}
                textInput={agenda}
                onChangeText={ (digitado) => setAgenda( digitado) }
                value={agenda}
           />
           <TextInput 
                    placeholder="Data de Inicio" 
                    keyboardType='numeric'
                    style={css.input}
                    textInput={inicio}
                    value={inicio}
                    onChangeText={ (digitado) => setInicio( digitado ) }
                />
                <TextInput 
                    placeholder="Data de Término" 
                    keyboardType='numeric'
                    style={css.input}
                    textInput={final}
                    value={final}
                    onChangeText={ (digitado ) => setFinal( digitado ) }
                />
                <TouchableOpacity style={css.btn} onPress={Salvar}>
                    <Text style={css.btnText}>SALVAR</Text>
                </TouchableOpacity>

                <FlatList
                data={dados}
                renderItem={ ({item}) => <Evento agenda={item.nome} inicio={item.inicio} final={item.final} /> }
                keyExtractor={ item => item.id }
            />
           
            
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 15
        
    },
    input: {
        width: "90%",
        backgroundColor: "#EBECF0",
        height: 60,
        borderWidth: 1,
        borderRadius: 3,
        padding: 15,
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 0,
        marginLeft:20
        
    },
    btn: {
        width: "90%",
        height: 45,
        borderRadius: 5,
        backgroundColor: "#A5D6A7",
        marginTop: 10,
        marginLeft:20
        
    },
    btnText: {
        lineHeight: 45,
        color: "black",
        textAlign: "center",
        fontSize: 20,
        
    },
    imagem:{
        width:"100%",
        height:150,
        marginTop:20,
        resizeMode:"contain",
       
       
      }
   
})