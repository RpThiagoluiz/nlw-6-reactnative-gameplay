import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

//Nao to usando a bordar do container, contudo posso criar uma view e passar os valores da bordar do container para ele.
export const styles = StyleSheet.create({
  container: {
    width: 62,
    height: 66,
    borderRadius: 8,
    backgroundColor: theme.colors.highlight,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: 66,
    height: 66,
    borderRadius: 8,
  },
});
