import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ToastAndroid } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const SearchBar = ({ value, onChangeText, onPress }) => {
    return (
        <View style={{ position: 'relative' }}>
            <TextInput style={styles.card} placeholder="What do you want ?" value={value} onChangeText={onChangeText} />
            <TouchableOpacity onPress={onPress} style={styles.icon}>
                <FontAwesomeIcon size={20} icon={faSearch} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 25,
        height: 40,
        fontSize: 12,
        paddingLeft: 45,
        paddingRight: 20,
        marginRight: 50,
        flex: 1
    },
    icon: {
        position: 'absolute',
        top: 12,
        right: 20
    },
    button: {
        width: 100
    },

})
