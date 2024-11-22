import { Stack } from "expo-router";

export default function CocktailsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Liste Types"}}/>
      <Stack.Screen name="list-types/[type]" options={{title: "Pokemon List By Types"}}/>
    </Stack>
  )
}