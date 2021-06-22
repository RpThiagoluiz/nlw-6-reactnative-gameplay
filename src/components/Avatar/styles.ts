import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

//Esse container, ta somente para ajudar a fazer a borda em degrade.
//Para melhorar, vc coloca a imagem um pouco melhor que o tamanho do container

export const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 22,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 8,
  },
});
