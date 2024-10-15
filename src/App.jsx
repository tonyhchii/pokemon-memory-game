import "./App.css";
import { useState } from "react";
import { GameBoard } from "./GameBoard";

function App() {
  const [displayGame, setDisplayGame] = useState(false);
  const [pokeArray, setPokeArray] = useState(generateRandomArray(12, 1, 151));

  const [score, setScore] = useState(0);
  const [memo, setMemo] = useState([]);

  function handleStart(e) {
    e.preventDefault();
    setDisplayGame(true);
    const minimum = parseInt(e.target.dataset.min);
    const maximum = parseInt(e.target.dataset.max);
    setPokeArray(generateRandomArray(12, minimum, maximum));
    reset();
  }

  function handleResult(e) {
    const id = e.currentTarget.dataset.id;
    setPokeArray(shuffle(pokeArray));
    if (!memo.includes(id)) {
      setScore(score + 1);
      setMemo([...memo, id]);
    } else {
      reset();
    }
  }

  function reset() {
    setMemo([]);
    setScore(0);
  }

  return (
    <>
      <h1>POKEMON MEMORY GAME</h1>
      <div className="btn-container">
        <button
          className="btn"
          data-min="1"
          data-max="151"
          onClick={handleStart}
        >
          Gen 1
        </button>
        <button
          className="btn"
          data-min="152"
          data-max="251"
          onClick={handleStart}
        >
          Gen 2
        </button>
        <button
          className="btn"
          data-min="252"
          data-max="386"
          onClick={handleStart}
        >
          Gen 3
        </button>
        <button
          className="btn"
          data-min="387"
          data-max="493"
          onClick={handleStart}
        >
          Gen 4
        </button>
        <button
          className="btn"
          data-min="494"
          data-max="649"
          onClick={handleStart}
        >
          Gen 5
        </button>
        <button
          className="btn"
          data-min="650"
          data-max="721"
          onClick={handleStart}
        >
          Gen 6
        </button>
        <button
          className="btn"
          data-min="722"
          data-max="809"
          onClick={handleStart}
        >
          Gen 7
        </button>
        <button
          className="btn"
          data-min="810"
          data-max="905"
          onClick={handleStart}
        >
          Gen 8
        </button>
        <button
          className="btn"
          data-min="906"
          data-max="1025"
          onClick={handleStart}
        >
          Gen 9
        </button>
      </div>
      {displayGame && (
        <GameBoard
          pokeArray={pokeArray}
          handleResult={handleResult}
          score={score}
        />
      )}
    </>
  );
}

export default App;

function generateRandomNumber(maxNum, minNum) {
  const random = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  return random;
}

function generateRandomArray(maxLength, maxNum, minNum) {
  const newArray = [];
  while (newArray.length < maxLength) {
    const random = generateRandomNumber(maxNum, minNum);
    if (!newArray.includes(random)) {
      newArray.push(random);
    }
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
