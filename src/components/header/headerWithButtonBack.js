import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Header } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'

const HeaderWithButtonBack = ({ placement, text }) => {
    const navigation = useNavigation()
    return (
        <View>
            <Header
                backgroundColor="#FFFFFF"
                centerComponent={
                    <Text>{text}</Text>
                }
                placement={placement}
                leftComponent={
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

export default HeaderWithButtonBack
const styles = StyleSheet.create({

})
