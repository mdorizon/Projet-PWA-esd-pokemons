import PokemonCard from "@/components/PokemonCard";
import PokemonTypeCard from "@/components/PokemonTypeCard";
import useGetPokemons from "@/hook/useGetPokemons";
import useGetPokemonTypes from "@/hook/useGetPokemonTypes";
import globalStyles from "@/styles/globalStyles";
import pokemonListStyles from "@/styles/pokemonList";
import { GeneralTypeDto, PokemonDto } from "@/types/poke-types";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, Button } from "react-native";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('')
  const pokemons: PokemonDto[] = useGetPokemons();
  const types: GeneralTypeDto[] = useGetPokemonTypes();

  const handleNavigateToPokemons = () => {
    router.push('/pokemons')
  }
  
  const handleNavigateToTypes = () => {
    router.push('/poke-types')
  }
  
  const handleNavigateToRandomPokemon = () => {
    router.push('/pokemons/random')
  }

  const handleSearch = () => {
    router.push(`pokemons/search/${searchQuery}`)
  }

  const getRandomElements = (array: (PokemonDto | GeneralTypeDto)[], nb: number) => {
    // Créer un tableau pour stocker les éléments sélectionnés
    const newList = [];
    
    // Créer une copie de l'array pour ne pas modifier l'original
    const copyArray = [...array];
  
    // Si le nombre demandé d'éléments est supérieur à la taille de l'array, on ajuste le nombre
    const elementsToSelect = Math.min(nb, array.length);
  
    // Sélectionner des éléments uniques jusqu'à ce que le nombre voulu soit atteint
    for (let i = 0; i < elementsToSelect; i++) {
      // Choisir un index aléatoire dans le tableau copié
      const randomIndex = Math.floor(Math.random() * copyArray.length);
  
      // Ajouter l'élément sélectionné à newList
      newList.push(copyArray[randomIndex]);
  
      // Retirer l'élément du tableau copié pour éviter les répétitions
      copyArray.splice(randomIndex, 1);
    }
  
    return newList;
  };

  return (
    <View style={globalStyles.page}>
      <View style={globalStyles.container}>
        {/* Header */}
        <View style={globalStyles.HorizontalContainer}>
          <Image style={globalStyles.logo} source={require('@/assets/images/Pokemon-Logo.png')}/>
          <TextInput
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={globalStyles.searchInput}
            placeholderTextColor="#3c5aa6" 
            placeholder="Nom du Pokemon"
          />
          <TouchableOpacity onPress={handleSearch}>
            <Text>Chercher</Text>
          </TouchableOpacity>
        </View>
        <Image style={globalStyles.logoTitle} source={require('@/assets/images/PokeDev.png')}/>
        <TouchableOpacity onPress={handleNavigateToRandomPokemon}>
          <Text style={globalStyles.h1}>Pokemon Random</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={globalStyles.scrollContent}>
          {/* Pokemons list */}
          <View style={[globalStyles.content, globalStyles.mt]}>
            <TouchableOpacity onPress={handleNavigateToPokemons}>
              <Text style={globalStyles.h1}>Pokemons</Text>
            </TouchableOpacity>
            <View style={globalStyles.mt}>
              {!pokemons || pokemons.length === 0 ? (
                <View style={pokemonListStyles.loaderContainer}>
                  <ActivityIndicator size="large" color="#20639b" />
                  <Text style={pokemonListStyles.loaderText}>Chargement des Pokémon...</Text>
                </View>
              ) : (
                <View>
                {getRandomElements(pokemons, 6).map((pokemon: PokemonDto) => (
                  <PokemonCard key={pokemon.id} pokemon={pokemon} isHorizontal={true} />
                ))}
                </View>
              )}
            </View>
          </View>

          {/* Types List */}
          <View style={globalStyles.content}>
            <TouchableOpacity onPress={handleNavigateToTypes}>
              <Text style={globalStyles.h1}>Types de pokemons</Text>
            </TouchableOpacity>
            <View style={globalStyles.mt}>
              {!types || types.length === 0 ? (
                <View style={pokemonListStyles.loaderContainer}>
                  <ActivityIndicator size="large" color="#20639b" />
                  <Text style={pokemonListStyles.loaderText}>Chargement des Types...</Text>
                </View>
              ) : (
                <View>
                {getRandomElements(types, 3).map((type: GeneralTypeDto) => (
                  <PokemonTypeCard key={type.id} type={type} />
                ))}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
