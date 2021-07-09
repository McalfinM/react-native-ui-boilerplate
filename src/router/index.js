import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/BottomNavigator';
import PostNavigation from '../components/BottomNavigator/post';
import { Splash, Home, Post, Remas, Profile } from '../pages';
import Login from '../pages/auth/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailPost from '../pages/home/detailPost';
import DetailRemas from '../pages/home/detailRemas';


const Stack = createStackNavigator();
const AuthStack = createStackNavigator()
const Tab = createBottomTabNavigator();

const MainApp = () => {

    return (
        <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Posts" component={Post} />
            <Tab.Screen name="Remas" component={Remas} />
            <Tab.Screen name="Login" component={Login} options={{ gestureEnabled: false }} />
        </Tab.Navigator >
    )
}

function AuthApp() {

    return (
        <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Posts" component={Post} />
            <Tab.Screen name="Remas" component={Remas} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator >
    )
}
const Router = () => {

    const [auth, setAuth] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        async function checkAuth() {
            await AsyncStorage.getItem('token')
                .then(data => {
                    setAuth(data)
                })
        }
        checkAuth()
    }, [])
    console.log(auth, 'ini auth')

    return (
        <Stack.Navigator>
            {
                loading ? (<Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />) :
                    auth === null ? (
                        <>

                            <Stack.Screen name='MainApp' component={MainApp} options={{ headerShown: false }} />
                            <Stack.Screen name='DetailPost' component={DetailPost} options={{ headerShown: false }} />
                            <Stack.Screen name='DetailRemas' component={DetailRemas} options={{ headerShown: false }} />
                            <Stack.Screen name='AuthApp' component={AuthApp} options={{ headerShown: false, gestureEnabled: false }} />
                        </>

                    ) : (
                            <>
                                <Stack.Screen name='AuthApp' component={AuthApp} options={{ headerShown: false, gestureEnabled: false }} />
                                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                                <Stack.Screen name='DetailPost' component={DetailPost} options={{ headerShown: false }} />
                                <Stack.Screen name='DetailRemas' component={DetailRemas} options={{ headerShown: false }} />
                                <Stack.Screen name='MainApp' component={MainApp} options={{ headerShown: false }} />
                            </>
                        )}

        </Stack.Navigator>
    );
}

export default Router

const styles = StyleSheet.create({})
