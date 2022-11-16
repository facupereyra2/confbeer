import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native-web'
import Card from '../components/Card';
import {db} from '../firebase-config'
import { deleteDoc, doc, getDoc, setDoc, collection, getDocs  } from 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const [conference, setConference] = useState();

    const read = async() =>{
        const conference = collection(db, 'conference');
        const querySnapshot = await getDocs(conference);
        const data = querySnapshot.docs.map(doc => doc.data());
        setConference(data);
        console.log(data)
    }

    useEffect(()=>{
        read()
    },[])

  

  return (
    <ScrollView>
      <View style={styles.container}>
      {conference && conference.map((conferencia, index)=>{
        return(
          <Card
            key={index}
            conferencia = {conferencia}
          />

        )})}
      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({

    container:{
        height: 3000,
        backgroundColor: '#252525'
    },

});
export default Home