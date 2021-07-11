import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { HeaderWithBackButton } from '../../../components/header'

const DetailMember = (uuid) => {
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <HeaderWithBackButton text="Detail Member" placement="center" />
            <View style={styles.containerText}>
                <Text style={styles.parentName} >Nama Lengkap</Text>
                <Text style={styles.text}>Rania sania ana</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.parentName} >Alamat</Text>
                <Text style={styles.text}>Kp.babakan rt.004rw.024 Sukatani, Sawangan Baru, Kec. Tapos, Kota Depok, Jawa Barat 16511</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.parentName} >TTL</Text>
                <Text style={styles.text}>Jakarta 19 April, 2021</Text>
            </View>

            <View style={styles.containerText}>
                <Text style={styles.parentName} >Contact</Text>
                <Text style={styles.text}>tlp/wa: 0895532353212{"\n"}
    email : riana@gmail.com{"\n"}
    instagram : @rianahelp</Text>
            </View>

            <View style={styles.containerText}>
                <Text style={styles.parentName}>Deskripsi</Text>
                <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
            </View>

            <Image style={styles.image} source={{ uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />
        </ScrollView>
    )
}

export default DetailMember

const styles = StyleSheet.create({
    text: {
        borderWidth: 1,
        borderColor: 'green',
        marginHorizontal: 10,
        marginTop: 10,
        padding: 5,
        borderRadius: 10
    },
    containerText: {
        marginTop: 20
    },
    parentName: {
        marginHorizontal: 10
    },
    image: {
        height: 150,
        width: 150
    }
})
