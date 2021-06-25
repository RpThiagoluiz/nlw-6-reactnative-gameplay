import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  FlatList,
  Alert,
  Share,
  Platform,
} from "react-native";
import * as Linking from "expo-linking";
import { BorderlessButton } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { api } from "../../services/api";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Load } from "../../components/Load";
import { AppointmentExpoProps } from "../../@types/appointmentExpo";
import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import { memberProps } from "../../@types/member";
import { styles } from "./styles";

//ImageBackground -> Container que pode receber uma imagem de fundo, e um texto.

type ParamsProps = {
  guildSelected: AppointmentExpoProps;
};

type GuildWidgetProps = {
  id: string;
  name: string;
  instant_invite: string;
  members: memberProps[];
  presence_count: number;
};

export const AppointmentDetails = () => {
  const [widget, setWidget] = useState<GuildWidgetProps>(
    {} as GuildWidgetProps
  );
  const [loading, setLoading] = useState(true);

  const { params } = useRoute();
  const { guildSelected } = params as ParamsProps;

  const fetchGuildWidget = async () => {
    //Widget.json, tras varias informacoes do servidor, nem todos os servidores vao ter isso, alguns nao vao ter. Rotas somente para bots
    //Tem que habilitar por servidor, dependendo do server.
    try {
      const { data } = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );

      setWidget(data);
    } catch (error) {
      Alert.alert(
        `Error`,
        `Verifiquei as configuracoes do servidor, para esse tipo de acao precisamos que o widget do servidor esteja habilitado, fale com um adm do server.`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleShareInvitation = () => {
    const message =
      Platform.OS === "ios"
        ? `Junti-se aos BRABOS, ${guildSelected.guild.name}!`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  };

  const handleOpenGuild = () => {
    //lidar com redirect

    Linking.openURL(widget.instant_invite);
  };

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" color={theme.colors.primary} size={24} />
            </BorderlessButton>
          )
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={
              widget.presence_count
                ? `Total ${widget.presence_count}`
                : `Sem permissao`
            }
          />
          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            style={styles.members}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            renderItem={({ item }) => <Member data={item} />}
          />
        </>
      )}

      {guildSelected.guild.owner && (
        <View style={styles.footer}>
          <ButtonIcon text="Entrar na partida" onPress={handleOpenGuild} />
        </View>
      )}
    </Background>
  );
};
