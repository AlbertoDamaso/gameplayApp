import React from 'react';
import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props){
  const [guilds, setGuilds] = useState<GuildProps[]>([]);

    return (
    <View style={styles.container}>
        <FlatList
            data={guilds}
            style={styles.guilds}
            keyExtractor={item => item.id}
            ListHeaderComponent={() => <ListDivider isCentered/>}
            ItemSeparatorComponent={() => <ListDivider isCentered/>}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
            renderItem={({ item }) => (
                <Guild
                    data={item}
                    onPress={() => handleGuildSelect(item)}
                />
            )}
        />
    </View>)
}
