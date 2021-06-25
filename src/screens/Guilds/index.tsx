import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { GuildProps } from "../../@types/appointmentExpo";
import { Guild } from "../../components/Guild";
import { Load } from "../../components/Load";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";
import { api } from "../../services/api";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export const Guilds = ({ handleGuildSelect }: Props) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGuilds = async () => {
    const { data } = await api.get("/users/@me/guilds");

    setGuilds(data);
    setLoading(false);
    //console.log(data);
  };

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={guilds}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          ListHeaderComponent={() => <ListDivider isCentered />}
          contentContainerStyle={{ paddingVertical: 70 }}
          showsVerticalScrollIndicator={false}
          style={styles.guilds}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelect(item)} />
          )}
        />
      )}
    </View>
  );
};
