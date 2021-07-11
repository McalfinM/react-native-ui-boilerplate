import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ToastAndroid } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const TextInputDescription = ({ value, placeholder, onChangeText, autoCapitalize }) => {
    return (
        <View>
            <TextInput autoCapitalize={autoCapitalize} style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText}
                multiline={true}
                numberOfLines={12}
                errorStyle={{ color: 'red' }}
                textAlignVertical="top"

            />
        </View>
    )
}

export default TextInputDescription

const styles = StyleSheet.create({
    input: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        fontWeight: 'bold',
        borderColor: 'green',
        borderRadius: 5,
        height: 100
    },


})
