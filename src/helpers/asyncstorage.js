import { deleteLocalstorage, getLocalStorage, setLocalStorage } from "./storage"


export const setAuthentication = async (token) => {
    await setLocalStorage('token', token)
}

export const isAuthenticated = async () => {
    if (getLocalStorage('token')) {
        return await getLocalStorage('token')
    } else {
        return false
    }
}

export const logout = (next) => {
    deleteLocalstorage('token')

    next()
}