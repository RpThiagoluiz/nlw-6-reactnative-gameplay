import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Appointment } from "../../components/Appointment";

import { styles } from "./styles";

export const Home = () => {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: { id: "1", name: "Lendarios", icon: null, owner: true },
      category: "1",
      date: "22/06 as 20:40h",
      description:
        "E hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "3",
      guild: { id: "1", name: "Lendarios", icon: null, owner: true },
      category: "1",
      date: "22/06 as 20:40h",
      description:
        "E hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "45",
      guild: { id: "1", name: "Lendarios", icon: null, owner: true },
      category: "1",
      date: "22/06 as 20:40h",
      description:
        "E hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
    //se ja tiver selecionado vc desmarca
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />
          <FlatList
            data={appointments}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Appointment data={item} />}
          />
        </View>
      </View>
    </View>
  );
};
