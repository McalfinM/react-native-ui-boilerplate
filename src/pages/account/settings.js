import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { InputForm } from '../../components/form'
import { HeaderBar, HeaderWithBackButton } from '../../components/header'

const Settings = () => {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View>
                <HeaderWithBackButton placement="center" text="Settings" />
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />
                </View>
                <InputForm placeholder="Nama Singkat" />
                <InputForm placeholder="Nama Lengkap" />
                <InputForm placeholder="Visi" />
                <InputForm placeholder="Misi" />
                <InputForm placeholder="Description" />
            </View>
        </ScrollView>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 100
    }
})
