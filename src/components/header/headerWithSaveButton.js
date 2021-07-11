import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Header } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
const HeaderWithSaveButton = ({ placement, text, buttontxt }) => {
    return (
        <View>
            <Header
                backgroundColor="#FFFFFF"
                centerComponent={
                    <Text>{text}</Text>
                }
                placement={placement}
                leftComponent={
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity>
                        <Text style={{ marginRight: 5, fontWeight: 'bold' }}>{buttontxt}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

export default HeaderWithSaveButton
const styles = StyleSheet.create({

})
