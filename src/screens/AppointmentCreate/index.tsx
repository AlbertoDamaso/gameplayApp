import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { CategorySelect } from '../../components/CategorySelect';
import { SmallInput } from '../../components/SmallInput';
import { ModalView } from '../../components/ModalView';
import { GuildIcon } from '../../components/GuildIcon';
import { TextArea } from '../../components/TextArea';
import { GuildProps } from '../../components/Guild';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';
import { styles } from "./styles";


export function AppointmentCreate(){
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds(){
    setOpenGuildsModal(true);
  }
  function handleCloseGuilds(){
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps){
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <Header
          title="Agendar Partida"
        />
        <Text 
          style={[
            styles.label,
            { marginTop: 36, marginLeft: 24, marginBottom: 18}
        ]}>
          Categoria
        </Text>

        <CategorySelect
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />

        <View style={styles.form}>
          <TouchableOpacity onPress={handleOpenGuilds}>
            <View style={styles.select}>
              {
                guild.icon ? <GuildIcon/> : <View style={styles.image}/>
              }
              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  { guild.name ? guild.name : 'Selecione um servidor' }
                </Text>
              </View>

              <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.field}>
            <View>
              <Text style={[
                styles.label,
                { marginBottom: 12}
              ]}>
                Dia e mês
              </Text>
              <View style={styles.column}>
                <SmallInput maxLength={2}/>
                <Text style={styles.divider}>
                  /
                </Text>
                <SmallInput maxLength={2}/>
              </View>              
            </View>

            <View>
              <Text style={[
                styles.label,
                { marginBottom: 12}
              ]}>
                Hora e minuto
              </Text>
              <View style={styles.column}>
                <SmallInput maxLength={2}/>
                <Text style={styles.divider}>
                  :
                </Text>
                <SmallInput maxLength={2}/>
              </View>              
            </View>
          </View>   

          <View style={[
            styles.field,
            { marginBottom: 12}
          ]}>
            <Text style={styles.label}>
              Descrição
            </Text>
            <Text style={styles.caracteresLimit}>
              Max 100 caracteres
            </Text>
          </View>    
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />

          <View style={styles.footer}>
            <Button title={"Agendar"}/>
          </View>
        </View>
      </ScrollView>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect}/>
      </ModalView>
    </KeyboardAvoidingView>
  )
}