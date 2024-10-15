import "./Card.css";
import { useEffect, useState } from "react";
export function Card({ pokeNum, onClick }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNum)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!ignore) {
          setPokemon(data);
        }
      });

    return () => {
      ignore = true;
    };
  }, [pokeNum]);

  return pokemon ? (
    <button data-id={pokeNum} className={"card"} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-header">
            <p> {pokemon.name.toUpperCase()}</p>
          </div>
          <div className="card-img">
            <img src={pokemon.sprites.front_default} />
          </div>
        </div>
        <div className="card-back flip"></div>
      </div>
    </button>
  ) : (
    <button>loading..</button>
  );
}
