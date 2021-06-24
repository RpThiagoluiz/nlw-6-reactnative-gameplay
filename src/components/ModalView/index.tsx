import React from "react";
import {
  Modal,
  View,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";
import { Background } from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
  children: React.ReactNode;
  closeModal: () => void;
};

//Identificar o click do usuario,
export const ModalView = ({ children, closeModal, ...rest }: Props) => {
  //statusBarTranslucent Pro modal deixar tudo atraz translucent
  return (
    <Modal transparent animationType="fade" statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
