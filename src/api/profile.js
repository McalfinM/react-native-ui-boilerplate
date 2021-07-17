import { BASE_URL, cloud_name, cloud_url, upload_profile } from '../helpers/config'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const findMyProfile = async (limit, page, search) => {
    const auth = await AsyncStorage.getItem("token")
    const response = await axios.get(BASE_URL + `/profiles/my-profile`, {
        headers: {
            'Authorization': 'Bearer ' + auth
        }
    });

    return response
}

export const updateProfile = async (data, currentImage) => {
    console.log(data.image, 'image')
    console.log(currentImage, 'current')

    const auth = await AsyncStorage.getItem('token')
    const value = new FormData(); // fetch ucun value hazirlayiriq
    value.append('file', data.image);  // cloudinary ucun img file,hansiki imgpicker den gelir
    value.append('upload_preset', upload_profile)
    value.append('cloud_name', cloud_name)
    if (data.image !== currentImage) {
        console.log('masuk')
        await fetch(cloud_url, {
            method: 'post',
            body: value
        }).then(res => res.json())
            .then(async (result) => {
                console.log(result)
                data.image = result.secure_url
                data.cloudinary_id = result.public_id.replace('profile/', '')
                return await axios.patch(BASE_URL + '/profiles', data, {
                    headers: {
                        'Authorization': 'Bearer ' + auth
                    }
                }).catch(error => {

                    console.log(error)

                })

            })

    } else {
        console.log('masuk else')
        const response = await axios.patch(BASE_URL + `/profiles/`, data, {
            headers: {
                'Authorization': 'Bearer ' + auth
            }
        });

        return response
    }


}