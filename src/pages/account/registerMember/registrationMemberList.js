import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'
import { HeaderWithBackButton } from '../../../components/header'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit, faInfo, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import InsideModal from '../../../components/form/insideModal'
import { fetchRegisterMemberEveryRemas } from '../../../api/registerMemberRemas'

const RegistrationMemberList = () => {

    useEffect(() => {
        fetchAllRegister()
    }, [])
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [choose, setChoose] = useState()
    const [dataRegister, setDataRegister] = useState([{
        address: "",
        birthday: "",
        created_at: "",
        created_by: {
            uuid: "",
            name: ""
        },
        email: "",
        full_name: "",
        handphone: "",
        image: "",
        updated_at: "",
        user_uuid: "",
        uuid: "",
    }])
    const { width } = Dimensions.get("window")
    const modalHandle = (bool) => (
        setVisible(bool)
    )

    const fetchAllRegister = async () => {
        return await fetchRegisterMemberEveryRemas().then(data => {
            setDataRegister(data.data.data)
        })
    }

    console.log(dataRegister, 'data')
    return (
        <ScrollView>
            <HeaderWithBackButton placement="center" text="List Registration Member" />
            <View style={styles.row}>
                {
                    !dataRegister ? (<Text>Tidak ada data</Text>) : (
                        dataRegister.map((data, index) => (
                            <View key={index} style={styles.card}>

                                <TouchableOpacity
                                    style={{ padding: 5 }}
                                    onPress={() => navigation.navigate('DetailMember', { uuid: data.uuid })}>
                                    <Image style={styles.image} source={{ uri: data.image }} />
                                    <Text style={styles.text}>{data.full_name}</Text>

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
                        ))


                    )
                }

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
