import {ActivityIndicator, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PokemonCard from "@/components/PokemonCard";
import pokemonListStyles from "@/styles/pokemonList";
import { PokemonDto } from "@/types/poke-types";
import useGetPokemonByName from "@/hook/useGetPokemonByName";

export default function Index() {
  const { query } = useLocalSearchParams()
  const pokemon: PokemonDto = useGetPokemonByName(query)

  return (
    <View style={pokemonListStyles.container}>
      {(!pokemon || pokemon.length === 0) ? (
        <View style={pokemonListStyles.loaderContainer}>
          <ActivityIndicator size="large" color="#20639b" />
          <Text style={pokemonListStyles.loaderText}>Chargement du Pokémon...</Text>
        </View>
      ) : (
        <PokemonCard pokemon={pokemon} isHorizontal={false} />
      )}
    </View>
  );
}