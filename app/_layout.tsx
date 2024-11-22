import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function CocktailsLayout() {

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
  
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="pokemons" options={{headerShown: false}}/>
    </Stack>
  )
}