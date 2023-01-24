import { useState } from "react";
import GameBoard from "./GameBoard.jsx";
import ChooseSide, { Choose } from "./Choose.jsx";
import Level from "./Level.jsx";
import Players from "./Players.jsx";
let userChoose = "";
let computerChoose = "";
//let player1 = "";
//let player2 = "";
let level = "";
function Start(props) {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [loadChoose, setLoadChoose] = useState(false);
  const [loadPlayer, setLoadPlayer] = useState(false);
  const [loadChooseSide, setloadChooseSide] = useState(false);
  const [loadGameBoard, setloadGameBoard] = useState(false);
  const [side, setSide] = useState(false);
  const [levelClick, setLevelClick] = useState(false);
  if (loadChoose) {
    if (loadChooseSide) {
      if (loadGameBoard) {
        return <GameBoard player1st="You" player2nd="Computer" />;
      }
      return (
        <div className="text-center mt-4">
          <Level
            easy={() => {
              level = "easy";
              setLevelClick(true);
            }}
            hard={() => {
              level = "hard";
              setLevelClick(true);
            }}
          />
          <ChooseSide
            userChooseX={() => {
              userChoose = "X";
              computerChoose = "0";
              setSide(true);
              // setLoadLevel(true);
            }}
            userChooseO={() => {
              userChoose = "0";
              computerChoose = "X";
              setSide(true);
              // setLoadLevel(true);
            }}
          />
          <button
            className="bg-orange-200 text-5xl  text-orange-500 m-2 mt-10 pt-1 pb-1 pr-12 pl-12 rounded-xl hover:bg-orange-300 md:text-6xl"
            onClick={
              side && levelClick
                ? () => {
                    setloadGameBoard(true);
                  }
                : {}
            }
          >
            Play
          </button>
        </div>
      );
    } else if (loadPlayer) {
      if (loadGameBoard) {
        return <GameBoard player1st={playerOne} player2nd={playerTwo} />;
      }
      return (
        <Players
          handleSubmit={(e) => {
            e.preventDefault();
            setloadGameBoard(true);
          }}
          handlePlayer1={(e) => {
            setPlayerOne(e.target.value);
          }}
          handlePlayer2={(e) => {
            setPlayerTwo(e.target.value);
          }}
          player1={playerOne}
          player2={playerTwo}
        />
      );
    }

    return (
      <Choose
        userChooseComputer={() => {
          setloadChooseSide(true);
        }}
        userChoosePlayer={() => {
          setLoadPlayer(true);
        }}
      />
    );
  }
  return (
    <div className="text-center mt-12 text-[#fc8504]">
      <h1 className="font-black  text-8xl">0 X</h1>
      <button
        className="py-4 px-4 ml-4 mt-16 text-4xl font-bold rounded-2xl bg-orange-200"
        onClick={() => setLoadChoose(true)}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Start;
export { userChoose, computerChoose, level };
