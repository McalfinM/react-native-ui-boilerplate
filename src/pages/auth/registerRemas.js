import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { InputForm, TextInputDescription } from '../../components/form'
import { HeaderWithSaveButton } from '../../components/header'

const RegisterRemas = () => {
    return (
        <ScrollView>
            <HeaderWithSaveButton placement="center" text="Registrasi Remaja Masjid" buttontxt="Register" />
            <InputForm placeholder="Nama Singkat Remaja Masjid" />
            <InputForm placeholder="Nama Panjang Remaja Masjid" />
            <TextInputDescription placeholder="Alamat" />
            <InputForm placeholder="Nomer Telpon" />
            <InputForm autoCapitalize="none" placeholder="Email" />
            <InputForm placeholder="Password" secure={true} />
            <TextInputDescription placeholder="Deskripsikan singkat remaja masjid anda" />
        </ScrollView>
    )
}

export default RegisterRemas

const styles = StyleSheet.create({})
