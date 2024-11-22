import { Stack } from "expo-router";

export default function CocktailsLayout() {
  return (
    <Stack>
      <Stack.Screen name="details/[id]" options={{title: "Détails Pokemon"}}/>
      <Stack.Screen name="search/[query]" options={{title: "Recherche Pokemon"}}/>
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Tabs", headerShown: false }}
      />
    </Stack>
  )
}
