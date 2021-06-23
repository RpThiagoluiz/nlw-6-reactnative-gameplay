import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  title: string;
  action?: React.ReactNode;
};

export const Header = ({ title, action }: Props) => {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  //BorderlessButton -> Indicado para botoes que vc nao tem borda, nao tem texto, tem somente conteudo visual, tipo icone, svg, imagem.

  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary100, theme.colors.secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={theme.colors.heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action && <View>{action}</View>}
    </LinearGradient>
  );
};
