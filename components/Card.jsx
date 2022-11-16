import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Link } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

const Card = ({ navigation, conferencia }) => {



    return (
        <ScrollView style={styles.scroll}>
            <Link to={{ screen: 'Detail', params: { conferencia: conferencia } }} style={styles.linkbutton}>
            <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={styles.imgcontainer}>
                            <Image style={styles.img} source={conferencia.img} />
                        </View>
                        <Text style={styles.title}>{conferencia.name}</Text>
                        <Text style={styles.text}>{conferencia.user} • {conferencia.duration}</Text>

                    </View>
            </View>
            </Link>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    
    card: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#FFF7E9',
        borderRadius: 15,
        width: 300,
        color: '#222831',
        marginLeft: 25,
        height: 370,
    },

    imgcontainer: {
        marginTop: 12,
        margin: 'auto',
    },

    img: {
        width: 278,
        height: 240,
        borderRadius: 15,
    },


    title: {
        marginLeft: 15,
        fontSize: 28,
        color: '#00000',
        fontWeight: 600,
    },

    text: {
        fontSize: 18,
        margin: 15,
        fontWeight: 300,
    },

    linkbutton:{
        marginBottom: -50,
    }

})

export default Card