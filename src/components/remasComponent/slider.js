import React from 'react'
import { View, Text, Image, ScrollView, Dimensions, StyleSheet } from 'react-native'
import Hello from '../../assets/image/hello'
import Share from '../../assets/image/share'
import Profile from '../../assets/image/profile'
import RemasListPost from './remasListPost'
import RemasChart from './remasChart'



const { width } = Dimensions.get("window")
const height = width * 0.5
const SliderRemas = () => {
    return (

        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={width, height}>
            <RemasListPost />
            <RemasChart />
        </ScrollView>

    )

}

export default SliderRemas

const styles = StyleSheet.create({

})
