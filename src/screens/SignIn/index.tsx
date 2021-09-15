import React, { useContext } from "react";
import { View, Text, Image, Alert } from "react-native";
import IllustraionImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from "./styles";
import { useAuth } from "../../context/auth";


export function SignIn(){
  const { user, signIn } = useAuth();

  async function handleSingnIn(){
    try {
      await signIn();
    } catch (error) {
      Alert.alert('error');
    }
  }

    return(
      <View style={styles.container}>

        <Image 
          source={IllustraionImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Text>
          <Text style={styles.text}>
            Crie grupos para jogar seus games{'\n'}
            favoritos com seus amigos
          </Text>
          <ButtonIcon 
            title="Entrar com Discord"
            activeOpacity={0.7}
            onPress={handleSingnIn}
          />            
        </View>
      </View>
    )
  }
  
