import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { SingIn } from "../screens/SingIn";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";
import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => (
  <Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        // backgroundColor: "transparent", se ficar transparente no iphone quando vc muda de tela vc consegue ver a tela de tras, fica meio ruim a tansicao.
        backgroundColor: theme.colors.secondary100,
      },
    }}
  >
    <Screen name="SignIn" component={SingIn} />
    <Screen name="Home" component={Home} />
    <Screen name="AppointmentDetails" component={AppointmentDetails} />
    <Screen name="AppointmentCreate" component={AppointmentCreate} />
  </Navigator>
);
