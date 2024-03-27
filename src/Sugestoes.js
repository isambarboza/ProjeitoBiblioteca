import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';



export default function Sugestoes() {

  const [sugestoes, setSugestoes] = useState();

  return (
    <View>
      <Text style={css.btn}>Fale conosco, gostariamos de saber o que acha sobre a nossa biblioteca virtual
        e algumas sugestões de coisas que poderiamos fazer
        como trazer novos livros para nossa biblioteca.</Text>
        <Text style={css.btnText}>Sugestões:</Text>
      <TextInput
        style={css.input}
        textInput={sugestoes}
        onChangeText={(digitado) => setSugestoes(digitado)}
        value={sugestoes}
      />
      
    </View>


  )
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
    padding:10



  },
  input: {
    width: "90%",
    backgroundColor: "#E4E4E4",
    height: 60,
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 0,
    marginLeft: 20
  },
  btnText: {
    lineHeight: 45,
    color: "black",
    fontSize: 15,
    marginLeft: 15
  }
})