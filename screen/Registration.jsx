import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableWithoutFeedback } from 'react-native-web'
import { TouchableOpacity, View } from 'react-native-web'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../firebase-config';

const Registration = ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  console.log(email)

  const handleCreateAccount = ()=>{
    console.log('hola')
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log('Cuenta creada')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('HomeScreen')
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <View >
        <Text style={styles.textRegister}>Complete sus datos correspondientes</Text>
        <TextInput onChangeText={(text)=>setName(text)} style={styles.input} placeholder='Nombre y Apellido'/>
        <TextInput onChangeText={(text)=>setEmail(text)} style={styles.input} placeholder='Email'/>
        <TextInput onChangeText={(text)=>setPassword(text)} style={styles.input} placeholder='Contraseña'/>
        <TextInput onChangeText={(text)=>setPasswordRepeat(text)} style={styles.input} placeholder='Repetir contraseña'/>
        <TouchableOpacity 
        onPress={handleCreateAccount} 
        style = {styles.buttonLogin}>
            <Text style={styles.textButton} >Registrarse</Text>
          </TouchableOpacity >
    </View>
  )
}

const styles = StyleSheet.create = ({

    textRegister:{
        textAlign:'center',
        fontWeight:100,
        fontSize:18,
        marginTop:20,
        marginBottom:40,
    },

    input:{
        borderWidth:1,
        borderColor:'#2B4865',
        padding:15,
        backgroundColor:'transparent',
        borderRadius: 50,
        height:50,
        width: 300,
        margin:'auto',
        marginTop: 15,
    },

    buttonLogin:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FD841F',
        width:300,
        margin:'auto',
        height:50,
        borderRadius:50,
        textAlign:'center',
        marginTop: 30,
        color:'#ffff',
        fontSize:40,
      },
    
      textButton:{
        color:'#ffff',
        fontSize:17,
      },
})

export default Registration;