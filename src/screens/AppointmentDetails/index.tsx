import React from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import BannerImg from '../../assets/banner.png';
import { styles } from "./styles";
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';


export function AppointmentDetails(){
  const members = [
    {
      id: '1',
      username: 'Alberto Damaso',
      avatar_url: 'https://github.com/AlbertoDamaso.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Hadley',
      avatar_url: 'https://github.com/hadley.png',
      status: 'offline'
    },
    {
      id: '3',
      username: 'Daniel',
      avatar_url: 'https://github.com/dpgaspar.png',
      status: 'online'
    },
  ]
  
  return (
      <View style={styles.container}>
        <Header
          title="Detalhes"
          action={
            <TouchableOpacity>
              <Fontisto
                name="share"
                size={24}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
          }
        />
        <ImageBackground 
          source={BannerImg}
          style={styles.banner}
        >
          <View style={styles.bannerContent}>
            <Text style={styles.title}>
              Lendários
            </Text>
            <Text style={styles.subtitle}>
              É hoje que vamos chegar ao challenger sem perder uma partida da md10
            </Text>
          </View>
        </ImageBackground>

        <ListHeader
          title="Jogadores"
          subtitle="Total 3"
        />

        <FlatList
          data={members}
          keyExtractor={item => item.id}
          style={styles.members}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider isCentered/>}
          renderItem={({ item }) => (
            <Member data={item}/>
          )}
        />

        <View style={styles.footer}>
          <ButtonIcon title="Entrar na partida"/>
        </View>
      </View>

  )
}
