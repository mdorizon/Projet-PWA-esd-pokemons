import PokemonCard from "@/components/PokemonCard";
import useGetPokemons from "@/hook/useGetPokemons";
import globalStyles from "@/styles/globalStyles";
import pokemonListStyles from "@/styles/pokemonList";
import { PokemonDto } from "@/types/poke-types";
import { View, ActivityIndicator, Text } from "react-native";

export default function Index() {
  const pokemons: PokemonDto[] = useGetPokemons();

  const getRandomElement = (array: PokemonDto[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return pokemons[randomIndex];
  };

  return (
    <View style={pokemonListStyles.container}>
      {(!pokemons || pokemons.length === 0) ? (
        <View style={pokemonListStyles.loaderContainer}>
          <ActivityIndicator size="large" color="#20639b" />
          <Text style={pokemonListStyles.loaderText}>Chargement du Pokémon...</Text>
        </View>
      ) : (
          <View style={globalStyles.container}>
            <PokemonCard pokemon={getRandomElement(pokemons)} isHorizontal={false}/>
          </View>
      )}
    </View>
  );
}
