import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import InputForm from '../../components/form/textInput'
import TextInputDescription from '../../components/form/textInputDesc'
import { HeaderWithBackButton } from '../../components/header'
const RegisterMember = () => {
    return (
        <ScrollView>
            <HeaderWithBackButton placement="center" text="Pendaftaran Anggota IRMA" />
            <InputForm placeholder="Nama Lengkap Kamu" />
            <InputForm placeholder="Alamat" />
            <InputForm placeholder="Tempat tanggal lahir" />
            <InputForm placeholder="Nomer Telpon / Whatsapp" />
            <InputForm placeholder="Instagram (Optional)" />
            <InputForm placeholder="Email" />
            <TextInputDescription placeholder="Ceritakan singkat tentang dirimu seperti hobi dll. " />
            <Image style={{ width: 150, height: 150 }} source={{ uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />
        </ScrollView>
    )
}

export default RegisterMember

const styles = StyleSheet.create({})
