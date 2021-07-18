import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import Hello from '../../assets/image/hello'
import Share from '../../assets/image/share'
import Profile from '../../assets/image/profile'
import { useNavigation } from '@react-navigation/native'
import { getAllRemas } from '../../api/remas'



const ListRemas = ({ refresh }) => {

    const { width } = Dimensions.get("window")
    const height = width * 0.6
    const navigation = useNavigation()
    console.log(refresh, 'ini refresh')
    useEffect(() => {
        // const unsubscribe = navigation.addListener('focus', () => {
        //     fetchAllRemas()
        // });
        // unsubscribe
        fetchAllRemas()
    }, [])
    const [listRemas, setRemas] = useState([])
    const [query, setQuery] = useState({
        page: 1,
        limit: 5,
        search: ''
    })

    const fetchAllRemas = async () => {
        const { page, limit, search } = query
        return await getAllRemas(limit, page, search).then(
            data => setRemas(data.data.data)
        )
    }
    return (
        <View style={{ width, height, backgroundColor: '#FFFFFF', margin: 10, borderRadius: 20 }}>
            <Text>List Remaja Masjid</Text>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={width, height}>
                {!listRemas ? (<ActivityIndicator color="green" size="large" animating />)
                    : (listRemas.map((data, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate('DetailRemas', { slug: data.slug })}>
                            <View style={styles.card}>
                                <Image style={styles.image} source={{ uri: data.main_information ? data.main_information.image : 'https://i.imgur.com/ZYwMett.jpeg' }} />
                            </View>
                        </TouchableOpacity>
                    ))
                    )}

            </ScrollView>
        </View>
    )

}

export default ListRemas

const { width } = Dimensions.get("window")
const height = width * 0.5
const styles = StyleSheet.create({

    image: {
        marginBottom: 3,
        width: '100%',
        height: '90%',
        borderRadius: 5,
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderRadius: 10,
        margin: 10,
        height: width / 2,
        width: width * 0.7,
        justifyContent: 'center',
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