import { useEffect, useState } from "react";

const useGetPokemonByType = (type: String) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {

      const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);
      const pokemons = await response.json()

      setPokemons(pokemons)
    })()
  }, [])

  return pokemons
}

export default useGetPokemonByType