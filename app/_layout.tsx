import { Tabs } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function CocktailsLayout() {

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
  
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title: "Accueil", headerShown: false}}/>
      <Tabs.Screen name="pokemons" options={{title: "Pokemons", headerShown: false}}/>
      <Tabs.Screen name="poke-types" options={{title: "Types", headerShown: false}}/>
    </Tabs>
  )
}