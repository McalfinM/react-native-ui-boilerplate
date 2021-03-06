import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useEffect, useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import Carousel from './carousel'
import Category from './category'
import ListEvent from './event'
import ListPost from './listPost'
import ListRemas from './listRemas'
import { useNavigation } from '@react-navigation/native'
import { logout } from '../../helpers/asyncstorage'
import CodePush from 'react-native-code-push';
const Home = () => {
    const [auth, setAuth] = useState('')
    const token = auth
    useEffect(() => {

        async function checkAuth() {
            await AsyncStorage.getItem('token')
                .then(data => setAuth(data))

        }
        checkAuth()
    }, [])

    if (token) {
        console.log('hao')
    } else {
        console.log('masuk')
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerFluid}>
                <Carousel />
                <Category />
                <ListPost />
                <ListRemas />
                <ListEvent />

            </View>
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
