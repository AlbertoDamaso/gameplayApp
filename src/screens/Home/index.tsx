import React, { useState } from "react";
import { View, FlatList } from 'react-native';
import { useNavigation  } from "@react-navigation/native";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Appointment } from "../../components/Appointment";
import { CategorySelect } from "../../components/CategorySelect";
import { styles } from "./styles";


export function Home(){
    const [category, setCategory] = useState('')
    const navigation = useNavigation();
    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da m10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da m10'
        },   
        {
            id: '3',
            guild: {
                id: '3',
                name: 'Lixo',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da m10'
        },     
        {
            id: '4',
            guild: {
                id: '1',
                name: 'Mestre',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da m10'
        },     
        {
            id: '5',
            guild: {
                id: '1',
                name: 'Noob',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da m10'
        },     
        {
            id: '6',
            guild: {
                id: '1',
                name: 'Noob Lv1',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da m10'
        }               
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails')
    }
    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate')
    }    

    return(
        <Background>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            
            <ListHeader
                title="Partidas agendadas"
                subtitle="Total 6"
            />

            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                style={styles.matches}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider/>}
                contentContainerStyle={{ paddingBottom: 69 }}
                renderItem={({ item }) => (
                    <Appointment 
                        data={item}
                        onPress={handleAppointmentDetails}
                    />
                )}
            />            
        </Background>
    )
}