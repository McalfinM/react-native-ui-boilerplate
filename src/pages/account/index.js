import React, { useEffect, useState } from 'react'
import { Alert, BackHandler, ScrollView, StyleSheet, Text, View } from 'react-native'
import { HeaderBar } from '../../components/header'
import MainProfile from './mainProfile'
import ListItemAuth from './listItem'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const navigation = useNavigation()
    const [refresh, setRefresh] = useState(false)
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setRefresh(true)
            console.log(refresh, 'in index')
            setRefresh(false)
            console.log(refresh, 'in index')
        });

        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to exit?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        unsubscribe
        return () => backHandler.remove();

    }, []);



    const showIndex = () => {
        return (
            <View>
                <HeaderBar
                    text="Profile"
                    placement="center"
                />
                <MainProfile refresh={refresh} />
                <ListItemAuth />
            </View>
        )
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            {showIndex()}
        </ScrollView>
    )
}


export default Profile

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        width: '90%',
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
