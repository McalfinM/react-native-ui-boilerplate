import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'

const ListPost = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.row}>

            <View style={styles.card}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetailPost', { slug: 'detail' })}>
                    <Image style={styles.image} source={{ uri: 'https://i.imgur.com/ZYwMett.jpeg' }} />
                    <Text style={styles.text}>Keren</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: 'https://i.imgur.com/ZYwMett.jpeg' }} />
                <Text style={styles.text}>Keren</Text>
            </View>

            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: 'https://i.imgur.com/ZYwMett.jpeg' }} />
                <Text style={styles.text}>Keren</Text>
            </View>

            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: 'https://i.imgur.com/ZYwMett.jpeg' }} />
                <Text style={styles.text}>Keren</Text>
            </View>

        </View>

    )
}

export default ListPost

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    text: {

    },
    image: {
        marginBottom: 3,
        width: '100%',
        height: 170,
        borderRadius: 5,
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '48%',
        borderRadius: 2,
        margin: 3,
        marginBottom: 10,
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
