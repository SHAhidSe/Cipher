import React from 'react';
import { ActivityIndicator, ColorValue } from 'react-native';

 type Props = {
    size?: 'large' | 'small' | number | undefined,
    color?: ColorValue | undefined

}
const Content: React.FC<Props> = ({ size, color }): JSX.Element => {
    return (
        <ActivityIndicator size={size} color={color} />
    )
}

export default Content;