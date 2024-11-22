import { useEffect, useState } from "react";
import { PokemonDto } from "@/types/poke-types";

const useGetPokemonByName = (query: string) => {
  const [allPokemons, setAllPokemons] = useState<PokemonDto[] | null>(null); // Liste complète des Pokémon
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonDto[]>([]); // Résultats filtrés

  useEffect(() => {
    // Charger tous les Pokémon une seule fois
    const fetchAllPokemons = async () => {
      try {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`);
        const pokemons = await response.json();
        setAllPokemons(pokemons);
      } catch (error) {
        console.error("Erreur lors du chargement des Pokémon:", error);
        setAllPokemons([]); // Défaut : liste vide si échec
      }
    };

    fetchAllPokemons();
  }, []); // Appelé une seule fois au montage du composant

  useEffect(() => {
    // Filtrer les Pokémon en fonction de la requête
    if (!allPokemons) {
      setFilteredPokemons([]); // Si les données ne sont pas encore chargées
      return;
    }

    if (query.trim() === "") {
      setFilteredPokemons(allPokemons); // Si la recherche est vide, montrer tous les Pokémon
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredPokemons(filtered);
    }
  }, [query, allPokemons]); // Recalculer chaque fois que la requête ou la liste des Pokémon change

  return filteredPokemons;
};

export default useGetPokemonByName;