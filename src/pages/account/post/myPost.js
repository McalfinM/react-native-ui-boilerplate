import React, { useState } from 'react'
import { Button, Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'
import { HeaderWithBackButton } from '../../../components/header'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import ModalComponent from '../../../components/form/modal'
import InsideModal from '../../../components/form/insideModal'

const MyPost = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [choose, setChoose] = useState()
    const { width } = Dimensions.get("window")
    const modalHandle = (bool) => (
        setVisible(bool)
    )

    return (
        <ScrollView>
            <HeaderWithBackButton placement="center" text="My Post" />
            <Button title="Create Post" onPress={() => navigation.navigate('CreatePost')} />
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
                        onPress={() => navigation.navigate('DetailPost', { slug: 'detail' })}>
                        <Image style={styles.image} source={{ uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />
                        <Text style={styles.text}>Keren</Text>

                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 5 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditPost', { uuid: 'uuid' })}>
                            <FontAwesomeIcon size={20} style={{ marginRight: 5 }} icon={faEdit} color="blue" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => modalHandle(true)}>
                            <FontAwesomeIcon size={20} icon={faTrash} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.card}>
                    <TouchableOpacity
                        style={{ padding: 5 }}
                        onPress={() => navigation.navigate('DetailPost', { slug: 'detail' })}>
                        <Image style={styles.image} source={{ uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />
                        <Text style={styles.text}>Keren</Text>

                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 5 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditPost', { uuid: 'uuid' })}>
                            <FontAwesomeIcon size={20} style={{ marginRight: 5 }} icon={faEdit} color="blue" />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <FontAwesomeIcon size={20} icon={faTrash} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity
                        style={{ padding: 5 }}
                        onPress={() => navigation.navigate('DetailPost', { slug: 'detail' })}>
                        <Image style={styles.image} source={{ uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />
                        <Text style={styles.text}>Keren</Text>

                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 5 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditPost', { uuid: 'uuid' })}>
                            <FontAwesomeIcon size={20} style={{ marginRight: 5 }} icon={faEdit} color="blue" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesomeIcon size={20} icon={faTrash} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity
                        style={{ padding: 5 }}
                        onPress={() => navigation.navigate('DetailPost', { slug: 'detail' })}>
                        <Image style={styles.image} source={{ uri: 'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/e35/101467383_594312047871676_5824187634397713530_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=104&_nc_ohc=f9acHSXd4MUAX9C-J6K&edm=AP_V10EBAAAA&ccb=7-4&oh=0e8a406e78112df0ec6610522f696c13&oe=60F03509&_nc_sid=4f375e' }} />
                        <Text style={styles.text}>Keren</Text>

                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end', padding: 5 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditPost', { uuid: 'uuid' })}>
                            <FontAwesomeIcon size={20} style={{ marginRight: 5 }} icon={faEdit} color="blue" />
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

export default MyPost
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
