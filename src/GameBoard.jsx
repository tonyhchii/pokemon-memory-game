import { Card } from "./Card";
import { useState } from "react";
import "./GameBoard.css";

export function GameBoard({ pokeArray, handleResult, score }) {
  return (
    <div>
      <h1>Score: {score} </h1>
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
