import React from "react";
import { View, ActivityIndicator } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = {
  isCentered?: boolean;
};

export function Load({ isCentered = false }: Props) {
  return (
    <View style={[styles.container, isCentered && { paddingVertical: 100 }]}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
}
