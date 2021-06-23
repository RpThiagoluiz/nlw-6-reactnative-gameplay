import React from "react";
import { View, FlatList } from "react-native";
import { GuildProps } from "../../@types/appointmentExpo";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export const Guilds = ({ handleGuildSelect }: Props) => {
  const guilds = [
    {
      id: "1",
      name: "lendarios",
      icon: "test.png",
      owner: true,
    },
    {
      id: "10",
      name: "Feeder",
      icon: "test.png",
      owner: true,
    },
    {
      id: "100",
      name: "Bola Gatos",
      icon: "test.png",
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
      />
    </View>
  );
};
