import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(0);

function UserProvider({children})
{
    const[ usuario, setUsuario ] = useState(null);
    const[ logado, setLogado ] = useState( false );
    const[ cadastro, setCadastro ] = useState(false);
    const[ login, setLogin ] = useState(false);

    async function Login( email, senha )
    {
<<<<<<< HEAD
        if( email == "renanzaneli01@gmail.com" && senha == "123" )
=======
        console.log( "Teste" );
        if( email == "gabi.martins@gmail.com" && senha == "123" )
>>>>>>> 50938895e4ac33e72b65da60c0d74399e11307f8
        {
            await AsyncStorage.setItem( "usuario" , "Gabriela" );
            setLogado( true );
        }
    }

    async function infoUsuario()
    {
        const usuario = await AsyncStorage.getItem("usuario");
        if( usuario ){
            setUsuario( usuario );
            setLogado( true )
        }
        
    }
    useEffect(() => {
        infoUsuario();
    }, [] );
  
    return(
        <UserContext.Provider value={ {usuario: usuario, logado: logado, Login, infoUsuario, login: login, setLogin, cadastro: cadastro, setCadastro, Login} }>
            {children}
        </UserContext.Provider>
    )
 }

 export default UserProvider;
