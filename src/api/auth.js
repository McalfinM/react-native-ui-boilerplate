import { BASE_URL } from '../helpers/config'
import axios from 'axios'
import { deleteLocalstorage } from '../helpers/storage';
import { logout } from '../helpers/asyncstorage';

export const loginProcess = async (data) => {
    const response = await axios.post(BASE_URL + '/auth/login', data);

    return response
}
