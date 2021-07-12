import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import Hello from '../../assets/image/hello'
import Share from '../../assets/image/share'
import Profile from '../../assets/image/profile'
import { useNavigation } from '@react-navigation/native'



const ListRemas = () => {



    const { width } = Dimensions.get("window")
    const height = width * 0.6
    const navigation = useNavigation()

    return (
        <View style={{ width, height, backgroundColor: '#FFFFFF', margin: 10, borderRadius: 20 }}>
            <Text>List Remaja Masjid</Text>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={width, height}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetailRemas', { slug: 'slug' })}>
                    <View style={styles.card}>
                        <Image style={styles.image} source={{ uri: 'https://i.imgur.com/ZYwMett.jpeg' }} />
                    </View>
                </TouchableOpacity>
                <View style={styles.card}>
                    <Image style={styles.image} source={{ uri: 'https://i.imgur.com/ZYwMett.jpeg' }} />

                </View>
            </ScrollView>
        </View>
    )

}

export default ListRemas

const { width } = Dimensions.get("window")
const height = width * 0.5
const styles = StyleSheet.create({

    image: {
        marginBottom: 3,
        width: '100%',
        height: '90%',
        borderRadius: 5,
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderRadius: 10,
        margin: 10,
        height: width / 2,
        width: width * 0.7,
        justifyContent: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5.46,

        elevation: 9,
    },
})