import { BASE_URL, cloud_name, cloud_url, upload_preset, upload_register_member_remas } from '../helpers/config'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const registerMemberRemasWithAuth = async (data) => {
    const auth = await AsyncStorage.getItem("token")
    const value = new FormData()
    value.append('file', data.image);  // cloudinary ucun img file,hansiki imgpicker den gelir
    value.append('upload_preset', upload_register_member_remas)
    value.append('cloud_name', cloud_name)
    if (data.image) {
        console.log('masuk')
        return await fetch(cloud_url, {
            method: 'post',
            body: value
        }).then(res => res.json())
            .then(async (result) => {
                console.log(result)
                data.image = result.secure_url
                data.cloudinary_id = result.public_id.replace('posts/', '')
                return await axios.post(BASE_URL + '/remas-member-register', data, {
                    headers: {
                        'Authorization': 'Bearer ' + auth
                    }
                }).catch(error => {

                    console.log(error.response.data, 'ini eroor')

                })

            })
    } else {
        const response = await axios.post(BASE_URL + '/remas-member-register', data, {
            headers: {
                'Authorization': 'Bearer ' + auth
            }
        });

        return response
    }

}

export const registerMemberRemasNoAuth = async (data) => {
    const auth = await AsyncStorage.getItem("token")
    const value = new FormData()
    value.append('file', data.image);  // cloudinary ucun img file,hansiki imgpicker den gelir
    value.append('upload_preset', upload_register_member_remas)
    value.append('cloud_name', cloud_name)
    if (data.image) {
        console.log('masuk')
        return await fetch(cloud_url, {
            method: 'post',
            body: value
        }).then(res => res.json())
            .then(async (result) => {
                console.log(result)
                data.image = result.secure_url
                data.cloudinary_id = result.public_id.replace('posts/', '')
                return await axios.post(BASE_URL + '/remas-member-register/no-auth', data).catch(error => {

                    console.log(error.response.data, 'ini eroor')

                })

            })
    } else {
        const response = await axios.post(BASE_URL + '/remas-member-register', data);

        return response
    }
}

export const fetchRegisterMemberEveryRemas = async () => {
    const auth = await AsyncStorage.getItem("token")
    const response = await axios.get(BASE_URL + '/remas-member-register', {
        headers: {
            'Authorization': 'Bearer ' + auth
        }
    });

    return response
}
export const detailRegisterMemberEveryRemas = async (uuid) => {
    const auth = await AsyncStorage.getItem("token")
    const response = await axios.get(BASE_URL + '/remas-member-register/' + uuid, {
        headers: {
            'Authorization': 'Bearer ' + auth
        }
    });

    return response
}
