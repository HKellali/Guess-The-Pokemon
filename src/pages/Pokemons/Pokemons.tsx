import { useEffect, useState } from "react";
import GraphQLRequest from "../../services/GraphQLRequest/GraphQLRequest";
import PokemonCard, { Pokemon } from "../../components/PokemonCard/PokemonCard";

const Pokemons = () => {
  const count = 1281;
  const total = 3;
  const [pokemons, setPokemons] = useState<any>([]);
  const gqlVariables = {
    limit: 100,
    offset: 0,
  };

  const pokemonsQuery = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      status
      message
      results {
        id
        name
        image
      }
    }
  }`;

  useEffect(() => {
    const fetchPokemons = async () => {
      gqlVariables.offset = Math.round(Math.random() * count);
      const fetch = await GraphQLRequest(pokemonsQuery, gqlVariables);
      const pokemonsList = fetch.data.pokemons.results;
      const randomPokemons = [];
      const getRandomPokemon = () => {
        const random = Math.floor(Math.random() * pokemonsList.length);
        const randomPokemon = pokemonsList.splice(random, 1)[0];
        return randomPokemon;
      };
      for (let number = 0; number < total; number++) {
        randomPokemons.push(getRandomPokemon());
      }

      setPokemons(randomPokemons);
    };

    fetchPokemons();
  }, []);

  return (
    pokemons.length === total && (
      <div>
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    )
  );
};

export default Pokemons;
