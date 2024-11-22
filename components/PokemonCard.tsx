import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { PokemonDto } from "@/types/poke-types";
import pokemonCardStyles from "@/styles/pokemonCard";
import { router } from "expo-router";

const typeColors = {
  Plante: "#78C850",
  Poison: "#A040A0",
  Feu: "#F08030",
  Eau: "#6890F0",
  Électrik: "#F8D030",
  Glace: "#98D8D8",
  Combat: "#C03028",
  Psy: "#F85888",
  Normal: "#A8A878",
  Sol: "#E0C068",
  Vol: "#A890F0",
  Roche: "#B8A038",
  Insecte: "#A8B820",
  Spectre: "#705898",
  Acier: "#B8B8D0",
  Dragon: "#7038F8",
  Ténèbres: "#705848",
  Fée: "#EE99AC",
};

interface PokemonCardProps {
  pokemon: PokemonDto;
  isHorizontal: boolean;
}

const PokemonCard = ({ pokemon, isHorizontal }: PokemonCardProps) => {
  const mainType = pokemon.apiTypes[0]?.name || "Normal";
  const cardColor = typeColors[mainType] || "#A8A878";
  const cardStyle = (isHorizontal ? pokemonCardStyles.horizontalCard : pokemonCardStyles.card)

  const handleNavigateToPokemonDetail = (id: Number) => {
    router.push(`/pokemons/details/${id}`)
  }

  return (
    <TouchableOpacity onPress={() => handleNavigateToPokemonDetail(pokemon.id)}>
      <View style={[cardStyle, { borderColor: cardColor, backgroundColor: `${cardColor}20` }]}>
        <View style={pokemonCardStyles.cardHeader}>
          <Text style={[pokemonCardStyles.pokemonName, { color: cardColor }]}>{pokemon.name}</Text>
          <Text style={pokemonCardStyles.pokedexId}>#{pokemon.pokedexId}</Text>
        </View>
        <Image source={{ uri: pokemon.image }} style={pokemonCardStyles.pokemonImage} />
        <View style={pokemonCardStyles.typesContainer}>
          {pokemon.apiTypes.map((type) => (
            <View key={type.name} style={[pokemonCardStyles.typeBadge, { backgroundColor: cardColor }]}>
              <Image source={{ uri: type.image }} style={pokemonCardStyles.typeImage} />
              <Text style={pokemonCardStyles.typeText}>{type.name}</Text>
            </View>
          ))}
        </View>
        {!isHorizontal && (
          <View style={pokemonCardStyles.statsContainer}>
            <Text style={[pokemonCardStyles.statsTitle, { color: cardColor }]}>Statistiques</Text>
            <Text style={pokemonCardStyles.statsText}>HP: {pokemon.stats.HP}</Text>
            <Text style={pokemonCardStyles.statsText}>Attaque: {pokemon.stats.attack}</Text>
            <Text style={pokemonCardStyles.statsText}>Défense: {pokemon.stats.defense}</Text>
            <Text style={pokemonCardStyles.statsText}>Vitesse: {pokemon.stats.speed}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;