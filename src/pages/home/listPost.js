import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'
import { loadPostByRemas } from '../../api/posts'
const ListPost = () => {


    useEffect(() => {
        getAllPost()
    }, [])

    const [post, setPost] = useState([])
    const getAllPost = async (page, limit) => {
        page = 1
        limit = 5
        return await loadPostByRemas(limit, page).then(data => setPost(data.data.data))
    }
    const navigation = useNavigation();
    return (


        <View style={styles.row}>

            {
                !post ? (<ActivityIndicator animating size="small" color="green" />) :
                    (post.map((data, index) => (
                        <View key={index} style={styles.card}>
                            <TouchableOpacity
                                style={{ padding: 5 }}
                                onPress={() => navigation.navigate('DetailPost', { slug: data.slug })}>
                                <Image style={styles.image} source={{ uri: data ? data.image : 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />
                                <Text style={styles.text}>{data.title}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ height: 20, width: 20, borderRadius: 100 }} source={{ uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />
                                    <Text style={styles.text}>{data.created_by ? data.created_by.name : 'none'}</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                    )))
            }

        </View>

    )
}

export default ListPost

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    text: {

    },
    image: {
        marginBottom: 3,
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
})
