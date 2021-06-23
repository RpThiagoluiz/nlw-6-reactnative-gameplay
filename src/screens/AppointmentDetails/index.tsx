import React from "react";
import { ImageBackground, Text, View, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";

//ImageBackground -> Container que pode receber uma imagem de fundo, e um texto.

export const AppointmentDetails = () => {
  const members = [
    {
      id: "1",
      username: "Thiago",
      avatar_url: "https://github.com/RpThiagoluiz.png",
      status: "online",
    },
    {
      id: "10",
      username: "Thiago",
      avatar_url: "https://github.com/RpThiagoluiz.png",
      status: "online",
    },
    {
      id: "100",
      username: "Thiago",
      avatar_url: "https://github.com/RpThiagoluiz.png",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" color={theme.colors.primary} size={24} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendário</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da
            md10!
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        style={styles.members}
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({ item }) => <Member data={item} />}
      />

      <View style={styles.footer}>
        <ButtonIcon text="Entrar na partida" />
      </View>
    </Background>
  );
};
