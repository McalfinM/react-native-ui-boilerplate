import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


const MainProfile = () => {
    return (
        <View style={{ marginTop: 10 }}>
            <View style={styles.card}>
                <View style={styles.row}>
                    <Image style={styles.image} source={require('../../assets/image/Remas.png')} />
                    <Text style={styles.text}>IRMA
                    {"\n"}
                    Ikatan Remaja Masjid AR-Rahmah
                    </Text>
                </View>
            </View>

        </View>
    )
}

export default MainProfile

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    text: {
        top: 12
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '100%',
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
    image: {
        borderRadius: 100,
        width: 100,
        height: 100
    }
})
