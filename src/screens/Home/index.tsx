import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { Load } from "../../components/Load";

import { styles } from "./styles";
import { AppointmentExpoProps } from "../../@types/appointmentExpo";

export const Home = () => {
  const [category, setCategory] = useState("");
  const [appointments, setAppointments] = useState<AppointmentExpoProps[]>([]);
  const [loading, setLoading] = useState(true);

  const { navigate } = useNavigation();

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
    //se ja tiver selecionado vc desmarca
  };

  const handleAppointment = (guildSelected: AppointmentExpoProps) => {
    //pode passar como params, a guildSelected
    navigate("AppointmentDetails", { guildSelected });
  };

  const handleAppointmentCreate = () => {
    navigate("AppointmentCreate");
  };

  const loadAppointments = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointmentsStorage: AppointmentExpoProps[] = storage
      ? JSON.parse(storage)
      : [];

    if (category) {
      setAppointments(
        appointmentsStorage.filter((item) => item.category === category)
      );
    } else {
      setAppointments(appointmentsStorage);
    }

    setLoading(false);
  };

  //useFocusEffect(() => {})
  useFocusEffect(
    useCallback(() => {
      loadAppointments();
      //toda vez que mudar o category, ele vai trazer um novo pra min
    }, [category])
  );

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        {loading ? (
          <Load isCentered />
        ) : (
          <>
            <ListHeader
              title="Partidas agendadas"
              subtitle={`Total ${appointments.length}`}
            />
            <FlatList
              data={appointments}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <ListDivider />}
              //ta dando um espaco a mais de respiro, ele ta na altura de 1
              contentContainerStyle={{ paddingBottom: 69 }}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleAppointment(item)}
                />
              )}
            />
          </>
        )}
      </View>
    </Background>
  );
};
