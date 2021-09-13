import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props){
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Lixo',
            icon: 'image.png',
            owner: false
        },
        {
            id: '3',
            name: 'Mestre',
            icon: 'image.png',
            owner: true
        }
    ]

    return (
    <View style={styles.container}>
        <FlatList
            data={guilds}
            style={styles.guilds}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <ListDivider/>}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <Guild
                    data={item}
                    onPress={() => handleGuildSelect(item)}
                />
            )}
        />
    </View>)
}
