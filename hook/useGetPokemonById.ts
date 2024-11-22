import { useEffect, useState } from "react";

const useGetPokemonById = (id: Number) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    (async () => {

      const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
      const pokemon = await response.json()

      setPokemon(pokemon)
    })()
  }, [])

  return pokemon
}

export default useGetPokemonById