import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Content from './Contents';
type Props={

}
const Splash:FC<Props> = (): JSX.Element => {
    return (
        <View style={styles.main}>
            <View style={styles.center}>
                <Content size={'large'} color={'white'} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor:'blue'
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    }
})
export default Splash;