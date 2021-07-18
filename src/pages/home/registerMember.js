import React, { useEffect, useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import InputForm from '../../components/form/textInput'
import TextInputDescription from '../../components/form/textInputDesc'
import { HeaderWithBackButton } from '../../components/header'
import { registerMemberRemas, registerMemberRemasNoAuth, registerMemberRemasWithAuth } from '../../api/registerMemberRemas'
import isEmail from 'validator/lib/isEmail'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';
import { findMyProfile } from '../../api/profile'

const RegisterMember = (uuid) => {
    const navigation = useNavigation()
    useEffect(() => {
        async function checkAuth() {
            await AsyncStorage.getItem('token')
                .then(data => {
                    console.log(data.response)
                    if (data) {
                        setAuth(data)
                    } else {
                        setAuth(null)
                    }
                }).catch(error => console.log(error))
        }

        checkAuth()
        getMyProfile()
    }, [])
    const [nickname, setNickname] = useState('')
    const [visi, setVisi] = useState('')
    const [misi, setMisi] = useState('')
    const [cloudinary_id, setCloudinary] = useState('')
    const [loading, setLoading] = useState(false)
    const getMyProfile = async () => {
        return await findMyProfile().then(data => {
            console.log(data.data)
            setFormData({ ...formData, full_name: data.data.main_information.full_name })
            setFormData({ ...formData, description: data.data.main_information.description })
            setFormData({ ...formData, imagePreview: data.data.main_information.image })
            setImage(data.data.main_information.image)
            setCloudinary(data.data.main_information.cloudinary_id)
        })
    }
    const [auth, setAuth] = useState(null)
    const [image, setImage] = useState()
    const [formData, setFormData] = useState({
        full_name: '',
        address: '',
        birthday: '',
        handphone: '',
        email: '',
        description: '',
        imagePreview: '',
        error: ''
    })


    const pickFromGalary = async () => { //picker from galery code

        let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5
        });
        if (!data.cancelled) {
            let newFile = {
                uri: data.uri,
                type: `remas/${data.uri.split(".")[1]}`,
                name: `remas.${data.uri.split(".")[1]}`
            };
            setFormData({ ...formData, imagePreview: data.uri });
            setImage(newFile)
        }

    }
    const handleSubmit = async () => {
        const { full_name, address, birthday, handphone, email, description, error } = formData
        const user_uuid = uuid.route.params.uuid
        const data = { full_name, address, birthday, handphone, email, description, user_uuid, image }
        if (auth !== null) {
            return await registerMemberRemasWithAuth(data)
                .then(data)
                .catch(error => console.log(error.response.data))
        } else {
            return await registerMemberRemasNoAuth(data)
                .then(data => {
                    alert('Data sukses terkirim')
                    setFormData({
                        full_name: '',
                        address: '',
                        birthday: '',
                        handphone: '',
                        email: '',
                        description: '',
                        error: ''
                    })
                })
                .catch(error => {
                    console.log(error)
                    var collection = "";
                    error.response.data.forEach(function (row) {
                        var line = [];
                        Object.keys(row).forEach(function (key) {
                            line.push(row[key])
                        });
                        setFormData({ ...formData, error: collection = collection + line.join(',') + '\n' })
                    })
                })

        }

    }
    const { full_name, address, birthday, handphone, email, description, error, imagePreview } = formData
    return (

        <ScrollView>
            <HeaderWithBackButton placement="center" text="Pendaftaran Anggota IRMA" />
            {
                error ? (<Text style={styles.error}>{error}</Text>) : (<View></View>)
            }

            <InputForm value={full_name} onChangeText={(text) => setFormData({ ...formData, full_name: text })} placeholder="Nama Lengkap Kamu" />
            <InputForm value={address} onChangeText={(text) => setFormData({ ...formData, address: text })} placeholder="Alamat" />
            <InputForm value={birthday} onChangeText={(text) => setFormData({ ...formData, birthday: text })} placeholder="TTL eg. Jakarta, 17 Agustus 1945" />
            <InputForm value={handphone} onChangeText={(text) => setFormData({ ...formData, handphone: text })} placeholder="Nomer Telpon / Whatsapp" />
            {/* <InputForm value={} onChangeText={ } placeholder="Instagram (Optional)" /> */}
            <InputForm value={email} onChangeText={(text) => setFormData({ ...formData, email: text })} placeholder="Email" />
            <TextInputDescription value={description} onChangeText={(text) => setFormData({ ...formData, description: text })} placeholder="Ceritakan singkat tentang dirimu seperti hobi dll. " />
            <View style={styles.buttonSubmit}>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.modalButtonWrapper}>
                <TouchableOpacity style={styles.browseImage} onPress={() => pickFromGalary()} >
                    <Text style={{ color: 'white' }}>Browse Image</Text>
                </TouchableOpacity>

            </View>
            <Image style={{ width: 150, height: 150 }} source={{ uri: imagePreview ? imagePreview : 'no' }} />

        </ScrollView>
    )
}

export default RegisterMember

const styles = StyleSheet.create({
    error: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignSelf: 'center',
        shadowColor: 'red',
        shadowOffset: {
            height: 10
        },
        color: "white",
        backgroundColor: "#de766d",
        borderRadius: 20
    },
    buttonSubmit: {
        padding: 5,
        width: 100,
        alignSelf: 'center',
        backgroundColor: 'green',
        margin: 10
    },
    modalButtonWrapper: {
        padding: 5,
        width: 100,
        alignSelf: 'center',
        backgroundColor: 'grey',
        margin: 10
    }
})
