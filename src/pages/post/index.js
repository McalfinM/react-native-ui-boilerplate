import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ActivityIndicator, RefreshControl, ToastAndroid } from 'react-native'
import { getAllPost } from '../../api/posts'
import { SearchBar } from '../../components/searchbar'
import PopularPost from './popularPost'
import { useNavigation } from '@react-navigation/native'

const Post = () => {

    useEffect(() => {
        fetchAllPost()
        onRefresh()
        if (search === '') {
            fetchAllPost()
        }
    }, [])

    const navigation = useNavigation()
    const [posts, setPosts] = useState([])
    const [postTwo, setPostTwo] = useState([])
    const [allPost, setAllPost] = useState()
    const [loadmore, setLoadmore] = useState(false)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)
    const [search, setSearch] = useState('')
    const [refresh, setRefresh] = useState(false)
    const fetchAllPost = async () => {
        return await getAllPost(limit, page, search)
            .then(data => {
                setPosts(data.data.data)
                setAllPost(data.data.data)
            })
    }

    const handleSearch = async () => {
        return await getAllPost(limit, page, search)
            .then(data => {
                setPosts(data.data.data)
                setAllPost(data.data.data)
            })
    }

    const handleLoadmore = async () => {
        return await getAllPost(limit, page + 1, search)
            .then(data => {
                if (data.data.data.length > 0) {
                    setPostTwo(data.data.data)
                    setPage(page + 1)
                    setPosts(posts.concat(data.data.data))
                    setAllPost(posts)
                } else {
                    ToastAndroid.show('Data sudah terload semua', ToastAndroid.SHORT)
                }

            })
            .catch(error => {
                console.log(error)
            })
    }
    const onRefresh = async () => {
        setRefresh(true)
        setPage(1)
        setLimit(5)
        await getAllPost(limit, page, search)

            .then(data => {
                setPosts(data.data.data)
                setAllPost(data.data.data)

            })
        setRefresh(false)
    }

    const FooterList = () => (
        <TouchableOpacity
            onPress={handleLoadmore}
            activeOpacity={0.9}
            style={styles.loadmore}>
            <Text style={{ color: "white" }}>Loadmore</Text>

            <View style={styles.footer}>
                {loadmore ? (
                    <ActivityIndicator color="green" size="large" animating />
                ) : null}
            </View>
        </TouchableOpacity>
    )

    const showPost = () => {
        return (
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refresh}
                    onRefresh={onRefresh}
                />
            }>
                <View style={styles.header}>
                    <SearchBar onPress={handleSearch} value={search} onChangeText={(e) => setSearch(e)} />
                </View>
                <PopularPost />
                <View style={styles.containerFluid}>
                    {!posts ? (<ActivityIndicator animating size="small" color="green" />) :

                        posts.map((data, index) => (
                            <View key={index} style={styles.card}>
                                <TouchableOpacity onPress={() => navigation.navigate('DetailPost', { slug: data.slug })}>
                                    <Image style={styles.image} source={{ uri: data.image ? data.image : '../../assets/image/Remas.png' }} />
                                    <Text numberOfLines={1} style={{ width: 170 }} >{data.title ? data.title : ''}</Text>


                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ height: 30, width: 30, borderRadius: 100 }} source={{ uri: data.created_by.image ? data.created_by.image : 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />
                                    <Text style={styles.text}>{data.created_by ? data.created_by.name : 'none'}</Text>

                                </View>
                            </View>
                        ))

                    }


                </View>
                <FooterList />
            </ScrollView >
        )
    }
    return (
        <View style={styles.container}>
            {showPost()}
        </View>
    )
}

export default Post
const { width } = Dimensions.get("window")
const height = width * 0.5
const styles = StyleSheet.create({
    image: {
        marginBottom: 3,
        width: '100%',
        height: 200,
        borderRadius: 5,
    },
    container: {
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },
    loadmore: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: 'green'
    },
    containerFluid: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '48%',
        borderRadius: 2,
        margin: 3,
        marginBottom: 15,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5.46,

        elevation: 9,
    },
    header: {
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderRadius: 20,
        margin: 10,
        width: width,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5.46,

        elevation: 9,
    },
})
