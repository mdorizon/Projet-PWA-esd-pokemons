import pokemonCardStyles from "@/styles/pokemonCard";
import { PokemonDto } from "@/types/poke-types";
import React from "react";
import { View, Text, Image } from "react-native";

interface PokemonCardProps {
  pokemon: PokemonDto;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <View style={pokemonCardStyles.card}>
      {/* En-tête de la carte */}
      <View style={pokemonCardStyles.cardHeader}>
        <Text style={pokemonCardStyles.pokemonName}>{pokemon.name}</Text>
        <Text style={pokemonCardStyles.pokedexId}>#{pokemon.pokedexId}</Text>
      </View>

      {/* Image principale */}
      <Image source={{ uri: pokemon.image }} style={pokemonCardStyles.pokemonImage} />

      {/* Types */}
      <View style={pokemonCardStyles.typesContainer}>
        {pokemon.apiTypes.map((type) => (
          <View key={type.name} style={pokemonCardStyles.typeBadge}>
            <Image source={{ uri: type.image }} style={pokemonCardStyles.typeImage} />
            <Text style={pokemonCardStyles.typeText}>{type.name}</Text>
          </View>
        ))}
      </View>

      {/* Statistiques */}
      <View style={pokemonCardStyles.statsContainer}>
        <Text style={pokemonCardStyles.statsTitle}>Stats</Text>
        <Text style={pokemonCardStyles.statsText}>HP: {pokemon.stats.HP}</Text>
        <Text style={pokemonCardStyles.statsText}>Attack: {pokemon.stats.attack}</Text>
        <Text style={pokemonCardStyles.statsText}>Defense: {pokemon.stats.defense}</Text>
        <Text style={pokemonCardStyles.statsText}>Speed: {pokemon.stats.speed}</Text>
      </View>
    </View>
  );
};

export default PokemonCard