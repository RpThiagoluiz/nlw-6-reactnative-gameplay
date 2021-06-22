import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { Background } from "./src/components/Background";
import { Routes } from "./src/navigation/";

// precisa ser default
//Lembra q o react, tem q ta pra ele intender a syntaxe JSX ou TSX
export default function App() {
  //Async, depende da velocidade do dispositivo, da internet, leitura, escrita, armazenamento.
  //useFonts, retornar boolean ou null
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    //Component para segurar a tela de splash do App
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}
