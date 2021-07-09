import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements'

const HeaderBar = ({ placement, text }) => {
    return (
        <View>
            <Header
                backgroundColor="#FFFFFF"
                centerComponent={
                    <Text>{text}</Text>
                }
                placement={placement}
            />
        </View>
    )
}

export default HeaderBar
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({

})
