import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

interface ButtonIconProps extends TouchableOpacityProps {
  text: string;
}

//Tambem pode fazer assimp

// type ButtonIconProps = TouchableOpacityProps & {
//   text: string;
// }

export const ButtonIcon = ({ text, ...rest }: ButtonIconProps) => (
  <TouchableOpacity style={styles.container} {...rest}>
    <View style={styles.iconWrapper}>
      <Image style={styles.icon} source={DiscordImg} />
    </View>
    <Text style={styles.title}>{text}</Text>
  </TouchableOpacity>
);
