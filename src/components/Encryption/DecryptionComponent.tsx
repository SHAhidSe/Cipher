import React from "react";
import { Button } from "react-native-paper";
import CardComponent from "../UI/CardComponent";
import Input from "../UI/Input";
import { StyleSheet, View } from 'react-native'


const DecryptionComponent = (): JSX.Element => {
    const changeText = () => {

    }
    const handlePress = () => {

    }
    return (
        <View style={styles.main}>
            <CardComponent>
                <Input mode="outlined" setText={changeText} text={'hello'} label={"text"} />
                <Button onPress={handlePress}>Generate Key</Button>
                <Input editable={false} text={'text area'} label={'text area lable'} multiline={true} numberOfLines={4} />
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