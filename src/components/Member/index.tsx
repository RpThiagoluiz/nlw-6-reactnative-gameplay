import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { memberProps } from "../../@types/member";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  data: memberProps;
};

export const Member = ({ data }: Props) => {
  const isOnline = data.status === "online";

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />
      <View>
        <Text style={styles.title}>{data.username}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline
                  ? theme.colors.on
                  : theme.colors.primary,
              },
            ]}
          />

          <Text style={styles.nameStatus}>
            {isOnline ? "Disponivel" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
};
