import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';



export default function Reclamacoes() {

  const [reclamacoes, setReclamacoes] = useState();
  const [reclamacoes1, setReclamacoes1] = useState();
  

  return (
    <View>
      <Text style={css.btn}>Fale conosco em relação as suas impressões sobre a nossa biblioteca
       e se tem algo a reclamar do nosso atendimento além de avaliar
        a qualidade de nossos livros.</Text>
        <Text style={css.btnText}>Escolha aqui um arquivo:</Text>
      <TextInput
        style={css.input}
        textInput={reclamacoes}
        onChangeText={(digitado) => setReclamacoes(digitado)}
        value={reclamacoes}
      />
      <Text style={css.btnText}>Reclame aqui:</Text>
      <TextInput
        style={css.input1}
        textInput={reclamacoes1}
        onChangeText={(digitado) => setReclamacoes1(digitado)}
        value={reclamacoes1}
      />
      
      <TouchableOpacity style={css.btn1}>
                    <Text style={css.btnText1}>ENVIAR</Text>
                </TouchableOpacity>
                
                
      
      
               
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
    fontSize: 20,
    marginLeft: 20
  },
  btn1: {
    width: "90%",
    height: 45,
    borderRadius: 5,
    backgroundColor: "#A5D6A7",
    marginTop: 10,
    marginLeft:20
    
},
btnText1: {
    lineHeight: 45,
    color: "black",
    textAlign: "center",
    fontSize: 20,
 
},
input1: {
  width: "90%",
  backgroundColor: "#A5D6A7",
  height: 100,
  borderWidth: 1,
  borderRadius: 3,
  padding: 15,
  marginTop: 15,
  marginBottom: 15,
  borderWidth: 0,
  marginLeft: 20
}
    
})