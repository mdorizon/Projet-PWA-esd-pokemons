import { useEffect, useState } from "react";

const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {

      const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon');
      const pokemons = await response.json()

      setPokemons(pokemons)
    })()
  }, [])

  return pokemons
}

export default useGetPokemons