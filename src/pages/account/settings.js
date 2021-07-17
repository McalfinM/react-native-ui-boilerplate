import React, { useEffect, useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { InputForm } from '../../components/form'
import { HeaderBar, HeaderWithBackButton, HeaderWithSaveButton } from '../../components/header'
import { findMyProfile, updateProfile } from '../../api/profile'
import * as ImagePicker from 'expo-image-picker'; // bu asagidaki raeact-native - expo ucun img pickere gore lazimdir
const Settings = () => {
    useEffect(() => {
        getMyProfile()
    }, [])
    const [myProfile, setMyProfiile] = useState({
        idul_adha: null,
        main_information: {
            image: '',
            nickname: '',
            full_name: '',
            visi: '',
            misi: '',
            description: ''
        },
        ramadhan: null,
        slug: '',
    })
    const [imagePreview, setImagePreview] = useState('')
    const [nickname, setNickname] = useState('')
    const [full_name, setFullName] = useState('')
    const [visi, setVisi] = useState('')
    const [misi, setMisi] = useState('')
    const [description, setDescription] = useState('')
    const [cloudinary_id, setCloudinary] = useState('')
    const [image, setImage] = useState()
    const [loading, setLoading] = useState(false)
    const getMyProfile = async () => {
        return await findMyProfile().then(data => {
            console.log(data.data)
            setMyProfiile(data.data)
            setFullName(data.data.main_information.full_name)
            setNickname(data.data.main_information.nickname)
            setVisi(data.data.main_information.visi)
            setMisi(data.data.main_information.misi)
            setDescription(data.data.main_information.description)
            setImage(data.data.main_information.image)
            setImagePreview(data.data.main_information.image)
            setCloudinary(data.data.main_information.cloudinary_id)

        })
    }

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
            setImagePreview(data.uri);
            setImage(newFile)
            setMyProfiile({ ...myProfile, main_information: { image: newFile } })
        }

    }
    const handlePost = async () => {
        setLoading(true)
        const data = { nickname, full_name, visi, misi, image, description, cloudinary_id }
        console.log(data)
        if (!nickname) {
            alert('lengkapi semua data')
        } else {
            return await updateProfile(data, imagePreview)
                .then(response => {
                    console.log(response, 'ini respon')
                    alert('Post Created')
                    setLoading(false)
                    getMyProfile({ ...myProfile })

                }).catch(error => {
                    console.log(error.response)

                    setLoading(false)
                })
        }

    }
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View>
                <HeaderWithSaveButton onPress={handlePost} loading={loading} buttontxt="Save" placement="center" text="Settings" />
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: imagePreview ? imagePreview : image }} />
                </View>
                <InputForm value={nickname} onChangeText={(text) => setNickname(text)} placeholder="Nama Singkat" />
                <InputForm value={full_name} onChangeText={(text) => setFullName(text)} placeholder="Nama Lengkap" />
                <InputForm value={visi} placeholder="Visi" onChangeText={(text) => setVisi(text)} />
                <InputForm value={misi} placeholder="Misi" onChangeText={(text) => setMisi(text)} />
                <InputForm value={description} placeholder="Description" onChangeText={(text) => setDescription(text)} />
            </View>
            <View style={styles.modalButtonWrapper}>
                <Button title="Gallery" mode="contained" onPress={() => pickFromGalary()} />
            </View>
        </ScrollView>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 100
    }
})
