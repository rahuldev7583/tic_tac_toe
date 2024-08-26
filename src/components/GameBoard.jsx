import { useState, useEffect } from "react";
import { userChoose, computerChoose, level } from "./Start";
import checkWinner, { easyGame, hardGame, GameOver } from "./Game";

function Square(props) {
  return (
    <div
      className="h-[6.3rem] w-[6.3rem] text-8xl text-center bg-orange-200 rounded-3xl font-mono cursor-pointer md:text-10xl"
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}

function GameBoard(props) {
  const { player1st: playerOne, player2nd: playerTwo } = props;
  const [gameOver, setGameOver] = useState(false);
  const [game, setGame] = useState(null);
  const [arr, setArr] = useState(Array(9).fill(null));
  const [indexOfNull, setIndexOfNull] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [computerTurn, setComputerTurn] = useState(false);
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [player2Turn, setPlayer2Turn] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(
    playerOne === "You" ? "Your" : playerOne
  );

  const resetGame = () => {
    console.log("Resetting game...");
    setArr(Array(9).fill(null));
    setIndexOfNull([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    setGameOver(false);
    setGame(null);
    setPlayer1Turn(true);
    setPlayer2Turn(false);
    setComputerTurn(false);
    setCurrentPlayer(playerOne === "You" ? "Your" : playerOne);
  };

  useEffect(() => {
    console.log("Computer turn:", computerTurn);
    console.log("Game over:", gameOver);
    console.log("Current board:", arr);
    console.log("Available indices:", indexOfNull);

    if (computerTurn && !gameOver) {
      setTimeout(() => {
        const elem =
          level === "easy"
            ? easyGame(indexOfNull)
            : hardGame(arr, userChoose, computerChoose);
        console.log("Computer chooses index:", elem);

        const newArr = [...arr];
        newArr[elem] = computerChoose;
        setIndexOfNull(indexOfNull.filter((a) => a !== elem));
        setArr(newArr);

        const win = checkWinner(newArr);
        console.log("Winner check after computer move:", win);

        if (win) {
          setGameOver(true);
          setGame(
            <GameOver
              winner={win === "Draw" ? "Draw" : "Computer Won"}
              replay={resetGame}
            />
          );
        } else {
          setComputerTurn(false);
          setCurrentPlayer("Your");
        }
      }, 500);
    }
  }, [computerTurn, gameOver, arr, indexOfNull]);

  const handleClick = (index) => {
    if (arr[index] || gameOver) return;

    console.log("Player click index:", index);

    const newArr = [...arr];
    newArr[index] = userChoose;
    setIndexOfNull(indexOfNull.filter((a) => a !== index));
    setArr(newArr);

    const win = checkWinner(newArr);
    console.log("Winner check after player move:", win);

    if (win) {
      setGameOver(true);
      setGame(
        <GameOver
          winner={win === "Draw" ? "Draw" : "You Won"}
          replay={resetGame}
        />
      );
    } else {
      setComputerTurn(true);
      setCurrentPlayer("Computer");
    }
  };

  return (
    <div className="text-center text-orange-500">
      <h2 className="text-3xl">{currentPlayer}'s Turn</h2>
      <div className="grid grid-cols-3 grid-rows-3 h-[20rem] w-[90%] ml-4 mt-4 pt-1 pl-1 md:w-[30%] md:ml-[35%]">
        {arr.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      {game}
    </div>
  );
}

export default GameBoard;
