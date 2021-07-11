import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HeaderWithBackButton } from '../../components/header'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-native-shadow-cards'
import { ButtonPrimary, InputForm } from '../../components/form'
import { Divider } from 'react-native-elements/dist/divider/Divider'
const DetailEvent = (slug) => {
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View>
                <View style={{ alignItems: 'center', flexWrap: 'wrap' }}>
                    <HeaderWithBackButton placement="center" text="Detail Post" />
                    <Image style={styles.image} source={{ uri: 'https://i.imgur.com/ZYwMett.jpeg' }} />

                </View>
                <View>
                    <View style={styles.favorite}>
                        <TouchableOpacity >
                            <FontAwesomeIcon icon={faHeart} color="red" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.calendar}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon icon={faCalendarAlt} color="white" size={30} />
                            <Text style={{ marginLeft: 2, top: 1, color: 'white' }}>Tanggal event{"\n"}12/02/2022</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Card style={styles.card}>
                            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Lorem ipsum Title</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 10 }}>1000 likes</Text>
                            <Text style={styles.text}>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </Text>
                            <Image style={styles.avatar} source={{ uri: 'https://i.imgur.com/ZYwMett.jpeg' }} />
                            <Text style={{ fontWeight: "bold" }}>IRMA</Text>
                            <Text style={{ fontWeight: "bold" }}>Ikatan Remaja Masjid AR-Rahmah</Text>
                        </Card>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
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

export default DetailEvent
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    avatar: {
        marginTop: 20,
        borderRadius: 100,
        height: 100,
        width: 100
    },
    favorite: {
        position: 'absolute',
        top: -100,
        right: 40,
        alignSelf: 'flex-end'
    },
    image: {
        width: '90%',
        height: 400,
        borderRadius: 20
    },
    text: {
        marginHorizontal: 10
    },
    commentCard: {
        top: -30,
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
    calendar: {
        position: 'absolute',
        top: -115,
        left: 40,
        padding: 5,
        alignSelf: 'flex-start',
        width: 150,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    card: {
        top: -70,
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
})
