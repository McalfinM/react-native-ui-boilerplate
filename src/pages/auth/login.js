import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, NativeModules } from 'react-native'
import { ButtonPrimary, InputForm } from '../../components/form'
import { useNavigation } from '@react-navigation/native'
import { loginProcess } from '../../api/auth'

const Login = ({ navigate }) => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('user@mail.com')
    const [password, setPassword] = useState('password')
    const [formData, setFormData] = useState({})


    const handleSubmit = async () => {
        const data = { email, password }
        if (!email || !password) {
            alert('invalid email or password')
        }
        await loginProcess(data)
            .then(response => {
                AsyncStorage.setItem('token', response.data.token)
                alert('sudah login')
                navigation.navigate('AuthApp', { screen: 'Profile' })
            })
            .catch((error) => {
                if (error) {
                    alert('invalid email or password')
                } else {
                    alert(error)
                }

            })
    }
    return (
        <View style={styles.container} >

            <Image style={styles.image} source={require('../../assets/image/Remas.png')} />
            <View style={styles.containerFluid}>
                <InputForm autoCapitalize="none" value={email} placeholder='Username' onChangeText={(e) => setEmail(e)} />
                <InputForm value={password} secure={true} placeholder='Password' onChangeText={(e) => setPassword(e)} />
                <ButtonPrimary title="Login" onPress={handleSubmit} />
            </View>
        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    image: {
        width: '100%',
        maxHeight: 300,

    },
    container: {
        backgroundColor: '#FFFFFF'
    },
    containerFluid: {
        margin: 50
    }
})
