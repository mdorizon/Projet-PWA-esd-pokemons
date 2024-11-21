import PokemonCard from "@/components/PokemonCard";
import useGetPokemons from "@/hook/useGetPokemons";
import styles from "@/styles/pokemonCard";
import { PokemonDto } from "@/types/poke-types";
import { FlatList, View } from "react-native";

export default function Index() {
  const pokemons: PokemonDto[] = useGetPokemons()

  return (
    <View>
      <FlatList 
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
