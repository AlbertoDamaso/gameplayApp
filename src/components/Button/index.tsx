import React from 'react';
import { Text, 
    TouchableOpacity,
    TouchableOpacityProps } from 'react-native';
import { styles } from './styles';


type Props = TouchableOpacityProps & {
    title: string;
}

export function Button({ title, ...rest } : Props){
    return(
        <TouchableOpacity 
            style={styles.submitButton}
            {...rest}
        >
            <Text style={styles.textButton}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}