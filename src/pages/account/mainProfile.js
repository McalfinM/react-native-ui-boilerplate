import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { findMyProfile } from '../../api/profile'
import { useNavigation } from '@react-navigation/native'
const MainProfile = () => {
    const navigation = useNavigation()
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getMyProfile()

        });
        unsubscribe
        getMyProfile()
    }, [])
    const [myProfile, setMyProfiile] = useState({
        idul_adha: null,
        main_information: {
            image: '',
            nickname: '',
            full_name: ''
        },
        ramadhan: null,
        slug: '',
    })
    const getMyProfile = async () => {
        return await findMyProfile().then(data => setMyProfiile(data.data))
    }
    return (
        <View style={{ marginTop: 10 }}>
            <View style={styles.card}>
                <View style={styles.row}>
                    <Image style={styles.image} source={{ uri: myProfile.main_information ? myProfile.main_information.image : 'https://res.cloudinary.com/dcyohew0h/image/upload/v1626325005/posts/roxlkp46kp0sk9oqb3jg.png' }} />
                    <Text style={styles.text}>{myProfile.main_information ? myProfile.main_information.nickname : 'none'}
                        {"\n"}
                        {!myProfile.main_information ? (<Text> not describe </Text>) : myProfile.main_information.full_name}
                    </Text>
                </View>
            </View>

        </View>
    )
}

export default MainProfile

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    text: {
        top: 12
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '100%',
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
    image: {
        borderRadius: 100,
        width: 100,
        height: 100
    }
})
