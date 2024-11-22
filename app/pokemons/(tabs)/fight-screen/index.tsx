import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, Vibration } from "react-native";
import { PokemonDto } from "@/types/poke-types";
import pokemonFightStyle from "@/styles/pokemonFight";
import PokemonCard from "@/components/PokemonCard";

export default function FightScreen() {
  const [type, setType] = useState(""); // Type Pokémon entré par l'utilisateur
  const [teamPokemon, setTeamPokemon] = useState<PokemonDto | null>(null); // Pokémon dans l'équipe
  const [wildPokemon, setWildPokemon] = useState<PokemonDto | null>(null); // Pokémon sauvage
  const [isFighting, setIsFighting] = useState(false); // Combat en cours ou non

  // Récupère un Pokémon aléatoire par type
  const fetchPokemonByType = async (type: string) => {
    try {
      const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
      const pokemons: PokemonDto[] = await response.json();

      // Filtrer les Pokémon par type
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.apiTypes.some((t) => t.name.toLowerCase() === type.toLowerCase())
      );

      if (filteredPokemons.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredPokemons.length);
        return filteredPokemons[randomIndex];
      } else {
        Alert.alert("Erreur", `Aucun Pokémon trouvé pour le type "${type}"`);
        return null;
      }
    } catch (error) {
      Alert.alert("Erreur", "Impossible de récupérer les Pokémon.");
      console.error(error);
      return null;
    }
  };

  // Récupère un Pokémon aléatoire pour le Pokémon sauvage
  const fetchRandomPokemon = async () => {
    try {
      const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
      const pokemons: PokemonDto[] = await response.json();

      const randomIndex = Math.floor(Math.random() * pokemons.length);
      return pokemons[randomIndex];
    } catch (error) {
      Alert.alert("Erreur", "Impossible de récupérer les Pokémon sauvages.");
      console.error(error);
      return null;
    }
  };

  // Ajoute un Pokémon dans l'équipe
  const handleAddToTeam = async () => {
    const pokemon = await fetchPokemonByType(type);
    if (pokemon) {
      setTeamPokemon(pokemon);
      Vibration.vibrate(500); // Vibration pour l'ajout
      Alert.alert("Ajouté !", `${pokemon.name} a rejoint votre équipe !`);
    }
  };

  // Simule l'apparition d'un Pokémon sauvage
  useEffect(() => {
    if (teamPokemon) {
      const delay = Math.floor(Math.random() * (30000 - 3000) + 3000); // Entre 3 et 30 secondes
      const timer = setTimeout(async () => {
        const pokemon = await fetchRandomPokemon();
        if (pokemon) {
          setWildPokemon(pokemon);
          Vibration.vibrate(500); // Vibration pour l'apparition
          Alert.alert("Un Pokémon sauvage est apparu !", `Un ${pokemon.name} sauvage est là !`);

          // Déterminer le vainqueur après 3 secondes
          setTimeout(() => handleFightResult(pokemon), 3000);
        }
      }, delay);

      return () => clearTimeout(timer); // Nettoyer le timer au démontage
    }
  }, [teamPokemon]);

  // Détermine le vainqueur et affiche le résultat
  const handleFightResult = (wildPokemon: PokemonDto) => {
    if (!teamPokemon) return;

    const teamStats = teamPokemon.stats.attack + teamPokemon.stats.defense;
    const wildStats = wildPokemon.stats.attack + wildPokemon.stats.defense;

    const result = teamStats >= wildStats ? "Victoire !" : "Défaite...";
    Vibration.vibrate(1000); // Vibration pour le résultat
    Alert.alert("Résultat du combat", `Votre Pokémon ${result}`);
    setWildPokemon(null); // Réinitialise le Pokémon sauvage
  };

  return (
    <View style={pokemonFightStyle.container}>
      <Text style={pokemonFightStyle.title}>Fight Screen</Text>
      <TextInput
        style={pokemonFightStyle.input}
        placeholder="Entrez un type de Pokémon (ex: Fire)"
        value={type}
        onChangeText={setType}
      />
      <Button title="Ajouter à votre équipe" onPress={handleAddToTeam} />

      {teamPokemon && (
        <View style={pokemonFightStyle.pokemonContainer}>
          <Text style={pokemonFightStyle.pokemonText}>
            Votre Pokémon :
          </Text>
            <PokemonCard pokemon={teamPokemon} isHorizontal={false}/>
        </View>
      )}

      {wildPokemon && (
        <View style={pokemonFightStyle.pokemonContainer}>
          <Text style={pokemonFightStyle.pokemonText}>
            Pokémon sauvage : {wildPokemon.name}
          </Text>
        </View>
      )}
    </View>
  );
}