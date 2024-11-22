import { Stack } from "expo-router";

export default function CocktailsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Liste Pokemons"}}/>
      <Stack.Screen name="details/[id]" options={{title: "Pokemon Details"}}/>
      <Stack.Screen name="search/[query]" options={{title: "Pokemon Search"}}/>
      <Stack.Screen name="random/index" options={{title: "Pokemon Random"}}/>
    </Stack>
  )
}
