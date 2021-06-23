import React from "react";
import { Modal, View, ModalProps } from "react-native";
import { Background } from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
  children: React.ReactNode;
};

export const ModalView = ({ children, ...rest }: Props) => {
  return (
    <Modal transparent animationType="fade" {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
};
