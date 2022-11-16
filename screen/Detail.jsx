import React from 'react'
import { Image, StyleSheet, Text, View} from 'react-native-web'

const Detail = (conferencia) => {
  const conference = conferencia.route.params.conferencia
  console.log(conference)
  return (
    <View>
      <Image  style={styles.img } source={conference.img}  />
      <Text style={styles.user }>  {conference.user}</Text>
      <Text style={styles.title }>  {conference.name}</Text>
      <Text style={styles.description}>  {conference.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  img:{
    widht: '100%',
    height: 300,
    borderRadius:5,
  },
  user:{
    margin:'auto'
  },

  title:{
    textAlign:'center',
    fontSize:18,
  },

  description:{
    textAlign:'justify',
    fontSize:12,
    margin: 5,
  }

})





export default Detail