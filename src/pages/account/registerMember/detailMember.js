import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { detailRegisterMemberEveryRemas } from '../../../api/registerMemberRemas'
import { HeaderWithBackButton } from '../../../components/header'
import { TextInputDescription } from '../../../components/form'

const DetailMember = (uuid) => {

    useEffect(() => {
        getDetailMember()
    }, [])

    const [detailData, setDetailData] = useState({
        address: "",
        birthday: "",
        created_at: "",
        created_by: "",
        email: "",
        full_name: "",
        handphone: "",
        image: "",
        updated_at: "",
        user_uuid: "",

        description: ""
    })
    const getDetailMember = async () => {
        const data = uuid.route.params.uuid
        return await detailRegisterMemberEveryRemas(data)
            .then(data => {
                setDetailData(data.data)
            })
    }
    console.log(detailData)

    const {
        address,
        birthday,
        email,
        full_name,
        handphone,
        image,
        updated_at,
        user_uuid,
        description,

    } = detailData
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <HeaderWithBackButton text="Detail Member" placement="center" />
            <View style={styles.containerText}>
                <Text style={styles.parentName} >Nama Lengkap</Text>
                <Text style={styles.text}>{full_name}</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.parentName} >Alamat</Text>
                <Text style={styles.text}>{address}</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.parentName} >TTL</Text>
                <Text style={styles.text}>{birthday}</Text>
            </View>

            <View style={styles.containerText}>
                <Text style={styles.parentName} >Contact</Text>
                <Text style={styles.text}>{handphone}{"\n"}
    email : {email}{"\n"}
    instagram : </Text>
            </View>

            <View style={styles.containerText}>
                <Text style={styles.parentName}>Deskripsi</Text>
                <TextInputDescription value={description} />
            </View>

            <Image style={styles.image} source={{ uri: image }} />
        </ScrollView>
    )
}

export default DetailMember

const styles = StyleSheet.create({
    text: {
        borderWidth: 1,
        borderColor: 'green',
        marginHorizontal: 10,
        marginTop: 10,
        padding: 5,
        borderRadius: 10
    },
    containerText: {
        marginTop: 20
    },
    parentName: {
        marginHorizontal: 10
    },
    image: {
        height: 150,
        width: 150
    },
    textDesc: {
        borderWidth: 1,
        borderColor: 'green',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        borderRadius: 10,
        height: 100
    }
})
