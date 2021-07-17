import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { HeaderWithBackButton } from '../../components/header'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-native-shadow-cards'
import { ButtonPrimary, InputForm } from '../../components/form'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { getDetailPost } from '../../api/posts'
import LoadingIndicator from '../../components/remasComponent/loadingIndicator'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createComment } from '../../api/comment'
import { createLikes } from '../../api/likes'
import { useNavigation } from '@react-navigation/native'

const DetailPost = (slug) => {

    useEffect(() => {
        async function checkAuth() {
            await AsyncStorage.getItem('token')
                .then(data => {
                    setAuth(data)
                })

        }
        async function checkUuid() {
            await AsyncStorage.getItem('uuid')
                .then(data => setUuid(data))
        }

        async function detailPost() {
            const data = slug.route.params.slug
            return await getDetailPost(data)
                .then(async (result) => {
                    setDetailPost(result.data.data)
                    setDataComment(result.data.comment)
                    setPostUuid(result.data.data.uuid)
                    setLikes(result.data.like)
                    setLikeIconData(JSON.stringify(result.data.like))
                })
        }
        checkUuid()
        checkAuth()
        detailPost()

    }, [])

    const navigation = useNavigation()
    const [auth, setAuth] = useState(null)
    const [dataPost, setDetailPost] = useState({})
    const [comment, setComment] = useState('')
    const [uuid, setUuid] = useState('')
    const [dataComment, setDataComment] = useState([])
    const [post_uuid, setPostUuid] = useState('')
    const [likes, setLikes] = useState([])
    const [likeIconData, setLikeIconData] = useState('')
    const handleCreateComment = async () => {
        const data = { comment, post_uuid }
        if (!comment) {
            alert('Mohon isi komentar')
        }
        return await createComment(data)
            .then(result => {
                ToastAndroid.show('Komentar berhasil', ToastAndroid.SHORT)
                setComment('')
                renderPost()
            }).then(error => {
                console.log(error)
            })
    }

    const renderPost = async () => {
        const data = slug.route.params.slug
        return await getDetailPost(data)
            .then(async (result) => {
                setDataComment(result.data.comment)
                setLikes(result.data.like)
                setLikeIconData(JSON.stringify(result.data.like))
            })
    }
    const postLike = async () => {
        const data = { post_uuid }
        await createLikes(data).then((data) => {
            renderPost()
        })
    }
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View>
                <View style={{ alignItems: 'center', flexWrap: 'wrap' }}>
                    <HeaderWithBackButton placement="center" text="Detail Post" />
                    <Image style={styles.image} source={{ uri: dataPost ? dataPost.image : 'https://i.imgur.com/ZYwMett.jpeg' }} />

                </View>
                <View>
                    {auth === null ? (<View style={styles.favorite}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <FontAwesomeIcon icon={faHeart} color="black" size={30} />
                        </TouchableOpacity>
                    </View>
                    ) : likeIconData ? likeIconData.includes(uuid) === false ? (<View style={styles.favorite}>
                        <TouchableOpacity onPress={postLike}>
                            <FontAwesomeIcon icon={faHeart} color="black" size={30} />
                        </TouchableOpacity>
                    </View>) : (
                            <View style={styles.favorite}>
                                <TouchableOpacity onPress={postLike}>
                                    <FontAwesomeIcon icon={faHeart} color="red" size={30} />
                                </TouchableOpacity>
                            </View>
                        ) : (<View style={styles.favorite}>
                            <TouchableOpacity onPress={postLike}>
                                <FontAwesomeIcon icon={faHeart} color="black" size={30} />
                            </TouchableOpacity>
                        </View>)}

                    <View style={{ alignItems: 'center' }}>
                        <Card style={styles.card}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: "bold", fontSize: 15 }}> {dataPost ? dataPost.title : (<LoadingIndicator color="green" size="small" />)}</Text>
                                <Text style={{ fontWeight: "bold", fontSize: 10 }}>{likes.length} likes</Text>
                                <Text style={styles.text}>
                                    {dataPost ? dataPost.content : (<LoadingIndicator color="green" size="small" />)}
                                </Text>

                                <Image style={styles.avatar} source={{ uri: dataPost.created_by ? dataPost.created_by.image : 'https://i.imgur.com/ZYwMett.jpeg' }} />
                                <Text style={{ fontWeight: "bold" }}> {dataPost.created_by ? dataPost.created_by.name : (<LoadingIndicator color="green" size="small" />)}</Text>

                                {/* <Text style={{ fontWeight: "bold" }}>Ikatan Remaja Masjid AR-Rahmah</Text> */}
                            </View>
                        </Card>
                    </View>
                </View>
                {auth === null ? (<Text>Login untuk berkomentar</Text>) :
                    <View>
                        <InputForm value={comment} onChangeText={(e) => setComment(e)} autoCapitalize="none" placeholder="Tulis Komentar" />
                        <TouchableOpacity onPress={handleCreateComment}>
                            <Text style={{ alignSelf: 'flex-end', textAlign: 'center', width: 80, backgroundColor: 'green', color: 'white', padding: 5, right: 10 }}>Comment</Text>
                        </TouchableOpacity>
                    </View>
                }
                <View style={{ alignItems: 'center' }}>

                    <Card style={styles.commentCard}>


                        <View>
                            {dataComment ? (
                                dataComment.map(data => (
                                    <View key={data.uuid}>
                                        <Text>{data.created_by ? data.created_by.name : <LoadingIndicator color="green" size="small" />}</Text>
                                        <Text>{data ? data.comment : <LoadingIndicator color="green" size="small" />}</Text>
                                        <Divider style={{ marginBottom: 5 }} color="green" />
                                    </View>
                                ))

                            )
                                : (
                                    <Text>Tidak ada Komentar</Text>
                                )
                            }
                        </View>



                    </Card>
                </View>

            </View>
        </ScrollView>
    )
}

export default DetailPost
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
    card: {
        top: -70,

        padding: 10,
        marginHorizontal: 10,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 10
        },
        borderRadius: 20
    },
})
