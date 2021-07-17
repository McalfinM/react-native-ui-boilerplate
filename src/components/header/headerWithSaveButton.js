import React from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Header } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
const HeaderWithSaveButton = ({ placement, text, buttontxt, loading, onPress }) => {
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
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <>
                        {loading ? (<ActivityIndicator
                            animating
                            color="green"
                            size="small"

                        />) : (<TouchableOpacity
                            onPress={onPress}
                        >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Save</Text>
                        </TouchableOpacity>
                            )}
                    </>
                }
            />
        </View>
    )
}

export default HeaderWithSaveButton
const styles = StyleSheet.create({

})
