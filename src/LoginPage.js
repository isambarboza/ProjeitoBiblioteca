import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext, useState } from 'react';
import { UserContext } from './Context/UserContext';

    

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const {setLogin, setCadastro, Login } = useContext( UserContext );

  function realizaLogin() {
    Login(email, senha);
  }


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
      <TouchableOpacity style={css.btn} onPress={realizaLogin}>
        <Text style={css.btnText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={css.texto}
        onPress={() => {
        setCadastro(true);
        setLogin(true);
      }}>Ainda não tem conta? Cadastra-se</Text>
    </View>    
  );
};

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    texto:{
      color: "blue",
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
