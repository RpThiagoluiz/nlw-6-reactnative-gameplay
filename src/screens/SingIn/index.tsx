import React from "react";
import { View, Image, Text, StatusBar } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import IllustraionImg from "../../assets/illustration.png";
import { styles } from "./styles";

export const SingIn = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustraionImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          {/* {`\n`} so pra quebra de linha */}
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente{`\n`}
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Text>

        <ButtonIcon text="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
};
