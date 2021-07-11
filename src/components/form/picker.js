import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
const PickerForm = ({ data }) => {
    return (
        <View>
            <Picker style={styles.picker}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    )
}

export default PickerForm

const styles = StyleSheet.create({

})
