import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'

const ModalComponent = ({ visible, animation, nRequestClose }) => {
    return (
        <View>
            <Modal
                transparent={true}
                visible={visible}
                animationType={animation}
            />
        </View>
    )
}

export default ModalComponent

const styles = StyleSheet.create({})
