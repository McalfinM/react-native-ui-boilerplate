import React from 'react'
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'




const ListEvent = () => {

    const navigation = useNavigation()
    return (
        <View style={{ width, height, backgroundColor: '#FFFFFF', margin: 10, borderRadius: 20 }}>
            <Text>Event</Text>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={width, height}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetailEvent', { slug: 'detail' })}>

                    <View style={styles.card}>
                        <Image style={styles.image} source={{ uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />
                        <Text>Kajian oleh ustadz very</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.card}>
                    <Image style={styles.image} source={{ uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />


                </View>
            </ScrollView>
        </View>
    )
}
export default ListEvent

const { width } = Dimensions.get("window")
const height = width * 0.6
const styles = StyleSheet.create({

    image: {
        marginBottom: 3,
        width: '100%',
        height: '90%',
        borderRadius: 5,
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderRadius: 10,
        margin: 10,
        height: width / 2,
        width: width * 0.7,
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
