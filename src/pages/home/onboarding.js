import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import AddFriend from '../../assets/image/addFriend'
import ConnectedPeople from '../../assets/image/connectedPeople'
import OnlinePost from '../../assets/image/onlinepost'
import { useNavigation } from '@react-navigation/native'
const OnboardingScreen = () => {
    const navigation = useNavigation()
    return (
        <Onboarding
            onSkip={() => navigation.navigate('MainApp', { screen: 'Home' })}
            onDone={() => navigation.navigate('MainApp', { screen: 'Home' })}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <AddFriend />,
                    title: 'Come Join With Us..!!',
                    subtitle: 'Untuk Remaja Masjid yang lebih baik',
                },
                {
                    backgroundColor: '#5bf07e',
                    image: <ConnectedPeople />,
                    title: 'Connect With All Around The World Teenegers Mosque',
                    subtitle: 'Ayo bersama kita bersatu untuk membesarkan remaja masjid',
                },
                {
                    backgroundColor: '#0ec739',
                    image: <OnlinePost />,
                    title: 'Online Share',
                    subtitle: 'Sharing aktivitas kalian dan posting ilmu yang ada',
                },
            ]}
        />
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({})
