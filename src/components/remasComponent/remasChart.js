import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faNewspaper, faSearch } from '@fortawesome/free-solid-svg-icons'

const screenWidth = Dimensions.get("window").width;
const height = screenWidth * 1
import {
    LineChart,
} from "react-native-chart-kit";
const RemasChart = () => {
    const data = {
        labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [
            {
                data: [
                    Math.random() * 1000,
                    Math.random() * 1000,
                    Math.random() * 1000,
                    Math.random() * 1000,
                    Math.random() * 1000,
                    1],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Data Zakat / tahun (satuan ribu)"] // optional
    };
    const chartConfig = {
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFFFF",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: true // optional
    };
    return (
        <View style={styles.componentCard}>

            <View style={styles.containerCard}>
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={height}
                    chartConfig={chartConfig}
                    yAxisLabel={"Rp"}
                />
            </View>
        </View>
    )
}

export default RemasChart

const styles = StyleSheet.create({})
