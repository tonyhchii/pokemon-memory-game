import "./App.css";
import { useState } from "react";
import { GameBoard } from "./GameBoard";
import { ButtonContainer } from "./ButtonContainer";

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

  async function handleResult(e) {
    const id = e.currentTarget.dataset.id;
    flipCards();
    await setTimeout(() => setPokeArray(shuffle(pokeArray)), 600);
    await setTimeout(() => flipCards(), 1000);
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
      <div className="header container">
        <h1>POKEMON MEMORY GAME</h1>
      </div>
      <ButtonContainer handleStart={handleStart} />
      {displayGame && score != 12 && (
        <GameBoard
          pokeArray={pokeArray}
          handleResult={handleResult}
          score={score}
        />
      )}
      {score === 12 && <h1>YOU WIN!!!!</h1>}
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

function flipCards() {
  const cards = document.querySelectorAll(".card-inner");
  cards.forEach((card) => {
    card.classList.toggle("flip");
  });
}
