import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'
import { Card } from 'react-native-shadow-cards'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faNewspaper, faSearch } from '@fortawesome/free-solid-svg-icons'
const RemasListPost = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.componentCard}>

            <View style={styles.containerCard}>

                <View style={styles.card}>
                    <Image
                        style={styles.imagePost}
                        resizeMode="cover"
                        source={{ uri: 'http://res.cloudinary.com/werich1/image/upload/v1624073825/waugxiymo5l9u3jcesq4.png' }}
                    />
                    <Text style={styles.textCard}>Text</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.imagePost}
                        resizeMode="cover"
                        source={{ uri: 'http://res.cloudinary.com/werich1/image/upload/v1624073825/waugxiymo5l9u3jcesq4.png' }}
                    />
                    <Text style={styles.textCard}>Text</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.imagePost}
                        resizeMode="cover"
                        source={{ uri: 'http://res.cloudinary.com/werich1/image/upload/v1624073825/waugxiymo5l9u3jcesq4.png' }}
                    />
                    <Text style={styles.textCard}>Text</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.imagePost}
                        resizeMode="cover"
                        source={{ uri: 'http://res.cloudinary.com/werich1/image/upload/v1624073825/waugxiymo5l9u3jcesq4.png' }}
                    />
                    <Text style={styles.textCard}>Text</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.imagePost}
                        resizeMode="cover"
                        source={{ uri: 'http://res.cloudinary.com/werich1/image/upload/v1624073825/waugxiymo5l9u3jcesq4.png' }}
                    />
                    <Text style={styles.textCard}>Text</Text>
                </View>
            </View>

        </View>

    )
}

export default RemasListPost
const { width } = Dimensions.get("window")
const height = width * 0.5
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    componentCard: {
        backgroundColor: '#FFFFFF',
        width: width,
        borderRadius: 2,
        margin: 3,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5.46,

        elevation: 9,
    },
    containerCard: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#FFFFFF'
    },
    container: {
        width: width,
        height: height,
    },
    image: {

        width: '100%',
        height: 170,
        borderRadius: 5,
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '48%',
        borderRadius: 2,
        margin: 3,
        marginBottom: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5.46,

        elevation: 9,
    },
    imagePost: {
        marginBottom: 3,
        width: '100%',
        height: 170,
        borderRadius: 5
    }
})
