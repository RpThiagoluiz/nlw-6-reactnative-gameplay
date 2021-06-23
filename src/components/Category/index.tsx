import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

interface CategoryProps extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>; //Ele vai pra maiusculo, porq todo component comeca com letra maiuscula, e ele foi tipado como FC
  checked?: boolean;
  hasCheckBox?: boolean;
}

export const Category = ({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: CategoryProps) => {
  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[theme.colors.secondary80, theme.colors.secondary100]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[
            checked ? theme.colors.secondary85 : theme.colors.secondary50,
            theme.colors.secondary40,
          ]}
        >
          {hasCheckBox && (
            <View style={checked ? styles.checked : styles.check} />
          )}

          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
};
