import React from "react";
import { ScrollView } from "react-native";
import {} from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

import { styles } from "./styles";

interface CategorySelectProps {
  categorySelected: string;
  hasCheckBox?: boolean;
  setCategory: (categoryId: string) => void;
}

export const CategorySelect = ({
  categorySelected,
  hasCheckBox = false,
  setCategory,
}: CategorySelectProps) => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 24 }}
    >
      {categories.map((category) => (
        <Category
          hasCheckBox={hasCheckBox}
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
