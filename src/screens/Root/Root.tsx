import React, { useEffect } from "react";
import SplashScreen from "../SplashScreen";
import { useAppSelector, useAppDispatch } from '../../redux/Hooks/hooks'
import { toggle } from "../../redux/Features/Splash/splashSlice";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Home/Home";
import Encryption from "../Encrypt/Encryption";
import Decryption from "../Decrypt/Decryption";

const Stack = createNativeStackNavigator();

const Root = (): JSX.Element => {
    const { isLoading } = useAppSelector(state => state.splash)
    const dispatch = useAppDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch(toggle())
        }, 5000)
    }, [])
    if (isLoading) {
        return <Splash />
    }

    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    presentation: 'modal',
                    animation: 'none',
                    headerTitleAlign:'center'
                }}
            >
                <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
                <Stack.Screen name="Encryption" component={Encryption} options={{ title: "Encryption" }} />
                <Stack.Screen name="Decryption" component={Decryption} options={{ title: "Decryption" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
/* splash screen */
const Splash = () => {
    return <SplashScreen />
}
export default Root;