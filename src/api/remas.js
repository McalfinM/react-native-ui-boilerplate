import { BASE_URL } from '../helpers/config'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getAllRemas = async (limit, page, search) => {
    const auth = await AsyncStorage.getItem("token")
    const response = await axios.get(BASE_URL + `/profiles?limit=${limit}&page=${page}&search=${search}`);

    return response
}

export const getDetailRemas = async (slug) => {
    const auth = await AsyncStorage.getItem("token")
    const response = await axios.get(BASE_URL + `/profiles/${slug}`);

    return response
}