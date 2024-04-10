//rnf
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {UserContext} from './Context/UserContext';
import { useState, useContext } from 'react';
import { Image } from 'react-native';
const ImagemBibl = require('../assets/biblioteca.jpg');
const logo = require('../assets/icon.png');


export default function Home() {

  const {usuario} = useContext( UserContext );

  return (
//const{usuario} = useContext{ UseuContext }
//text>bem vindo {usuario}>
    <View style={css.container}>
      
      <Image source={ImagemBibl} style={{ width: 350, height: 200 }} />
      <Text style={css.titulo}>Seja bem vindo: {usuario}</Text>
      <Text style={css.subTitulo}>Mais de 100 opções de livros online para você!</Text>
      <Text style={css.subTituloLoc}>Localização da nossa biblioteca:</Text>
      <Text style={css.caixa}></Text>
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold',
    color: "#1A237E",
  },
  subTitulo: {
    textAlign: "center",
    color: "#1A237E",
    fontWeight: 'bold',
  }, 
  subTituloLoc: {
    marginTop: 30,
    textAlign: "center",
    color: "#1A237E",
    fontWeight: 'bold',
  },
  caixa: {
    width: "100%",
    height: 300,
    borderRadius: 5,
    backgroundColor: "#A5D6A7",
    marginTop: 10,
    textAlign: "center",
  }
});