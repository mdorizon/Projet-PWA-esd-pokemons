import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function CocktailsLayout() {

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <Stack>
      <Stack.Screen name="details/[id]" options={{title: "Détails Pokemon"}}/>
      <Stack.Screen name="search/[query]" options={{title: "Recherche Pokemon"}}/>
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Pokémons", headerShown: false }}
      />
    </Stack>
  )
}
