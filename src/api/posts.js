import { BASE_URL, cloud_name, cloud_url, upload_preset } from '../helpers/config'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const loadPostByRemas = async (limit, page) => {

    const response = await axios.get(BASE_URL + `/posts?limit=${limit}&page=${page}`);

    return response
}

export const getAllCategory = async () => {
    const response = await axios.get(BASE_URL + '/category')

    return response
}

export const getDetailPost = async (slug) => {
    const response = await axios.get(BASE_URL + '/posts/' + slug)

    return response
}

export const createPost = async (data) => {
    const auth = await AsyncStorage.getItem("token")
    console.log(auth)
    const value = new FormData(); // fetch ucun value hazirlayiriq
    value.append('file', data.image);  // cloudinary ucun img file,hansiki imgpicker den gelir
    value.append('upload_preset', upload_preset)
    value.append('cloud_name', cloud_name)
    if (data.image) {

        await fetch(cloud_url, {
            method: 'post',
            body: value
        }).then(res => res.json())
            .then(async (result) => {
                console.log(result)
                data.image = result.secure_url
                data.cloudinary = result.public_id
                return await axios.post(BASE_URL + '/posts', data, {
                    headers: {
                        'Authorization': 'Bearer ' + auth
                    }
                }).catch(error => {

                    console.log(error)

                })

            })

    } else {
        const response = await axios.post(BASE_URL + `/posts`, data, {
            headers: {
                'Authorization': 'Bearer ' + auth
            }
        });

        return response
    }
}

