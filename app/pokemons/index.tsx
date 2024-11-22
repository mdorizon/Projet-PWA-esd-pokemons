import React from "react";
import PokemonCard from "@/components/PokemonCard";
import useGetPokemons from "@/hook/useGetPokemons";
import { PokemonDto } from "@/types/poke-types";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import pokemonListStyles from "@/styles/pokemonList";

export default function Index() {
  const pokemons: PokemonDto[] = useGetPokemons();

  if (!pokemons || pokemons.length === 0) {
    return (
      <View style={pokemonListStyles.loaderContainer}>
        <ActivityIndicator size="large" color="#20639b" />
        <Text style={pokemonListStyles.loaderText}>Chargement des Pokémon...</Text>
      </View>
    );
  }

  return (
    <View style={pokemonListStyles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PokemonCard pokemon={item} isHorizontal={false} />}
        contentContainerStyle={pokemonListStyles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}