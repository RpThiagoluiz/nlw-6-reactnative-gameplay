import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "react-native";
import { styles } from "./styles";

interface ButtonIconProps extends RectButtonProps {
  text: string;
}

export const Button = ({ text, ...rest }: ButtonIconProps) => (
  <RectButton style={styles.container} {...rest}>
    <Text style={styles.title}>{text}</Text>
  </RectButton>
);
