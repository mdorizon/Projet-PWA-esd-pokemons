import { ActivityIndicator, Text, View, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PokemonCard from "@/components/PokemonCard";
import pokemonListStyles from "@/styles/pokemonList";
import { PokemonDto } from "@/types/poke-types";
import useGetPokemonByName from "@/hook/useGetPokemonByName";

export default function Index() {
  const { query } = useLocalSearchParams();
  const pokemons: PokemonDto[] = useGetPokemonByName(query || "");

  return (
    <View style={pokemonListStyles.container}>
      {/* Chargement */}
      {(!pokemons || pokemons.length === 0) ? (
        <View style={pokemonListStyles.loaderContainer}>
          <ActivityIndicator size="large" color="#20639b" />
          <Text style={pokemonListStyles.loaderText}>
            {query ? `Aucun Pokémon trouvé pour "${query}"` : "Chargement des Pokémon..."}
          </Text>
        </View>
      ) : (
        // Liste des Pokémon
        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={pokemonListStyles.list}>
              <PokemonCard pokemon={item} isHorizontal={false} />
            </View>
          )}
        />
      )}
    </View>
  );
}