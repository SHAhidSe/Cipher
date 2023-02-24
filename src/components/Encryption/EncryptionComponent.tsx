import React from "react";
import { Button } from "react-native-paper";
import CardComponent from "../UI/CardComponent";
import Input from "../UI/Input";
import { StyleSheet, View } from 'react-native'
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";
import { generateKeyThunk, setEncryptionText, setKeyText } from "../../redux/Features/Encryption/EncryptionSlice";


const EncryptionComponent = (): JSX.Element => {
    const { keyString, encString, isKeyLoading, isKeySuccess, keys } = useAppSelector(state => state.encryption)
    const dispatch = useAppDispatch()
    const changeKeyStringText = (value: string, id: string) => {
        dispatch(setKeyText(value))
    }

    const changeEncyptionText = (value: string, id: string) => {
        dispatch(setEncryptionText(value))
    }
    /* generate key button handle */
    const handleGenerateKey = () => {
        dispatch(generateKeyThunk({ password: keyString, salt: 'salt', cost: 5000, length: 256}))
    }
    return (
        <View style={styles.main}>
            <CardComponent>
                <Input id="keyText" mode='outlined' setText={(text: string, id: string) => changeKeyStringText(text, id)} text={keyString} label={'Text'} />
                <Button onPress={handleGenerateKey}>Generate Key</Button>
                <Input editable={false} id="keyArea" text={keys} label={'text area lable'} multiline={true} numberOfLines={4} />
            </CardComponent>
            <CardComponent>
                <Input mode="outlined" id="plainText" setText={(text: string, id: string) => changeEncyptionText(text, id)} text={encString} label={"Text"} />
                <Button onPress={handleGenerateKey}>Encrypt Text</Button>
                <Input editable={false} id="cipherArea" text={'text area cipher'} label={'text area lable'} multiline={true} numberOfLines={4} />
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