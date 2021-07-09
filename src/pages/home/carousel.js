import React from 'react'
import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import Hello from '../../assets/image/hello'
import Share from '../../assets/image/share'
import Profile from '../../assets/image/profile'



const { width } = Dimensions.get("window")
const height = width * 0.5
export default class Carousel extends React.Component {

    render() {
        return (
            <View style={{ width, height, backgroundColor: '#FFFFFF', marginBottom: 10 }}>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={width, height}>
                    <Hello />
                    <Share />
                    <Profile />
                </ScrollView>
            </View>
        )
    }
}