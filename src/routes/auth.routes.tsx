import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { SignIn } from "../screens/SignIn";

const AuthStack = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <AuthStack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
            />
            <AuthStack.Screen
                name="Home"
                component={Home}
            />            
        </AuthStack.Navigator>
    )
}