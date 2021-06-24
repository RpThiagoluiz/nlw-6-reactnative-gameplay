import React from "react";
import { View, Image, Text,Alert,ActivityIndicator } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import IllustraionImg from "../../assets/illustration.png";
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";

export const SingIn = () => {
  const {singIn, loading} = useAuth()

  const handleSingIn = async () => {
   // navigate("Home");
   try {
    await singIn()
   } catch (error) {
     Alert.alert(error.message)
   }
  };

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustraionImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            {/* {`\n`} so pra quebra de linha */}
            Conecte-se {`\n`}e organize suas {`\n`} jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
          </Text>

          {loading ? (<ActivityIndicator color={theme.colors.primary} size={40}/>) : (<ButtonIcon text="Entrar com Discord" onPress={handleSingIn} />)}
        </View>
      </View>
    </Background>
  );
};
