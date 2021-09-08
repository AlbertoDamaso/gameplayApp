import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';


export function GuildIcon() {
    const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrB545oxIIVtts_KsFMTUP5y4NCvXb04M8VQ&usqp=CAU'
  return(
    <Image 
        style={styles.image}
        source={{uri}}
        resizeMode="cover"
    />

  ) 
}
