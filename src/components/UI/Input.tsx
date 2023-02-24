import * as React from 'react';
import { TextInput } from 'react-native-paper';
type Props = {
    text: string,
    setText?: any,
    label: string,
    multiline?: boolean,
    placeholder?: string,
    numberOfLines?: number,
    mode?: 'flat' | 'outlined',
    editable?: boolean,
    id?:string
}
const Input: React.FC<Props> = ({ text, setText, label, multiline, placeholder, numberOfLines, mode, editable, id }) => {
    return (
        <TextInput
            id={id}
            mode={mode}
            label={label}
            value={text}
            onChangeText={text => setText(text, id)}
            multiline={multiline}
            numberOfLines={numberOfLines}
            placeholder={placeholder}
            editable={editable}
        />
    );
};

export default Input;