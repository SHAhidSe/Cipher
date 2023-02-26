import { NativeModules, Platform } from 'react-native'
import Aes from 'react-native-aes-crypto'
import CryptoJS from "react-native-crypto-js";

const generateKey = async (password: string, salt: string, cost: number, length: number): Promise<string | Error> => {
    try {
        return await Aes.pbkdf2(password, salt, cost, length)
    } catch (error: any) {
        console.log('key generation error:', error)
        return error
    }
}
const encryptData = (text: string, key: string) => {
    try {
        // Encrypt
        let ciphertext = CryptoJS.AES.encrypt(text, key).toString();
        console.log(ciphertext)
        return { isError: false, ciphertext }

    } catch (error: any) {
        return { isError: true, error }
    }
}
var keySize = 256;
var ivSize = 128;
var iterations = 100;

function encrypt(msg: string, pass: string) {

    var salt = CryptoJS.lib.WordArray.random(128 / 8);

    var key = CryptoJS.PBKDF2(pass, salt, {
        keySize: keySize / 32,
        iterations: iterations
    });

    var iv = CryptoJS.lib.WordArray.random(128 / 8);

    var encrypted = CryptoJS.AES.encrypt(msg, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC

    });

    // salt, iv will be hex 32 in length
    // append them to the ciphertext for use  in decryption
    var transitmessage = salt.toString() + iv.toString() + encrypted.toString();
    return transitmessage;
}

function decrypt(transitmessage: string, pass: string) {
    var salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
    var iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32))
    var encrypted = transitmessage.substring(64);

    var key = CryptoJS.PBKDF2(pass, salt, {
        keySize: keySize / 32,
        iterations: iterations
    });

    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC

    })
    return decrypted;
}

const decryptData = (cipher: CryptoJS.lib.CipherParams, key: CryptoJS.lib.WordArray) => {
    try {
        console.log(cipher, key)
        // Decrypt
        let bytes = CryptoJS.AES.decrypt(cipher, key);
        // let bytes = CryptoJS.AES.decrypt(cipher, key);
        // let bytes = CryptoJS.AES.decrypt('U2FsdGVkX190DkRt9w9xkIoIceQTDcDKjBUAdiYskqQ=', 'Admin123');
        let originalText = bytes.toString(CryptoJS.enc.Utf8);
        console.log("original text", (originalText), 'bytes', bytes)
        return { isError: false, originalText }
    } catch (error: any) {
        console.log(error)
        return { isError: true, error }
    }
}

export { generateKey, encryptData, decryptData };