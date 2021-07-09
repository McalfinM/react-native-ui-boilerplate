import React, { useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { hands, img } from '../../assets'

const Splash = ({ navigation }) => {
    useEffect(() => {

    }, [])
    return (
        <ImageBackground source={hands} style={styles.background}>
            {/* <Image source={img} style={styles.logo} /> */}
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 222,
        height: 200
    }
})
