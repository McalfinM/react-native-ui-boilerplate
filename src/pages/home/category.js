import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMedkit, faMosque, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Category = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{ alignItems: "center" }}>
                    <FontAwesomeIcon color="green" icon={faMedkit} size={30} />
                    <Text style={{ textAlign: 'center', fontSize: 10 }}>Health</Text>
                </View>
            </View >
            <View style={styles.card}>
                <View style={{ alignItems: "center" }}>
                    <FontAwesomeIcon color="green" icon={faMosque} size={30} />
                    <Text style={{ textAlign: 'center', fontSize: 10 }}>Mosque</Text>
                </View>
            </View >
            <View style={styles.card}>
                <View style={{ alignItems: "center" }}>
                    <FontAwesomeIcon color="green" icon={faCalendarAlt} size={30} />
                    <Text style={{ textAlign: 'center', fontSize: 10 }}>Events</Text>
                </View>
            </View >
        </View>

    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',

        backgroundColor: '#FFFFFF',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5.46,

        elevation: 9,
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderRadius: 10,
        margin: 15,
        width: 50,
        height: 50,
        justifyContent: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5.46,

        elevation: 9,
    },
})
