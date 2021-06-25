import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.navigation";
import { AuthRoutes } from "./auth.navigation";

// NavigationContainer -> guarda o contexto das rotas, como proxima e anterior por exemplo.

export const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
