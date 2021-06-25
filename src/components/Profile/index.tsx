import React from "react";
import { View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export const Profile = () => {
  const { user, singOut } = useAuth();

  const handleSingOut = () => {
    Alert.alert(`Logout`, `Deseja sair do Gameplay?`, [
      {
        text: "Nao",
        style: "cancel",
      },
      {
        text: "Sim",
        style: "destructive",
        onPress: () => singOut(),
      },
    ]);
  };

  if (user) {
    return (
      <View style={styles.container}>
        <RectButton onPress={handleSingOut}>
          <Avatar urlImage={user.avatar} />
        </RectButton>

        <View>
          <View style={styles.user}>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.username}>{user.firstName}</Text>
          </View>

          <Text style={styles.message}>Hoje é dia de vitória</Text>
        </View>
      </View>
    );
  }

  return <Text>Bad Request BROW</Text>;
};
