import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function Sugestoes() {
  const [sugestao, setSugestao] = useState('');
  const [sugestoesSalvas, setSugestoesSalvas] = useState([]);

  const handleSalvarSugestao = () => {
    if (sugestao.trim() !== '') {
      setSugestoesSalvas([...sugestoesSalvas, sugestao]);
      setSugestao('');
    }
  };

  return (
    <View>
      <Text style={css.btn}>Fale conosco, gostariamos de saber o que acha sobre a nossa biblioteca virtual
        e algumas sugestões de coisas que poderiamos fazer
        como trazer novos livros para nossa biblioteca.</Text>
      <Text style={css.btnText}>Sugestões:</Text>
      <TextInput
        style={css.input}
        value={sugestao}
        onChangeText={(text) => setSugestao(text)}
        placeholder="Digite sua sugestão"
      />
      <TouchableOpacity style={css.btn1} onPress={handleSalvarSugestao}>
        <Text style={css.btnText1}>ENVIAR</Text>
      </TouchableOpacity>
      <Text style={css.btnText}>Sugestões Salvas:</Text>
    
      <FlatList style={css.lista}
        data={sugestoesSalvas}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const css = StyleSheet.create({
  btn: {
    width: "85%",
    height: 95,
    borderRadius: 5,
    backgroundColor: "#A5D6A7",
    marginTop: 40,
    marginLeft: 30,
    textAlign: "center",
    padding: 10
  },
  input: {
    width: "90%",
    backgroundColor: "#E4E4E4",
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 0,
    marginLeft: 20
  },
  btnText: {
    lineHeight: 45,
    color: "black",
    fontSize: 20,
    marginLeft: 20
  },
  btn1: {
    width: "90%",
    height: 45,
    borderRadius: 5,
    backgroundColor: "#A5D6A7",
    marginTop: 10,
    marginLeft: 20
  },
  btnText1: {
    lineHeight: 45,
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  lista: {
    backgroundColor:"#E4E4E4",
    padding: 10,
    width: "90%",
    height: 80,
    marginLeft: 20,
    marginBottom: 15,
    fontSize: 20,
    borderRadius: 5

    

  }
});
