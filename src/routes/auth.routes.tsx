import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { SignIn } from "../screens/SignIn";
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { AppointmentCreate } from '../screens/AppointmentCreate'


type RootStackParamList = {
    SignIn: undefined,
    Home: undefined,
    AppointmentDetails: undefined,
    AppointmentCreate: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes(){
    return(
        <RootStack.Navigator 
            screenOptions={{
                headerShown: false,
                contentStyle: {backgroundColor: 'transparent'}
            }}
        >
            <RootStack.Screen
                name="SignIn"
                component={SignIn}
            />
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