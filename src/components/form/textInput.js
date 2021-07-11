import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ToastAndroid } from 'react-native'
const InputForm = ({ value, placeholder, onChangeText, secure, autoCapitalize }) => {
    return (
        <View>
            <TextInput autoCapitalize={autoCapitalize} style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={secure} />
        </View>
    )
}

export default InputForm

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
