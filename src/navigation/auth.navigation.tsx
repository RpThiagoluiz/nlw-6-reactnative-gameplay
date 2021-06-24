import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SingIn } from "../screens/SingIn";
import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => (
  <Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: theme.colors.secondary100,
      },
    }}
  >
    <Screen name="SignIn" component={SingIn} />

  </Navigator>
);
