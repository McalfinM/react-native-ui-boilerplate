import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ToastAndroid } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const ButtonPrimary = ({ title, onPress }) => {
    return (
        <View>
            <Button style={styles.input} title={title} onPress={onPress} />
        </View>
    )
}

export default ButtonPrimary

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
