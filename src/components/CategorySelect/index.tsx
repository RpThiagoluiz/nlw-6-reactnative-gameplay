import React from "react";
import { View, Text, ScrollView } from "react-native";
import {} from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

import { styles } from "./styles";

interface CategorySelectProps {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
}

export const CategorySelect = ({
  categorySelected,
  setCategory,
}: CategorySelectProps) => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
};
