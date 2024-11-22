import React from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import pokemonListStyles from "@/styles/pokemonList";
import useGetPokemonTypes from "@/hook/useGetPokemonTypes";
import { GeneralTypeDto } from "@/types/poke-types";
import PokemonTypeCard from "@/components/PokemonTypeCard";
import globalStyles from "@/styles/globalStyles";

export default function Index() {
  const types: GeneralTypeDto[] = useGetPokemonTypes();

  return (
    <View>
      {(!types || types.length === 0) ? (
        <View style={pokemonListStyles.loaderContainer}>
          <ActivityIndicator size="large" color="#20639b" />
          <Text style={pokemonListStyles.loaderText}>Chargement des types...</Text>
        </View>
      ) : (
        <View style={globalStyles.typeListContainer}>          
          <FlatList
            data={types}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PokemonTypeCard type={item} />}
            contentContainerStyle={pokemonListStyles.list}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
}