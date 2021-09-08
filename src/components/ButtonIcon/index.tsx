import React from 'react';
import { View, Text, Image, 
    TouchableOpacity,
    TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import DiscordImg from '../../assets/discord.png';


type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest } : Props){
    return(
        <TouchableOpacity 
            style={styles.submitButton}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.imageButton}/>
            </View>
            <Text style={styles.textButton}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}