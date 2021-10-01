import React from "react";
import AppLoading from 'expo-app-loading';
import { StatusBar } from "react-native"
import { useFonts } from 'expo-font';
import { Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Background } from './src/components/Background';
import { AuthProvider } from "./src/hooks/auth";
import { Routes } from "./src/routes";

export default function App(){
  const [fontsLoaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Background>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />

      <AuthProvider>
        <Routes/>
      </AuthProvider>  
    </Background>
  )
}
