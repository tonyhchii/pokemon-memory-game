import "./Card.css";
import { useEffect, useState } from "react";
export function Card({ pokeNum }) {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNum)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        if (!ignore) {
          setPokemon(data);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return pokemon ? (
    <button className="card">
      <img src={pokemon.sprites.front_default} />
      <h2> {pokemon.name}</h2>
    </button>
  ) : (
    <button>loading..</button>
  );
}
