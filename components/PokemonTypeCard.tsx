import pokemonTypeCardStyles from "@/styles/pokemonTypeCard";
import { router } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

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

interface PokemonTypeCardProps {
  type: {
    id: number;
    name: string;
    image: string;
    englishName: string;
  };
}

const PokemonTypeCard = ({ type }: PokemonTypeCardProps) => {
  const cardColor = typeColors[type.name] || "#A8A878";

  const handleNavigateToPokemonByTypes = (type: string) => {
    router.push(`/poke-types/list-types/${type}`)
  }

  return (
    <TouchableOpacity onPress={() => handleNavigateToPokemonByTypes(type.name)}>
      <View style={[pokemonTypeCardStyles.card, { backgroundColor: `${cardColor}20` }]}>
        <View style={[pokemonTypeCardStyles.cardHeader, { borderColor: cardColor }]}>
          <Text style={[pokemonTypeCardStyles.typeName, { color: cardColor }]}>{type.name}</Text>
        </View>
        <Image source={{ uri: type.image }} style={pokemonTypeCardStyles.typeImage} />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonTypeCard;