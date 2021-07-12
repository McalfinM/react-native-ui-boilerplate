import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const LoadingIndicator = ({ color, size }) => {
    return (
        <View>
            <ActivityIndicator
                color={color}
                animating
                size={size}
            />
        </View>
    )
}

export default LoadingIndicator

const styles = StyleSheet.create({
    input: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        fontWeight: 'bold',
        borderColor: 'green',
        borderRadius: 5,
    },


})
