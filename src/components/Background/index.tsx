import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface BackgroundProps {
  children: React.ReactNode;
}

export const Background = ({ children }: BackgroundProps) => (
  <LinearGradient
    style={styles.container}
    colors={[theme.colors.secondary85, theme.colors.secondary60]}
  >
    {children}
  </LinearGradient>
);
