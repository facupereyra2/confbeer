import { Link } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableWithoutFeedback,TouchableOpacity, View  } from 'react-native-web'
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getRedirectResult, getAuth} from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../firebase-config';


const Login = ({navigation}) => {

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const app = initializeApp(firebaseConfig);


  
  const loginGoogle =  () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      navigation.navigate('HomeScreen')
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }



  const handleSignIn = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log('Cuenta iniciada')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('HomeScreen')
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <>
        <View style={styles.container}>
          <Text style={styles.textbienvenida}>Bienvenido a ConfBeer</Text>
          <Text style={styles.textIngrese}>Por favor, ingrese con su cuenta</Text>
          <TextInput
          onChangeText={(text)=>setEmail(text)}
          style={styles.input}
          placeholder='Email'/>
          <TextInput
          onChangeText={(text)=>setPassword(text)}
          style={styles.input}
          placeholder='Password'/>
          <TouchableOpacity style = {styles.buttonLogin} onPress={handleSignIn}>
            <Text style={styles.textButton} >Login</Text>
          </TouchableOpacity >

          <Text style={styles.textGoogle}>O continue con Google</Text>
          <TouchableOpacity style={styles.buttonGoogle} onPress={loginGoogle}>
            <Text style={styles.textButton}>Google</Text>
          </TouchableOpacity>

          <Text style={styles.textIngrese}>No tienes cuenta? 
            <Link style={styles.linkIngrese} to={{screen:'Registration'}}> Ingresa aquí</Link>
          </Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
  },

  textbienvenida:{
    fontSize:30,
    textAlign:'center',
    marginTop:130,
  },

  textIngrese:{
    textAlign:'center',
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

  textGoogle:{
    textAlign:'center',
    marginTop:15
  },

  buttonGoogle:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#db4a39',
    width:300,
    margin:'auto',
    height:50,
    borderRadius:50,
    textAlign:'center',
    marginTop: 30,
    color:'#ffff',
    fontSize:40,
  },

  linkIngrese:{
    fontWeight:600,
    color:'#FD841F'
  }





})
  


export default Login;