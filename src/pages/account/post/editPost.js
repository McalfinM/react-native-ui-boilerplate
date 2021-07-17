import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { findOnePost, getAllCategory, updatePost } from '../../../api/posts'
import { InputForm, PickerForm, TextInputDescription } from '../../../components/form'
import { HeaderWithSaveButton } from '../../../components/header'
import * as ImagePicker from 'expo-image-picker'; // bu asagidaki raeact-native - expo ucun img pickere gore lazimdir

const EditPost = (uuid) => {

    useEffect(() => {
        getDetailPost()
        getCategory()
    }, [])

    const [detailPost, setDetailPost] = useState({
        title: '',
        content: '',
        category: {
            uuid: '',
            name: ''
        },
        image: '',
        cloudinary_id: '',
        uuid: ''
    })

    const [dataCategory, setCategoryData] = useState([])
    const [imagePreview, setImagePreview] = useState('')
    const [currentImage, setCurrentImage] = useState('')
    const [loading, setLoading] = useState(false)
    const getDetailPost = async () => {
        const data = uuid.route.params.uuid
        return await findOnePost(data).then(data => {

            setDetailPost(data.data)
            setImagePreview(data.data.image)
            setCurrentImage(data.data.image)
        }

        )

    }
    const getCategory = async () => {
        return await getAllCategory()
            .then(data => {
                setCategoryData(data.data.data)
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
            setDetailPost({ ...detailPost, image: newFile })
        }

    }

    const handlePost = async () => {
        const { title, content, image, cloudinary_id } = detailPost
        setLoading(true)
        let category = detailPost.category.uuid
        const data = { title, content, category, image, cloudinary_id }
        let uuidData = uuid.route.params.uuid
        if (!title || !content || !category) {
            alert('lengkapi semua data')
        } else {
            await updatePost(uuidData, data, currentImage)
                .then(response => {
                    alert('Post Created')
                    setLoading(false)
                    setDetailPost({ ...detailPost })
                    getDetailPost()
                }).catch(error => {
                    console.log(error.response)
                    // const show = error.response.data.map(v => {
                    //     ToastAndroid.show(v.message, ToastAndroid.SHORT)
                    // })
                    setLoading(false)
                })
        }

    }

    const { title, content, category, image } = detailPost
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View>
                <HeaderWithSaveButton loading={loading} onPress={() => handlePost()} buttontxt="Save" placement="center" text="Settings" />

                <InputForm placeholder="Title" value={title} onChangeText={(e) => setDetailPost({ ...detailPost, title: e })} />
                <Text>Kategori</Text>
                <PickerForm data={dataCategory} selectedValue={category.uuid} onValueChange={(itemValue, itemIndex) => setDetailPost({ ...detailPost, category: { uuid: itemValue } })} />
                <TextInputDescription placeholder="Content" value={content} onChangeText={(e) => setDetailPost({ ...detailPost, content: e })} />
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: imagePreview ? imagePreview : image }} />
                </View>

                <View style={styles.modalButtonWrapper}>
                    <Button title="Gallery" mode="contained" onPress={() => pickFromGalary()} />
                </View>

            </View>

        </ScrollView>
    )
}

export default EditPost

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
    },
    textEdit: {
        textAlign: 'center',
        color: "white"
    },
    edit: {
        width: 50,
        padding: 5,
        marginLeft: 10,
        backgroundColor: 'green'
    }
})
