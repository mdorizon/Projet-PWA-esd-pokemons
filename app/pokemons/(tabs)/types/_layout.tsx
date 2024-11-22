import { Stack } from "expo-router";

export default function CocktailsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="list-types/[type]" options={{title: "Pokémon Par Type"}}/>
    </Stack>
  )
}