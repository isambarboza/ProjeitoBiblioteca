import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from './Context/UserContext';


export default function Login() {

    const {Login} = useContext(UserContext)
    function realizaLogin()
    {
        Login( "email", "senha" );
    }
  return (
    <View OnPress={realizaLogin}>
      <Text>Login</Text>
      <TouchableOpacity OnPress={realizaLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      
    </View>
  )
}