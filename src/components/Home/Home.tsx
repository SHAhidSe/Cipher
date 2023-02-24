import React from "react";
import { StyleSheet, View } from 'react-native'
import { Text } from "react-native-paper";
import CardComponent from "../UI/CardComponent";

type Props = {
    handleCardPress(screenName: string): void
}
const Home: React.FC<Props> = ({ handleCardPress }): JSX.Element => {

    return (
        <View style={styles.main} >
            <CardComponent handleCardPress={() => handleCardPress('Encryption')} >
                <Text variant='titleLarge'>Encryption</Text>
                <Text variant='titleSmall'>Subtitile</Text>
            </CardComponent>
            <CardComponent handleCardPress={() => handleCardPress('Decryption')} >
                <Text variant='titleLarge'>Decryption</Text>
                <Text variant='titleSmall'>Subtitile</Text>
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
export default Home;