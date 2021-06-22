import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import IllustraionImg from "../../assets/illustration.png";
import { styles } from "./styles";

export const SingIn = () => {
  const { navigate } = useNavigation();

  const handleSingIn = () => {
    navigate("Home");
  };

  return (
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

        <ButtonIcon text="Entrar com Discord" onPress={handleSingIn} />
      </View>
    </View>
  );
};
