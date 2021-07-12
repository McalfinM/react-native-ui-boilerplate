import { BASE_URL } from '../helpers/config'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const createComment = async (data) => {
    console.log(data, 'ini data')
    const auth = await AsyncStorage.getItem("token")
    const response = await axios.post(BASE_URL + '/comments', data, {
        headers: {
            'Authorization': 'Bearer ' + auth
        }
    });

    return response
}
