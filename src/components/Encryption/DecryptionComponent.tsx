import React from "react";
import { Button } from "react-native-paper";
import CardComponent from "../UI/CardComponent";
import Input from "../UI/Input";
import { StyleSheet, View } from 'react-native'
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";
import { generateDeCipherThunk, setCipherText, setKeyText } from "../../redux/Features/Encryption/DecryptionSlice";


const DecryptionComponent = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const { keyString, cipeherText ,DeCipher} = useAppSelector(state => state.decryption)

    const changeText = (value:string) => {
        dispatch(setKeyText(value))
    }
    const changeCipherText = (value: string, id: string) => {
        dispatch(setCipherText(value))
    }
    const handlePress = () => {
        dispatch(generateDeCipherThunk({key:keyString, cipher:cipeherText }))
    }
    return (
        <View style={styles.main}>
            <CardComponent>
                <Input mode="outlined" setText={changeText} text={keyString} label={"Secret Key"} />
                <Input mode="outlined" id="plainText" setText={(text: string, id: string) => changeCipherText(text, id)} text={cipeherText} label={"Encrypted Text"} multiline={true} numberOfLines={4}/>
                <Button onPress={handlePress}>Decrypt Text</Button>
                <Input editable={false} text={DeCipher?DeCipher:''} label={'Decrypted Text'} multiline={true} numberOfLines={4} />
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
export default DecryptionComponent;