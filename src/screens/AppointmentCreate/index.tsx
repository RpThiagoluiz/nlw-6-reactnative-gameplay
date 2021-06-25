import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { InputSmall } from "../../components/InputSmall";
import { InputTextField } from "../../components/InputTextField";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Background } from "../../components/Background";
import { Guilds } from "../Guilds";
import { theme } from "../../global/styles/theme";
import { GuildProps } from "../../@types/appointmentExpo";
import { styles } from "./styles";

//ImageBackground -> Container que pode receber uma imagem de fundo, e um texto.

export const AppointmentCreate = () => {
  const [category, setCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  //Validar os campos!
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  const { navigate } = useNavigation();

  const handleCategorySelect = (categoryId: string) => {
    //categoryId === category ? setCategory("") : setCategory(categoryId);
    //se ja tiver selecionado vc desmarca
    setCategory(categoryId);
  };

  const handleOpenGuilds = () => {
    setIsModalOpen(true);
  };

  const handleCloseGuilds = () => {
    setIsModalOpen(false);
  };

  const handleGuildSelect = (guildSelect: GuildProps) => {
    setGuild(guildSelect);
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} ás ${hour}:${minute}`,
      description,
    };

    //Send to one backEnd ?!

    //Pegar os que tem
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );
    navigate("Home");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Background>
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
                {guild.icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <View style={styles.noImage} />
                )}

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
                <Text style={[styles.label, { marginBottom: 5 }]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <InputSmall maxLength={2} onChangeText={setDay} />
                  <Text style={styles.divider}>/</Text>
                  <InputSmall maxLength={2} onChangeText={setMonth} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 5 }]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <InputSmall maxLength={2} onChangeText={setHour} />
                  <Text style={styles.divider}>:</Text>
                  <InputSmall maxLength={2} onChangeText={setMinute} />
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
                onChangeText={setDescription}
              />
            </View>
            <View style={styles.footer}>
              <Button text="Agendar" onPress={handleSubmit} />
            </View>
          </View>
        </ScrollView>

        <ModalView visible={isModalOpen} closeModal={handleCloseGuilds}>
          <Guilds handleGuildSelect={handleGuildSelect} />
        </ModalView>
      </Background>
    </KeyboardAvoidingView>
  );
};
