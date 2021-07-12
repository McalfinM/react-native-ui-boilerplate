import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import { HeaderWithBackButton } from '../../components/header'
import SliderRemas from '../../components/remasComponent/slider'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputForm } from '../../components/form'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import RemasChart from '../../components/remasComponent/remasChart'
import RemasListPost from '../../components/remasComponent/remasListPost'
import { useNavigation } from '@react-navigation/native'

const DetailRemas = (slug) => {

    const navigation = useNavigation()
    return (

        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>

            <HeaderWithBackButton placement="center" text="Detail Post" />

            <ImageBackground style={styles.imageBack} source={{ uri: 'http://pngimg.com/uploads/circle/circle_PNG77.png' }}>

                <Card style={styles.card}>
                    <Image style={styles.image} source={{ uri: 'https://res.cloudinary.com/dcyohew0h/image/upload/v1626024740/profile/stbaag6j4kfp9sr4cbdg.jpg' }} />
                </Card>

            </ImageBackground>

            <View style={{ marginTop: 10, alignItems: 'center' }}>
                <Card style={styles.cardName}>
                    <Text style={{ alignSelf: 'flex-end', right: 10, fontWeight: "bold" }}>100 likes</Text>
                    <View style={{ position: 'absolute', alignSelf: 'flex-end', right: 35, top: -20 }}>
                        <FontAwesomeIcon icon={faHeart} color="black" size={30} />
                    </View>
                    <Text style={{ textAlign: 'center', fontWeight: "bold" }}>IRMA</Text>
                    <Text style={{ textAlign: 'center', fontWeight: "bold" }}>Ikatan Remaja Masjid AR-Rahmah {"\n"}</Text>

                    <Text style={{ textAlign: 'center', fontWeight: "bold" }}>Visi </Text>
                    <Text style={{ textAlign: 'center' }}>Ikatan Remaja Masjid AR-Rahmah {"\n"}</Text>
                    <Text style={{ textAlign: 'center', fontWeight: "bold" }}>Misi</Text>
                    <Text style={{ textAlign: 'center' }}>Ikatan Remaja Masjid AR-Rahmah{"\n"}</Text>
                    <Text style={{ textAlign: 'center', fontWeight: "bold" }}>Deskripsi</Text>
                    <Text style={{ textAlign: 'center' }}>Ikatan Remaja Masjid AR-Rahmah</Text>

                    <Button title="Daftar Sebagai Anggota IRMA" onPress={() => navigation.navigate('RegisterMember')} />
                </Card>
            </View>

            <RemasChart />
            <RemasListPost />

            <View style={{ marginTop: 10 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text>Komentar Mereka Tentang IRMA</Text>
                    <Card style={styles.commentCard}>
                        <View>
                            <InputForm autoCapitalize="none" placeholder="Tulis Komentar lu" />
                        </View>
                        <View>

                            <Text>Alistya</Text>
                            <Text>wah keren ilmunya</Text>
                            <Divider style={{ marginBottom: 5 }} color="green" />
                            <Text>Alistya</Text>
                            <Text>apaan itu</Text>
                            <Divider style={{ marginBottom: 5 }} color="green" />
                        </View>

                    </Card>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailRemas

const styles = StyleSheet.create({
    card: {
        shadowOpacity: 0.5,
        width: 150,
        height: 150,
        shadowOffset: {
            height: 10
        },

        borderRadius: 100
    },
    commentCard: {

        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 10,
        marginHorizontal: 10,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 10
        },
        borderRadius: 20
    },
    cardName: {
        padding: 10,
        borderRadius: 20
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    imageBack: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
})
