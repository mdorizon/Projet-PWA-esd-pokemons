import {ActivityIndicator, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import useGetPokemonById from "@/hook/useGetPokemonById";
import PokemonCard from "@/components/PokemonCard";
import pokemonListStyles from "@/styles/pokemonList";
import { PokemonDto } from "@/types/poke-types";

export default function Index() {
  const local = useLocalSearchParams()
  const pokemon: PokemonDto = useGetPokemonById(local.id)

  return (
    <View style={pokemonListStyles.container}>
      {(!pokemon || pokemon.length === 0) ? (
        <View style={pokemonListStyles.loaderContainer}>
          <ActivityIndicator size="large" color="#20639b" />
          <Text style={pokemonListStyles.loaderText}>Chargement du Pokémon...</Text>
        </View>
      ) : (
        <View style={pokemonListStyles.container}>
          <View style={pokemonListStyles.list}>
            <PokemonCard pokemon={pokemon} isHorizontal={false} />
          </View>
        </View>
      )}
    </View>
  );
}