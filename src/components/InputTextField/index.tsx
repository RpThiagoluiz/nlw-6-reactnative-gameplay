import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

export const InputTextField = ({ ...rest }: TextInputProps) => {
  return <TextInput style={styles.container} {...rest} />;
};
