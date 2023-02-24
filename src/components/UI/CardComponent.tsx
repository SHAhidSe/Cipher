import React, { Children, ReactNode } from "react";
import { Button, Card, Text } from 'react-native-paper';
import { Alert, StyleSheet } from "react-native";
type Props = {
    handleCardPress?: any,
    children?: ReactNode
}
const CardComponent: React.FC<Props> = ({ handleCardPress, children }): JSX.Element => {
    return (
        <Card style={styles.card}
            elevation={5}
            onPress={handleCardPress}>
            <Card.Content style={styles.cardContent}>
                {children}
            </Card.Content>
        </Card>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: "blue",
        shadowRadius: 40,
        shadowColor: 'blue',
        borderRadius: 8
        // shadowOffset: {
        //     width: 50,
        //     height: 50,
        // }

    },
    cardTitle: {
    },
    center: {
        textAlign: "center"
    },
    cardContent: {
        gap: 3
    }
})
export default CardComponent;