import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.navigation";

// NavigationContainer -> guarda o contexto das rotas, como proxima e anterior por exemplo.

export const Routes = () => (
  <NavigationContainer>
    <AuthRoutes />
  </NavigationContainer>
);
