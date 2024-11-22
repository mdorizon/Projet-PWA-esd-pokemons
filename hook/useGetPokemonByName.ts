import { useEffect, useState } from "react";

const useGetPokemonByName = (query: String) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    (async () => {

      const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${query}`);
      const pokemon = await response.json()

      setPokemon(pokemon)
    })()
  }, [])

  return pokemon
}

export default useGetPokemonByName