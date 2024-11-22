import React from "react";
import PokemonCard from "@/components/PokemonCard";
import { PokemonDto } from "@/types/poke-types";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import pokemonListStyles from "@/styles/pokemonList";
import { useLocalSearchParams } from "expo-router";
import useGetPokemonByType from "@/hook/useGetPokemonByType";

export default function Index() {
  const { type } = useLocalSearchParams()
  const pokemons: PokemonDto[] = useGetPokemonByType(type);

  return (
    <View style={pokemonListStyles.container}>
      {(!pokemons || pokemons.length === 0) ? (
        <View style={pokemonListStyles.loaderContainer}>
          <ActivityIndicator size="large" color="#20639b" />
          <Text style={pokemonListStyles.loaderText}>Chargement du Pokémon...</Text>
        </View>
      ) : (
        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PokemonCard pokemon={item} isHorizontal={false} />}
          contentContainerStyle={pokemonListStyles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}