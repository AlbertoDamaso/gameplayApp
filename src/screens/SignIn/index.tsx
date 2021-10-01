import React, { useContext } from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import IllustraionImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";


export function SignIn(){
  const { loading, signIn } = useAuth();

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
          {
            loading ? <ActivityIndicator color={theme.colors.primary}/>
            :
            <ButtonIcon 
              title="Entrar com Discord"
              activeOpacity={0.7}
              onPress={handleSingnIn}
            />  
          }          
        </View>
      </View>
    )
  }
  
