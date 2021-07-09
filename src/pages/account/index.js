import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { HeaderBar } from '../../components/header'
import MainProfile from './mainProfile'
import ListItemAuth from './listItem'

const Profile = () => {
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View>
                <HeaderBar
                    text="Profile"
                    placement="center"
                />
                <MainProfile />
                <ListItemAuth />
            </View>
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
