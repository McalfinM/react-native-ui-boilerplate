import { BASE_URL } from '../helpers/config'
import axios from 'axios'

export const loadPostByRemas = async (limit, page) => {
    console.log(limit, page)
    const response = await axios.get(BASE_URL + `/posts?limit=${limit}&page=${page}`);

    return response
}