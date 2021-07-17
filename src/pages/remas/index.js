import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ActivityIndicator, RefreshControl, ToastAndroid } from 'react-native'
import { SearchBar } from '../../components/searchbar'
import { useNavigation } from '@react-navigation/native'
import { getAllRemas } from '../../api/remas'

const Remas = () => {

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
        return await getAllRemas(limit, page, search)
            .then(data => {
                setPosts(data.data.data)
                setAllPost(data.data.data)
            })
    }
    const handleSearch = async () => {
        return await getAllRemas(limit, page, search)
            .then(data => {
                setPosts(data.data.data)
                setAllPost(data.data.data)
            })
    }

    const handleLoadmore = async () => {
        return await getAllRemas(limit, page + 1, search)
            .then(data => {
                if (data.data.datalength > 0) {
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
        await getAllRemas(limit, page, search)

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
                <View style={styles.containerFluid}>
                    {!posts ? (<ActivityIndicator animating size="small" color="green" />) :

                        posts.map((data, index) => (
                            <View key={index} style={styles.card}>
                                <TouchableOpacity onPress={() => navigation.navigate('DetailRemas', { slug: data.slug })}>
                                    <Image style={styles.image} source={{ uri: data.main_information.image ? data.main_information.image : '../../assets/image/Remas.png' }} />
                                    <Text style={{ textAlign: 'center' }}>{data.main_information ? data.main_information.nickname : 'none'}</Text>
                                </TouchableOpacity>

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

export default Remas
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
