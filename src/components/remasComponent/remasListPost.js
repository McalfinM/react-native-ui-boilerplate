import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'
import { Card } from 'react-native-shadow-cards'
import { loadPostByRemas } from '../../api/posts'
const RemasListPost = () => {

    useEffect(() => {
        fetchDataPost()
    }, [])
    const [post, setPost] = useState([])
    const [postTwo, setPostTwo] = useState([])
    const [allPost, setAllPost] = useState()
    const [loadmore, setLoadmore] = useState(false)
    const navigation = useNavigation();
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)

    const fetchDataPost = async () => {
        const response = await loadPostByRemas(limit, page)
            .then(data => {
                setPost(data.data.data)
                setAllPost(data.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleLoadmore = async () => {
        const response = await loadPostByRemas(limit, page + 1)
            .then(data => {
                setPostTwo(data.data.data)
                setPage(page + 1)
                setPost(post.concat(data.data.data))
            })
            .catch(error => {
                console.log(error)
            })
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
    return (
        <View>
            <View style={styles.componentCard}>

                <View style={styles.containerCard}>
                    {!post ?
                        (<FooterList />) : (post.map((data, i) => (
                            <View style={styles.card} key={i}>
                                <Image
                                    style={styles.imagePost}
                                    resizeMode="cover"
                                    source={{ uri: data ? data.image : 'http://res.cloudinary.com/werich1/image/upload/v1624073825/waugxiymo5l9u3jcesq4.png' }}
                                />
                                <Text style={styles.textCard}>{data.title}</Text>
                            </View>
                        )))}

                </View>

            </View>
            <FooterList />

        </View>


    )

}


export default RemasListPost
const { width } = Dimensions.get("window")
const height = width * 0.5
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    loadmore: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: 'green'
    },
    containerCard: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#FFFFFF'
    },
    container: {
        width: width,
        height: height,
    },
    image: {

        width: '100%',
        height: 170,
        borderRadius: 5,
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '48%',
        borderRadius: 2,
        margin: 3,
        marginBottom: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5.46,

        elevation: 9,
    },
    imagePost: {
        marginBottom: 3,
        width: '100%',
        height: 170,
        borderRadius: 5
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }
})
