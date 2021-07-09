import asyncStorage from '@react-native-async-storage/async-storage'

export const setLocalStorage = async (key, value) => {
    console.log(key, value)
    await asyncStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = async (key) => {
    return await asyncStorage.getItem(key)
}

export const deleteLocalstorage = async (key) => {
    await asyncStorage.multiRemove([key])
}