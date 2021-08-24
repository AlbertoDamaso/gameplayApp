import React from "react";
import { StatusBar, View, Text, Image } from "react-native";
import { styles } from "./styles";

import IllustraionImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';


export function SignIn(){
    return(
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Image 
          source={IllustraionImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
            <Text style={styles.title}>
              Conecte-se {`\n`}
              e organize suas {`\n`}
              jogatinas
            </Text>
            <Text style={styles.text}>
              Crie grupos para jogar seus games{`\n`}
              favoritos com seus amigos
            </Text>
        </View>

        <ButtonIcon 
          title="Entrar com Discord"
          activeOpacity={0.7}
        />
      </View>
    )
  }
  
