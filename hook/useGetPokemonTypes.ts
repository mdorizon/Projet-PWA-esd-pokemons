import { useEffect, useState } from "react";

const useGetPokemonTypes = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    (async () => {

      const response = await fetch('https://pokebuildapi.fr/api/v1/types');
      const types = await response.json()

      setTypes(types)
    })()
  }, [])

  return types
}

export default useGetPokemonTypes