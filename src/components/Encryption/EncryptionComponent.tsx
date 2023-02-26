import React from "react";
import { Button } from "react-native-paper";
import CardComponent from "../UI/CardComponent";
import Input from "../UI/Input";
import { StyleSheet, View } from 'react-native'
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";
import { generateCipherThunk, generateKeyThunk, setEncryptionText, setKeyText } from "../../redux/Features/Encryption/EncryptionSlice";


const EncryptionComponent = (): JSX.Element => {
    const { keyString, encString, isKeyLoading, isKeySuccess, keys, Cipher } = useAppSelector(state => state.encryption)
    const dispatch = useAppDispatch()
    const changeKeyStringText = (value: string, id: string) => {
        dispatch(setKeyText(value))
    }

    const changeEncyptionText = (value: string, id: string) => {
        dispatch(setEncryptionText(value))
    }
    /* generate key button handle */
    const handleGenerateKey = () => {
        // dispatch(generateKeyThunk({ password: keyString, salt: 'salt', cost: 10000, length: 256}))
        dispatch(generateCipherThunk({key:keyString, text:encString }))
    }
    return (
        <View style={styles.main}>
            <CardComponent>
                <Input id="keyText" mode='outlined' setText={(text: string, id: string) => changeKeyStringText(text, id)} text={keyString} label={'Secret Key'} />
                <Input mode="outlined" id="plainText" setText={(text: string, id: string) => changeEncyptionText(text, id)} text={encString} label={"Text"} multiline={true} numberOfLines={4}/>
                <Button onPress={handleGenerateKey}>Encrypt Text</Button>
                <Input editable={true} id="cipherArea" text={Cipher?Cipher:''} label={'EncrypteD Text/Cipher'} multiline={true} numberOfLines={4} />
            </CardComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 10,
        gap: 10,

    }
})
export default EncryptionComponent;