import { Tabs } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{ 
          title: "Accueil",
        }} 
        />
      <Tabs.Screen 
        name="pokemons" 
        options={{ 
          title: "Liste Pokemons",
          headerShown: false,
        }}
      />
    </Tabs>
  )
}
