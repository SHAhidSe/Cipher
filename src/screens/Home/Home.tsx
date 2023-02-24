import React from "react";
import { Text, View } from "react-native";
import Cards from "../../components/Home/Home";

type Props = {
    navigation: any,
}
const Home: React.FC<Props> = ({ navigation }): JSX.Element => {
    const handleCardPress = (screenName: string): void => {
        navigation.navigate(screenName)
    }
    return (
        <View>
            <Cards handleCardPress={handleCardPress} />
        </View>
    )
}
export default Home;