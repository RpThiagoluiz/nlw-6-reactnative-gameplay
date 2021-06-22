import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export const GuildIcon = () => {
  const uri =
    "https://cdn.iconscout.com/icon/free/png-256/discord-3-569463.png";

  return (
    <Image source={{ uri: uri }} resizeMode="cover" style={styles.image} />
  );
};
