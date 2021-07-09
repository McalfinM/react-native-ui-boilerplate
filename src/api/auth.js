import { BASE_URL } from '../helpers/config'
import axios from 'axios'

export const loginProcess = async (data) => {
    console.log(data)
    const response = await axios.post(BASE_URL + '/auth/login', data);

    return response
}