import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

interface ButtonIconProps extends RectButtonProps {
  text: string;
}

//Tambem pode fazer assimp

// type ButtonIconProps = TouchableOpacityProps & {
//   text: string;
// }

//RectButton fica melhor

export const ButtonIcon = ({ text, ...rest }: ButtonIconProps) => (
  <RectButton style={styles.container} {...rest}>
    <View style={styles.iconWrapper}>
      <Image style={styles.icon} source={DiscordImg} />
    </View>
    <Text style={styles.title}>{text}</Text>
  </RectButton>
);
