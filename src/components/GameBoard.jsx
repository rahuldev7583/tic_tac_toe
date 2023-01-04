import { useState } from "react";
import { userChoose, computerChoose, level } from "./Start.jsx";
import checkWinner, { easyGame, hardGame, GameOver } from "./Game.jsx";

function Square(props) {
  return (
    <div
      className="h-[6.3rem] w-[6.3rem] text-8xl text-center bg-orange-200 rounded-3xl font-mono"
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}
function GameBoard(props) {
  let playerOne = props.player1st;
  let playerTwo = props.player2nd;
  const [gameOver, setGameOver] = useState(false);
  const [game, setGame] = useState("");
  const [arr, setArr] = useState(Array(9).fill(null));
  const [indexOfNull, setIndexOfNull] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [computerTurn, setComputerTurn] = useState(false);
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [player2Turn, setPlayer2Turn] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(
    playerOne === "You" ? "Your" : playerOne
  );

  function handleClick(index) {
    if (playerOne === "You" && playerTwo === "Computer") {
      let newArr = [...arr];
      newArr[index] = userChoose;
      setIndexOfNull(indexOfNull.filter((a) => a !== index));
      setArr(newArr);
      let win = checkWinner(newArr);
      setGame(
        win !== undefined && win !== "Draw"
          ? () => {
              setGameOver(true);
              setComputerTurn(false);
              setCurrentPlayer("Your");
              return (
                <GameOver
                  winner="You Won"
                  replay={() => {
                    let newArr = Array(9).fill(null);
                    setArr(newArr);
                    setIndexOfNull([0, 1, 2, 3, 4, 5, 6, 7, 8]);
                    setGameOver(false);
                    setGame("");
                  }}
                />
              );
            }
          : win === "Draw"
          ? () => {
              setGameOver(true);
              setComputerTurn(false);
              setCurrentPlayer("Your");
              return (
                <GameOver
                  winner="Draw"
                  replay={() => {
                    let newArr = Array(9).fill(null);
                    setArr(newArr);
                    setIndexOfNull([0, 1, 2, 3, 4, 5, 6, 7, 8]);
                    setGameOver(false);
                    setGame("");
                  }}
                />
              );
            }
          : ""
      );
      setComputerTurn(true);
      setCurrentPlayer("Computer");
    } else if (player1Turn) {
      let newArr = [...arr];
      newArr[index] = "0";
      setIndexOfNull(indexOfNull.filter((a) => a !== index));
      setArr(newArr);
      let win = checkWinner(newArr);
      setGame(
        win !== undefined && win !== "Draw"
          ? () => {
              setGameOver(true);
              setPlayer1Turn(false);
              setPlayer2Turn(false);
              setCurrentPlayer(playerOne);
              return (
                <GameOver
                  winner={playerOne + " Won"}
                  replay={() => {
                    let newArr = Array(9).fill(null);
                    setArr(newArr);
                    setGameOver(false);
                    setGame("");
                    setPlayer1Turn(true);
                  }}
                />
              );
            }
          : win === "Draw"
          ? () => {
              setGameOver(true);
              setPlayer1Turn(false);
              setPlayer2Turn(false);
              setCurrentPlayer(playerOne);
              return (
                <GameOver
                  winner="Draw"
                  replay={() => {
                    let newArr = Array(9).fill(null);
                    setArr(newArr);
                    setGameOver(false);
                    setGame("");
                    setPlayer1Turn(true);
                  }}
                />
              );
            }
          : ""
      );
      setPlayer1Turn(false);
      setPlayer2Turn(true);
      setCurrentPlayer(playerTwo);
    } else if (player2Turn) {
      let newArr = [...arr];
      newArr[index] = "X";
      setIndexOfNull(indexOfNull.filter((a) => a !== index));
      setArr(newArr);
      let win = checkWinner(newArr);
      setGame(
        win !== undefined && win !== "Draw"
          ? () => {
              setGameOver(true);
              setPlayer1Turn(false);
              setPlayer2Turn(false);
              setCurrentPlayer(playerTwo);
              return (
                <GameOver
                  winner={playerTwo + " Won"}
                  replay={() => {
                    let newArr = Array(9).fill(null);
                    setArr(newArr);
                    setGameOver(false);
                    setGame("");
                    setPlayer1Turn(true);
                  }}
                />
              );
            }
          : win === "Draw"
          ? () => {
              setGameOver(true);
              setPlayer1Turn(false);
              setPlayer2Turn(false);
              setCurrentPlayer(playerTwo);
              return (
                <GameOver
                  winner="Draw"
                  replay={() => {
                    let newArr = Array(9).fill(null);
                    setArr(newArr);
                    setGameOver(false);
                    setGame("");
                    setPlayer1Turn(true);
                  }}
                />
              );
            }
          : ""
      );
      setPlayer2Turn(false);
      setPlayer1Turn(true);
      setCurrentPlayer(playerOne);
    }
  }
  if (computerTurn) {
    setTimeout(() => {
      if (level === "easy") {
        let elem = easyGame(indexOfNull);
        let newarr = [...arr];
        newarr[elem] = computerChoose;
        setIndexOfNull(indexOfNull.filter((a) => a !== elem));
        setArr(newarr);
        let win = checkWinner(newarr);
        setGame(
          win !== undefined && win !== "Draw"
            ? () => {
                setGameOver(true);
                setCurrentPlayer("Computer");
                return (
                  <GameOver
                    winner="Computer Won"
                    replay={() => {
                      let newArr = Array(9).fill(null);
                      setArr(newArr);
setIndexOfNull([0, 1, 2, 3, 4, 5, 6, 7, 8])
                      setGameOver(false);
                      setGame("");
                    }}
                  />
                );
              }
            : win === "Draw"
            ? () => {
                setGameOver(true);
                setCurrentPlayer("Computer");
                return (
                  <GameOver
                    winner="Draw"
                    replay={() => {
                      let newArr = Array(9).fill(null);
                      setArr(newArr);
setIndexOfNull([0, 1, 2, 3, 4, 5, 6, 7, 8])
                      setGameOver(false);
                      setGame("");
                    }}
                  />
                );
              }
            : ""
        );
      } else if (level === "hard") {
        let elem = hardGame(indexOfNull);
        let newarr = [...arr];
        newarr[elem] = computerChoose;
        setIndexOfNull(indexOfNull.filter((a) => a !== elem));
        setArr(newarr);
        let win = checkWinner(newarr);
        setGame(
          win !== undefined && win !== "Draw"
            ? () => {
                setGameOver(true);
                setCurrentPlayer("Computer");
                return (
                  <GameOver
                    winner="Computer Won"
                    replay={() => {
                      let newArr = Array(9).fill(null);
                      setArr(newArr);
                      setGameOver(false);
                      setGame("");
setIndexOfNull([0, 1, 2, 3, 4, 5, 6, 7, 8])
                    }}
                  />
                );
              }
            : win === "Draw"
            ? () => {
                setGameOver(true);
                setCurrentPlayer("Computer");
                return (
                  <GameOver
                    winner="Draw"
                    replay={() => {
                      let newArr = Array(9).fill(null);
                      setArr(newArr);
                      setGameOver(false);
setIndexOfNull([0, 1, 2, 3, 4, 5, 6, 7, 8]);
setGame("");
                      
                    }}
                  />
                );
              }
            : ""
        );
      }
      setComputerTurn(false);
      setCurrentPlayer("Your");
    }, 500);
  }
  return (
    <div className="text-center text-orange-500">
      <h2 className="text-3xl">{currentPlayer}'s Turn</h2>
      <div className="grid grid-cols-3 grid-rows-3 h-[20rem] w-[90%] ml-4 mt-4   pt-1 pl-1 ">
        <Square
          value={arr[0]}
          onClick={gameOver ? () => {} : () => handleClick(0)}
        />
        <Square
          value={arr[1]}
          onClick={gameOver ? () => {} : () => handleClick(1)}
        />
        <Square
          value={arr[2]}
          onClick={gameOver ? () => {} : () => handleClick(2)}
        />
        <Square
          value={arr[3]}
          onClick={gameOver ? () => {} : () => handleClick(3)}
        />
        <Square
          value={arr[4]}
          onClick={gameOver ? () => {} : () => handleClick(4)}
        />
        <Square
          value={arr[5]}
          onClick={gameOver ? () => {} : () => handleClick(5)}
        />
        <Square
          value={arr[6]}
          onClick={gameOver ? () => {} : () => handleClick(6)}
        />
        <Square
          value={arr[7]}
          onClick={gameOver ? () => {} : () => handleClick(7)}
        />
        <Square
          value={arr[8]}
          onClick={gameOver ? () => {} : () => handleClick(8)}
        />
      </div>
      {game}
    </div>
  );
}
export default GameBoard;
