import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Button, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import Carousel from './carousel'
import Category from './category'
import ListEvent from './event'
import ListPost from './listPost'
import ListRemas from './listRemas'
import { useNavigation } from '@react-navigation/native'
import { logout } from '../../helpers/asyncstorage'
import CodePush from 'react-native-code-push';
import { LISTROLES } from '../../helpers/roles'
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons'
import { findMyProfile } from '../../api/profile'
import Introducing from './introducing'
const Home = () => {
    const navigation = useNavigation()
    const [auth, setAuth] = useState('')
    const token = auth
    const [roles, setRoles] = useState('')
    const [refresh, setRefresh] = useState(false)
    const [callpost, setCallPost] = useState(false)
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            showIndex()
        });
        unsubscribe
        async function checkAuth() {
            await AsyncStorage.getItem('token')
                .then(data => {
                    if (data === null) {
                        navigation.navigate('MainApp')
                    } else {
                        setAuth(data)
                        navigation.navigate('AuthApp')
                    }
                })


        }
        async function checkToken() {
            await findMyProfile().then(data => console.log(data))
                .catch(err => {
                    if (err.response.data.statusCode === 500) {
                        logout(() => {
                            navigation.navigate('MainApp')
                        })
                    }
                }

                )


        }
        checkToken()
        checkAuth()
    }, [showIndex])

    const onRefresh = async () => {
        setRefresh(true)
        setCallPost(true)
        showIndex()
        setRefresh(false)

    }
    const showIndex = () => {
        return (
            <View style={styles.containerFluid}>
                <Carousel />
                <Category />
                <ListPost />
                <ListRemas />
                <ListEvent />

            </View>
        )
    }
    return (
        <ScrollView style={styles.container} refreshControl={
            <RefreshControl
                refreshing={refresh}
                onRefresh={onRefresh}
            />
        }>

            {showIndex ? showIndex() : <ActivityIndicator animating size="small" color="green" />}
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF'
    },
    containerFluid: {
        justifyContent: 'center'
    }
})
