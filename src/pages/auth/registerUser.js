import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { InputForm, TextInputDescription } from '../../components/form'
import { HeaderWithSaveButton } from '../../components/header'

const RegisterUser = () => {
    return (
        <ScrollView>
            <HeaderWithSaveButton placement="center" text="Registrasi Remaja Masjid" buttontxt="Register" />
            <InputForm placeholder="Nama" />
            <InputForm autoCapitalize="none" placeholder="Email" />
            <InputForm placeholder="Password" secure={true} />
        </ScrollView>
    )
}

export default RegisterUser

const styles = StyleSheet.create({})
