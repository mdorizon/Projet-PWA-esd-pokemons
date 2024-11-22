import PokemonCard from "@/components/PokemonCard";
import useGetPokemons from "@/hook/useGetPokemons";
import pokemonListStyles from "@/styles/pokemonList";
import { PokemonDto } from "@/types/poke-types";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";

export default function Index() {
  const pokemons: PokemonDto[] = useGetPokemons();
  const [randomPokemon, setRandomPokemon] = useState<PokemonDto | null>(null);

  const getRandomElement = (array: PokemonDto[]) => {
    if (array.length === 0) return null; // Sécurité supplémentaire
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  useFocusEffect(
    React.useCallback(() => {
      if (pokemons && pokemons.length > 0) {
        setRandomPokemon(getRandomElement(pokemons));
      }
    }, [pokemons])
  );

  return (
    <View style={pokemonListStyles.container}>
      {(!pokemons || pokemons.length === 0) ? (
        <View style={pokemonListStyles.loaderContainer}>
          <ActivityIndicator size="large" color="#20639b" />
          <Text style={pokemonListStyles.loaderText}>Chargement du Pokémon...</Text>
        </View>
      ) : (
        <View style={pokemonListStyles.container}>
          <View style={pokemonListStyles.list}>
            {randomPokemon ? (
              <PokemonCard pokemon={randomPokemon} isHorizontal={false} />
            ) : (
              <Text style={pokemonListStyles.loaderText}>Aucun Pokémon trouvé.</Text>
            )}
          </View>
        </View>
      )}
    </View>
  );
}
