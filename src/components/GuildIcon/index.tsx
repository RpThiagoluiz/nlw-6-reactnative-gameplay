import React from "react";
import { Image } from "react-native";
import { CDN_IMAGE } from "../../configs";
import DiscordSvg from "../../assets/discord.svg";
import { styles } from "./styles";

type Props = {
  guildId: string;
  iconId: string | null;
};

export const GuildIcon = ({ guildId, iconId }: Props) => {
  const uriNoImage =
    "https://cdn.iconscout.com/icon/free/png-256/discord-3-569463.png";

  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  if (iconId) {
    return <Image source={{ uri }} resizeMode="cover" style={styles.image} />;
  }

  return (
    <DiscordSvg width={48} height={48} />
    // <Image
    //   source={{ uri: uriNoImage }}
    //   resizeMode="cover"
    //   style={styles.image}
    // />
  );
};
