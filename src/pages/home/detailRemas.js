import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
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
import { getDetailRemas } from '../../api/remas'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LISTROLES } from '../../helpers/roles'
import { remasLike } from '../../api/remasLike'

const DetailRemas = (slug) => {

    useEffect(() => {

        async function checkAuth() {
            await AsyncStorage.getItem('token')
                .then(data => {
                    setAuth(data)
                })

        }
        checkAuth()
        async function checkRoles() {
            await AsyncStorage.getItem('roles')
                .then(data => setRoles(data))
        }
        checkRoles()

        async function checkUuid() {
            await AsyncStorage.getItem('uuid')
                .then(data => {
                    console.log(data, 'uuid')
                    setUuid(data)
                })
        }

        async function fetchRemas() {
            const data = slug.route.params.slug
            return await getDetailRemas(data)
                .then(async (result) => {
                    setDetailRemas(result.data.data)
                    setLikes(result.data.likes)
                    setPostUuid(result.data.data.uuid)
                    setLikeIconData(JSON.stringify(result.data.likes))
                })
        }
        checkUuid()
        fetchRemas()
    }, [])
    const navigation = useNavigation()
    const [auth, setAuth] = useState(null)
    const [roles, setRoles] = useState('')
    const [likes, setLikes] = useState([])
    const [post_uuid, setPostUuid] = useState('')
    const [uuid, setUuid] = useState('')
    const [likeIconData, setLikeIconData] = useState('')
    const [detailRemas, setDetailRemas] = useState({
        idul_adha: {},
        main_information: {
            image: '',
            nickname: '',
            full_name: '',
            visi: '',
            misi: '',
            description: ''
        },
        ramadhan: {},
        slug: '',
    })
    const fetchDetailRemas = async () => {
        const data = slug.route.params.slug
        return await getDetailRemas(data)
            .then(data => {

                setLikes(data.data.likes)
                setLikeIconData(JSON.stringify(data.data.likes))
            })
    }

    const postLike = async () => {
        const data = { post_uuid }
        await remasLike(data).then((data) => {
            fetchDetailRemas()
        })
    }
    return (

        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>

            <HeaderWithBackButton placement="center" text="Detail Remaja Masjid" />

            <ImageBackground style={styles.imageBack} source={{ uri: 'http://pngimg.com/uploads/circle/circle_PNG77.png' }}>

                <Card style={styles.card}>
                    <Image style={styles.image} source={{ uri: detailRemas.main_information.image ? detailRemas.main_information.image : 'https://res.cloudinary.com/dcyohew0h/image/upload/v1626024740/profile/stbaag6j4kfp9sr4cbdg.jpg' }} />
                </Card>

            </ImageBackground>

            <View style={{ marginTop: 10, alignItems: 'center' }}>
                <Card style={styles.cardName}>
                    <Text style={{ alignSelf: 'flex-end', right: 10, fontWeight: "bold" }}>{likes.length} likes</Text>
                    {auth === null ? (
                        <View style={{ position: 'absolute', alignSelf: 'flex-end', right: 35, top: -30 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <FontAwesomeIcon icon={faHeart} color="black" size={30} />
                            </TouchableOpacity>
                        </View>

                    ) : likeIconData ? likeIconData.includes(uuid) === false ? (
                        <View style={{ position: 'absolute', alignSelf: 'flex-end', right: 35, top: -30 }}>

                            <TouchableOpacity onPress={postLike}>
                                <FontAwesomeIcon icon={faHeart} color="black" size={30} />
                            </TouchableOpacity>
                        </View>) : (
                            <View style={{ position: 'absolute', alignSelf: 'flex-end', right: 35, top: -30 }}>
                                <TouchableOpacity onPress={postLike}>
                                    <FontAwesomeIcon icon={faHeart} color="red" size={30} />
                                </TouchableOpacity>
                            </View>
                        ) : (<View style={{ position: 'absolute', alignSelf: 'flex-end', right: 35, top: -30 }}>
                            <TouchableOpacity onPress={postLike}>
                                <FontAwesomeIcon icon={faHeart} color="black" size={30} />
                            </TouchableOpacity>
                        </View>)}
                    <Text style={{ textAlign: 'center', fontWeight: "bold" }}>{detailRemas.main_information.nickname}</Text>
                    {!detailRemas.main_information.full_name ? (<Text style={{ textAlign: 'center', fontWeight: "bold" }}>Full name not describe {"\n"}</Text>
                    ) : (<Text style={{ textAlign: 'center', fontWeight: "bold" }}> {detailRemas.main_information.full_name}{"\n"}</Text>)}

                    <Text style={{ textAlign: 'center', fontWeight: "bold" }}>Visi </Text>
                    {!detailRemas.main_information.visi ? (<Text style={{ textAlign: 'center', fontWeight: "bold" }}>Visi not describe {"\n"}</Text>
                    ) : (<Text style={{ textAlign: 'center' }}> {detailRemas.main_information.visi}{"\n"}</Text>)}
                    <Text style={{ textAlign: 'center', fontWeight: "bold" }}>Misi</Text>
                    {!detailRemas.main_information.misi ? (<Text style={{ textAlign: 'center', fontWeight: "bold" }}>Misi not describe {"\n"}</Text>
                    ) : (<Text style={{ textAlign: 'center' }}> {detailRemas.main_information.misi}{"\n"}</Text>)}
                    <Text style={{ textAlign: 'center', fontWeight: "bold" }}>Deskripsi</Text>
                    {!detailRemas.main_information.description ? (<Text style={{ textAlign: 'center', fontWeight: "bold" }}>Deskripsi not describe {"\n"}</Text>
                    ) : (<Text style={{ textAlign: 'center' }}> {detailRemas.main_information.description}{"\n"}</Text>)}
                    {roles.includes(LISTROLES.REMAS) === false ? (<Button title="Daftar Sebagai Anggota IRMA" onPress={() => navigation.navigate('RegisterMember')} />) : (<Text>

                    </Text>)}

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
