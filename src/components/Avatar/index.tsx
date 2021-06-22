import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface AvatarProps {
  urlImage: string;
}

export const Avatar = ({ urlImage }: AvatarProps) => {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
};
