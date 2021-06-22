import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { SingIn } from "../screens/SingIn";

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes = () => (
  <Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: "transparent",
      },
    }}
  >
    <Screen name="SignIn" component={SingIn} />
    <Screen name="Home" component={Home} />
  </Navigator>
);
