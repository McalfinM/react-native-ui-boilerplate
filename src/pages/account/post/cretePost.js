import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { InputForm, PickerForm, TextInputDescription } from '../../../components/form'
import { HeaderWithBackButton } from '../../../components/header'
import * as ImagePicker from 'expo-image-picker'; // bu asagidaki raeact-native - expo ucun img pickere gore lazimdir
import * as Permissions from 'expo-permissions'; //
import { createPost, getAllCategory } from '../../../api/posts';

const CreatePost = () => {
    useEffect(() => {
        getCategory()
    }, [])
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [categoryData, setCategoryData] = useState('')
    const [content, setContent] = useState('')
    const [cloudinary_id, setCloudinaryId] = useState('')
    const [image, setImage] = useState()
    const [imagePreview, setImagePreview] = useState()
    const [loading, setLoading] = useState(false)

    console.log(category, 'ini category')
    const getCategory = async () => {
        return await getAllCategory()
            .then(data => {
                setCategoryData(data.data.data)
            })
    }

    const pickFromGalary = async () => { //picker from galery code
        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (granted) {
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
            }
        } else { Alert.alert('Siz bu funksiyani isletmek ucun icaze vermelisiz'); }
    }

    const handlePost = async () => {
        setLoading(true)
        const data = { title, content, category, image, cloudinary_id }
        if (!title || !content || !category) {
            alert('lengkapi semua data')
        } else {
            await createPost(data)
                .then(response => {
                    alert('Post Created')
                    setLoading(false)
                    setCategory('')
                    setCloudinaryId('')
                    setImage()
                    setImagePreview()
                    setTitle('')
                    setContent('')
                }).catch(error => {
                    console.log(error)
                    setLoading(false)
                })
        }

    }

    return (
        <ScrollView>
            <HeaderWithBackButton placement="center" text="Create Post" />
            <InputForm value={title} onChangeText={(e) => setTitle(e)} placeholder="Title" />
            <PickerForm data={categoryData} selectedValue={category} onValueChange={(itemValue, itemInde) => setCategory(itemValue)} />
            <TextInputDescription value={content} onChangeText={(e) => setContent(e)} placeholder="Content" />
            {loading ? (<ActivityIndicator
                animating
                color="green"
                size="small"

            />) : (<TouchableOpacity style={{ margin: 20, backgroundColor: 'green', width: 100, padding: 10, borderRadius: 5, alignSelf: 'flex-end' }}
                onPress={() => handlePost()}
            >
                <Text style={{ textAlign: 'center', color: 'white' }}>Submit</Text>
            </TouchableOpacity>
                )}

            <View style={styles.modalButtonWrapper}>
                <Button title="Gallery" mode="contained" onPress={() => pickFromGalary()} />
            </View>
            <View style={styles.backdrop}>
                {imagePreview && <Image source={{ uri: imagePreview ? imagePreview : '' }} style={styles.image} />}
            </View>
        </ScrollView>
    )
}

export default CreatePost

const styles = StyleSheet.create({
    backdrop: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    image: {
        height: 100,
        width: 100,
        justifyContent: 'center'
    },
})
