import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const InsideModal = (props) => {
    const closeModal = async (bool, data) => {
        props.changeModalVisible(bool)
        props.setData(data)
    }
    return (
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >

            <View style={styles.modal}>
                <View style={styles.text}>
                    <Text >Anda ingin menghapus postingan ini ?</Text>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => closeModal(false, 'ya')}>
                            <Text style={{ textAlign: 'center', marginRight: 29, backgroundColor: 'red', color: 'white', padding: 5, width: 40 }}>Ya</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => closeModal(false, 'cancel')}>
                            <Text style={{ backgroundColor: 'green', color: 'white', padding: 5 }}>Tidak</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default InsideModal
const width = Dimensions.get("window").width
const height = 150
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        margin: 10
    },
    text: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        marginVertical: 40
    },
    modal: {
        height: height,
        paddingTop: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        width: width - 80
    }
})
