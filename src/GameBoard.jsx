import { Card } from "./Card";
import "./GameBoard.css";

export function GameBoard({ pokeArray, handleResult, score }) {
  return (
    <div>
      <div className="score container">
        <h1>Score: {score} </h1>
      </div>
      <div className="game-board">
        {pokeArray.map((pokeNum) => {
          return (
            <Card key={pokeNum} pokeNum={pokeNum} onClick={handleResult} />
          );
        })}
      </div>
    </div>
  );
}
