import { Tabs } from "expo-router";

export default function CocktailsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title: "Liste Pokémons"}}/>
      <Tabs.Screen name="random/index" options={{title: "Pokémon Random"}}/>
      <Tabs.Screen name="types" options={{headerShown: false}}/>
    </Tabs>
  )
}
