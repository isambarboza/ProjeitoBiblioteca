import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard, TouchableOpacity } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [login, setLogin] = useState(true); // Estado para alternar entre login e cadastro

  const handleLogin = () => {
    // Lógica para autenticar o usuário
    console.log('Login');
  };

  const handleCadastro = () => {
    // Lógica para cadastrar o usuário
    console.log('Cadastro');
  };

  return (
    <View style={css.container}>
      <Text style={css.titulo}>{login ? 'Login' : 'Cadastro'}</Text>
      <TextInput
        style={css.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={css.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      {login ? (
        <TouchableOpacity style={css.btn} onPress={handleLogin}>
            <Text style={css.btnText}>LOGIN</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={css.btn} onPress={handleCadastro}>
            <Text style={css.btnText}>CADASTRAR</Text>
        </TouchableOpacity>
      )}
      <Text style={css.info} onPress={() => setLogin(!login)}>
        {login ? 'Ainda não tem uma conta? Cadastre-se aqui.' : 'Já tem uma conta? Faça login aqui.'}
      </Text>
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
    titulo: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: "90%",
        backgroundColor: "#EBECF0",
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
    }
});

export default Login;