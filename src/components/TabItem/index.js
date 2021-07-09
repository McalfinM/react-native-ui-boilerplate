import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import account from '../../assets/icons/user.svg'
import accountActive from '../../assets/icons/userActive.svg'
import mosque from '../../assets/icons/masjid.svg'
import mosqueActive from '../../assets/icons/masjidActive.svg'
import HomeActive from '../../assets/icons/homeActive'
import HomeDeactive from '../../assets/icons/homeDeactive'
import Post from '../../assets/icons/post'
import PostActive from '../../assets/icons/postActive'
import Account from '../../assets/icons/account'
import AccountActive from '../../assets/icons/accountActive'
import Mosque from '../../assets/icons/masjid'
import MosqueActive from '../../assets/icons/mosqueActive'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if (label === "Home") return isFocused ? <HomeActive /> : <HomeDeactive />
        if (label === "Posts") return isFocused ? <PostActive /> : <Post />
        if (label === "Login") return isFocused ? <AccountActive /> : <Account />
        if (label === "Profile") return isFocused ? <AccountActive /> : <Account />
        if (label === "Remas") return isFocused ? <MosqueActive /> : <Mosque />
        return <HomeDeactive />
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon />
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 10,
        color: isFocused ? '#153e25' : '#000000',
        marginTop: 5
    })
})
