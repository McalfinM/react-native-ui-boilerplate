import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { SearchBar } from '../../components/searchbar'

const Remas = () => {

    const showPost = () => {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <SearchBar />
                </View>
                <View style={styles.containerFluid}>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../assets/image/Remas.png')} />
                        <Text style={styles.text}>Keren</Text>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../assets/image/Remas.png')} />
                        <Text style={styles.text}>Keren</Text>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../assets/image/Remas.png')} />
                        <Text style={styles.text}>Keren</Text>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.image} source={require('../../assets/image/Remas.png')} />
                        <Text style={styles.text}>Keren</Text>
                    </View>

                    <TouchableOpacity>
                        <Text>Loadmore...</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
    return (
        <View style={styles.container}>
            {showPost()}
        </View>
    )
}

export default Remas
const { width } = Dimensions.get("window")
const height = width * 0.5
const styles = StyleSheet.create({
    image: {
        marginBottom: 3,
        width: '100%',
        height: 200,
        borderRadius: 5,
    },
    container: {
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },
    containerFluid: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '48%',
        borderRadius: 2,
        margin: 3,
        marginBottom: 15,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5.46,

        elevation: 9,
    },
    header: {
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderRadius: 20,
        margin: 10,
        width: width,
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
