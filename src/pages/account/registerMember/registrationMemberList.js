import React, { useState } from 'react'
import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'
import { HeaderWithBackButton } from '../../../components/header'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faInfo, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import InsideModal from '../../../components/form/insideModal'

const RegistrationMemberList = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [choose, setChoose] = useState()
    const { width } = Dimensions.get("window")
    const modalHandle = (bool) => (
        setVisible(bool)
    )

    return (
        <ScrollView>
            <HeaderWithBackButton placement="center" text="List Registration Member" />
            <View style={styles.row}>

                <View style={styles.card}>


                    <Modal
                        transparent={true}
                        visible={visible}
                        animationType="fade"
                        onRequestClose={() => modalHandle(false)}
                    >
                        <InsideModal
                            changeModalVisible={modalHandle}
                            setData={setChoose}
                        />
                    </Modal>
                    <TouchableOpacity
                        style={{ padding: 5 }}
                        onPress={() => navigation.navigate('DetailMember', { uuid: 'uuid' })}>
                        <Image style={styles.image} source={{ uri: 'https://www.w3schools.com/howto/img_avatar2.png' }} />
                        <Text style={styles.text}>Rania</Text>

                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 5 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditPost', { uuid: 'uuid' })}>
                            <FontAwesomeIcon size={20} style={{ marginRight: 5 }} icon={faInfo} color="blue" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => modalHandle(true)}>
                            <FontAwesomeIcon size={20} icon={faTrash} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.card}>
                    <TouchableOpacity
                        style={{ padding: 5 }}
                        onPress={() => navigation.navigate('DetailMember', { uuid: 'uuid' })}>
                        <Image style={styles.image} source={{ uri: 'https://www.w3schools.com/howto/img_avatar2.png' }} />
                        <Text style={styles.text}>Rania</Text>

                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 5 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditPost', { uuid: 'uuid' })}>
                            <FontAwesomeIcon size={20} style={{ marginRight: 5 }} icon={faInfo} color="blue" />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <FontAwesomeIcon size={20} icon={faTrash} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity
                        style={{ padding: 5 }}
                        onPress={() => navigation.navigate('DetailMember', { uuid: 'uuid' })}>
                        <Image style={styles.image} source={{ uri: 'https://www.w3schools.com/howto/img_avatar2.png' }} />
                        <Text style={styles.text}>Rania</Text>

                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 5 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditPost', { uuid: 'uuid' })}>
                            <FontAwesomeIcon size={20} style={{ marginRight: 5 }} icon={faInfo} color="blue" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesomeIcon size={20} icon={faTrash} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity
                        style={{ padding: 5 }}
                        onPress={() => navigation.navigate('DetailMember', { uuid: 'uuid' })}>
                        <Image style={styles.image} source={{ uri: 'https://www.w3schools.com/howto/img_avatar2.png' }} />
                        <Text style={styles.text}>Rania</Text>

                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 5 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditPost', { uuid: 'uuid' })}>
                            <FontAwesomeIcon size={20} style={{ marginRight: 5 }} icon={faInfo} color="blue" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesomeIcon size={20} icon={faTrash} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity
                        style={{ padding: 5 }}
                        onPress={() => navigation.navigate('DetailMember', { uuid: 'uuid' })}>
                        <Image style={styles.image} source={{ uri: 'https://www.w3schools.com/howto/img_avatar2.png' }} />
                        <Text style={styles.text}>Rania</Text>

                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 5 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditPost', { uuid: 'uuid' })}>
                            <FontAwesomeIcon size={20} style={{ marginRight: 5 }} icon={faInfo} color="blue" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesomeIcon size={20} icon={faTrash} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity
                        style={{ padding: 5 }}
                        onPress={() => navigation.navigate('DetailMember', { uuid: 'uuid' })}>
                        <Image style={styles.image} source={{ uri: 'https://www.w3schools.com/howto/img_avatar2.png' }} />
                        <Text style={styles.text}>Rania</Text>

                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 5 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditPost', { uuid: 'uuid' })}>
                            <FontAwesomeIcon size={20} style={{ marginRight: 5 }} icon={faInfo} color="blue" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesomeIcon size={20} icon={faTrash} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </ScrollView>
    )
}

export default RegistrationMemberList
const { width } = Dimensions.get("window")
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    text: {

    },
    image: {
        marginBottom: 3,
        width: '100%',
        height: 170,
        borderRadius: 5,
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: width / 2.1,
        borderRadius: 2,
        margin: 2,
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
})
