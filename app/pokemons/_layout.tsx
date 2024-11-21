import { Stack } from "expo-router";

export default function CocktailsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "liste"}}/>
      <Stack.Screen name="poke-types/index" options={{title: "Liste Types"}}/>
    </Stack>
  )
}
