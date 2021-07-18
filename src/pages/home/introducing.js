import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddFriend from '../../assets/image/addFriend'

const Introducing = () => {
    return (
        <View style={styles.row}>
            <View style={styles.card}>
                <Text style={{ alignSelf: 'center', top: 30 }}>Come Join With Us... !!{"\n"}

                </Text>
            </View>
            <View style={styles.card}>
                <AddFriend />
            </View>

        </View>
    )
}

export default Introducing

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    card: {
        width: '48%',
        height: 200
    }
})
