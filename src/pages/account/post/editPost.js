import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { InputForm, PickerForm } from '../../../components/form'
import { HeaderWithSaveButton } from '../../../components/header'

const EditPost = (uuid) => {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View>
                <HeaderWithSaveButton placement="center" text="Settings" />

                <InputForm placeholder="Nama Singkat" />
                <InputForm placeholder="Nama Lengkap" />
                <InputForm placeholder="Visi" />
                <Text>Kategori</Text>
                <PickerForm />
                <InputForm placeholder="Description" />
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />
                </View>

            </View>
        </ScrollView>
    )
}

export default EditPost

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
    },
    textEdit: {
        textAlign: 'center',
        color: "white"
    },
    edit: {
        width: 50,
        padding: 5,
        marginLeft: 10,
        backgroundColor: 'green'
    }
})
