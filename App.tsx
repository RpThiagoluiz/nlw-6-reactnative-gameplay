import React from "react";
import { StatusBar , LogBox} from "react-native";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { Background } from "./src/components/Background";
import {AuthProvider} from "./src/hooks/auth"
import { Routes } from "./src/navigation/";


//LogBox pra ignorar somente o log especifico do user redirect
LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.'])



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
      <AuthProvider>
      <Routes />
      </AuthProvider>

    </Background>
  );
}
