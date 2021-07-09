import React from 'react'
import { View, Text, Image, ScrollView, Dimensions, StyleSheet } from 'react-native'
import Hello from '../../assets/image/hello'
import Share from '../../assets/image/share'
import Profile from '../../assets/image/profile'



const { width } = Dimensions.get("window")
const height = width * 0.5
export default class PopularPost extends React.Component {

    render() {
        const styles = StyleSheet.create({

            image: {
                marginBottom: 3,
                width: '100%',
                height: '100%',
                borderRadius: 5,
            },
            card: {
                backgroundColor: '#FFFFFF',
                padding: 5,
                borderRadius: 20,
                margin: 10,
                width: width * 0.8,
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

        return (
            <View style={{ width, height, backgroundColor: '#FFFFFF', margin: 10, borderRadius: 20 }}>
                <Text>Most Viewers</Text>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={width, height}>
                    <View style={styles.card}>
                        <Image style={styles.image} source={{ uri: 'https://i.imgur.com/ZYwMett.jpeg' }} />
                        <Text style={styles.text}>Keren</Text>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.image} source={{ uri: 'https://i.imgur.com/ZYwMett.jpeg' }} />
                        <Text style={styles.text}>Keren</Text>
                    </View>
                </ScrollView>
            </View>
        )


    }
}