import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import IllustraionImg from '../../assets/illustration.png';
import Discord from '../../assets/discord.png';


export function SignIn(){
    return(
      
      <View style={styles.container}>
        <Image 
          source={IllustraionImg}
          style={styles.image}
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

            <TouchableOpacity style={styles.submitButton}>
              <Image 
                source={Discord}
                style={styles.imageButton}
              />
              <Text style={styles.textButton}>Entre com Discord</Text>
            </TouchableOpacity>
      </View>
    )
  }
  
