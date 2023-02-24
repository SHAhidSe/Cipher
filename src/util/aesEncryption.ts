import { NativeModules, Platform } from 'react-native'
import Aes from 'react-native-aes-crypto'


const generateKey = async (password: string, salt: string, cost: number, length: number): Promise<string> => {
    try {
        return await Aes.pbkdf2(password, salt, cost, length)
    } catch (error: any) {
        console.log(error)
        return error
    }
}
const encryptData = async (text: string, key: string) => {
    try {

        let randomKey = await Aes.randomKey(16)
        let cipher = await Aes.encrypt(text, key, randomKey, 'aes-256-cbc')
        return { isError: false, randomKey, cipher }

    } catch (error: any) {
        return { isError: true, error: error }
    }
}
const decryptData = async (cipher: string, key: string, iv: string) => {
    try {
        let decryptData = await Aes.decrypt(cipher, key, iv, 'aes-256-cbc')
        return { isError: false, decryptData }
    } catch (error: any) {
        return { isError: true, error: error }
    }
}

export { generateKey, encryptData, decryptData };