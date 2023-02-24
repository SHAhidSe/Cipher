import React from 'react'
import { StyleSheet, View } from 'react-native'
import Splash from '../components/Splash/Splash'

type Props = {

}
const SplashScreen: React.FC<Props> = (): JSX.Element => {
    return (
        <View style={style.main}>
            <Splash />
        </View>
    )
}
const style = StyleSheet.create({
    main: {
        flex: 1,
        maxHeightidth:"100%",
        maxWidth:"100%",
    }
})
export default SplashScreen;