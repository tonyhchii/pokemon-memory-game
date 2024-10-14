import { Card } from "./Card";
import { useState } from "react";

export function GameBoard() {
  const [pokeArray, setPokeArray] = useState(generateRandomArray(12, 1000));
  const [score, setScore] = useState(0);
  const [memo, setMemo] = useState([]);

  function handleResult(e) {
    const id = e.currentTarget.dataset.id;
    setPokeArray(shuffle(pokeArray));
    if (!memo.includes(id)) {
      setScore(score + 1);
      setMemo([...memo, id]);
    } else {
      setMemo([]);
      setScore(0);
    }
  }

  return (
    <div>
      <h1>Score: {score} </h1>
      <div>
        {pokeArray.map((pokeNum) => {
          return (
            <Card key={pokeNum} pokeNum={pokeNum} onClick={handleResult} />
          );
        })}
      </div>
    </div>
  );
}

function generateRandomNumber(maxNum) {
  const random = Math.floor(Math.random() * maxNum);
  return random;
}

function generateRandomArray(maxLength, maxNum) {
  const newArray = [];
  while (newArray.length < maxLength) {
    const random = generateRandomNumber(maxNum);
    newArray.push(random);
  }

  return newArray;
}

function shuffle(array) {
  let newArr = [...array];
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex],
    ];
  }

  return newArr;
}
