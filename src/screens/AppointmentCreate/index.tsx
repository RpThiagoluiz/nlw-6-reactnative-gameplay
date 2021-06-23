import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { InputSmall } from "../../components/InputSmall";
import { InputTextField } from "../../components/InputTextField";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { GuildProps } from "../../@types/appointmentExpo";

//ImageBackground -> Container que pode receber uma imagem de fundo, e um texto.

export const AppointmentCreate = () => {
  const [category, setCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
    //se ja tiver selecionado vc desmarca
  };

  const handleOpenGuilds = () => {
    setIsModalOpen(true);
  };
  const handleGuildSelect = (guildSelect: GuildProps) => {
    setGuild(guildSelect);
    setIsModalOpen(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <Header title="Agendar Partida" />

        <Text
          style={[
            styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18 },
          ]}
        >
          Categoria
        </Text>
        <View>
          <CategorySelect
            hasCheckBox
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
        </View>

        <View style={styles.form}>
          <RectButton onPress={handleOpenGuilds}>
            <View style={styles.select}>
              {guild.icon ? <GuildIcon /> : <View style={styles.noImage} />}

              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  {guild.name ? guild.name : "Selecione um servidor"}
                </Text>
              </View>

              <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />
            </View>
          </RectButton>

          <View style={styles.field}>
            <View>
              <Text style={[styles.label, { marginBottom: 5 }]}>Dia e mês</Text>
              <View style={styles.column}>
                <InputSmall maxLength={2} />
                <Text style={styles.divider}>/</Text>
                <InputSmall maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={[styles.label, { marginBottom: 5 }]}>
                Hora e minuto
              </Text>

              <View style={styles.column}>
                <InputSmall maxLength={2} />
                <Text style={styles.divider}>:</Text>
                <InputSmall maxLength={2} />
              </View>
            </View>
          </View>

          <View>
            <View style={styles.textAreaContainer}>
              <Text style={styles.label}>Descricao</Text>
              <Text style={styles.infoTextArea}>Max 100 caracteres</Text>
            </View>
            <InputTextField
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
          </View>
          <View style={styles.footer}>
            <Button text="Agendar" />
          </View>
        </View>
      </ScrollView>

      <ModalView visible={isModalOpen}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
};
