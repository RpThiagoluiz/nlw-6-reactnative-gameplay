import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GuildIcon } from "../GuildIcon";
import { AppointmentExpoProps } from "../../@types/appointmentExpo";
import { categories } from "../../utils/categories";
import PlayerSvg from "../../assets/player.svg";
import CalendarSVG from "../../assets/calendar.svg";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface AppointmentProps extends RectButtonProps {
  data: AppointmentExpoProps;
}

export const Appointment = ({ data, ...rest }: AppointmentProps) => {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  //No svg tiver o fill, e vc passar assim <PlayerSvg fill={owner ? primary : on} /> Vai valer somente oque esta definido no svg.

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[theme.colors.secondary50, theme.colors.secondary70]}
        >
          <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSVG />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? "Anfitriao" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
};
