import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { AppointmentCreate } from '../screens/AppointmentCreate'

const RootStack = createNativeStackNavigator();

declare global {
    namespace ReactNavigation {
        interface RootParamList{
            SignIn: undefined,
            Home: undefined,
            AppointmentDetails: undefined,
            AppointmentCreate: undefined
        }
    }
}

export function AppRoutes(){
    return(
        <RootStack.Navigator 
            screenOptions={{
                headerShown: false,
                contentStyle: {backgroundColor: 'transparent'}
            }}
        >
            <RootStack.Screen
                name="Home"
                component={Home}
            />            
            <RootStack.Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />    
            <RootStack.Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />                         
        </RootStack.Navigator>
    )
}