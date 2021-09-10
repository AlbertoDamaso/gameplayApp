import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IllustraionImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from "./styles";


export function SignIn(){
  const navigation = useNavigation();

  function handleSingnIn(){
    navigation.navigate('Home');//Pq no Type esta assim agr?
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
  
