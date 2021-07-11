import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
const PickerForm = ({ data, selectedValue, onValueChange }) => {
    return (
        <View>
            <Picker mode="dialog" selectedValue={selectedValue} onValueChange={onValueChange} style={styles.picker}>
                <Picker.Item label="Kategori" value="" />
                {!data ? (<Picker.Item label="No data" value="" />)
                    : (data.map(result => (
                        <Picker.Item key={result.uuid} label={result.name} value={result.uuid} />
                    )))}

            </Picker>
        </View>
    )
}

export default PickerForm

const styles = StyleSheet.create({

})
