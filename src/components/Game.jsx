import Replay from "./replay.png";

function easyGame(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function hardGame(arr, playerSymbol, computerSymbol) {
  let bestMove = minimax(arr, computerSymbol, playerSymbol, computerSymbol);
  return bestMove.index;
}
function minimax(
  newBoard,
  currentPlayer,
  human,
  ai,
  depth = 0,
  alpha = -Infinity,
  beta = Infinity
) {
  console.log(`\nDepth: ${depth}`);
  console.log(`Current Board: ${JSON.stringify(newBoard)}`);
  console.log(`Current Player: ${currentPlayer}`);

  const availSpots = newBoard.filter((s) => s === null);

  const checkWinner = (arr) => {
    const win = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (arr[a] === arr[b] && arr[b] === arr[c] && arr[a] != null) {
        return arr[a];
      }
    }
    return arr.indexOf(null) === -1 ? "Draw" : null;
  };

  const winner = checkWinner(newBoard);
  console.log(`Winner Check: ${winner}`);

  if (winner === human) {
    console.log(`Human wins, score: ${-10 + depth}`);
    return { score: -10 + depth };
  } else if (winner === ai) {
    console.log(`AI wins, score: ${10 - depth}`);
    return { score: 10 - depth };
  } else if (availSpots.length === 0) {
    console.log(`Draw, score: 0`);
    return { score: 0 };
  }

  const moves = [];
  for (let i = 0; i < availSpots.length; i++) {
    const move = {};
    move.index = newBoard.indexOf(availSpots[i]);
    newBoard[move.index] = currentPlayer;

    console.log(`Move index: ${move.index}`);
    console.log(`Board after move: ${JSON.stringify(newBoard)}`);

    let result;
    if (currentPlayer === ai) {
      result = minimax(newBoard, human, human, ai, depth + 1, alpha, beta);
      move.score = result.score;
      alpha = Math.max(alpha, move.score);
    } else {
      result = minimax(newBoard, ai, human, ai, depth + 1, alpha, beta);
      move.score = result.score;
      beta = Math.min(beta, move.score);
    }

    newBoard[move.index] = null; // Undo the move
    console.log(`Undo move: ${move.index}`);
    console.log(`Board after undo: ${JSON.stringify(newBoard)}`);
    console.log(`Move score: ${move.score}`);
    moves.push(move);

    if (beta <= alpha) {
      console.log(
        `Pruning at move index: ${move.index}, alpha: ${alpha}, beta: ${beta}`
      );
      break; // Alpha-Beta Pruning
    }
  }

  let bestMove;
  if (currentPlayer === ai) {
    let bestScore = -Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
    console.log(
      `Best move for AI: index ${moves[bestMove].index}, score ${bestScore}`
    );
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
    console.log(
      `Best move for Human: index ${moves[bestMove].index}, score ${bestScore}`
    );
  }

  return moves[bestMove];
}

function checkWinner(arr) {
  const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  for (let i = 0; i < win.length; i++) {
    const [a, b, c] = win[i];
    if (arr[a] === arr[b] && arr[b] === arr[c] && arr[a] != null) {
      return arr[a];
    }
  }
  if (arr.indexOf(null) === -1) {
    return "Draw";
  }
}

function GameOver(props) {
  return (
    <div className="text-2xl mt-2 md:text-3xl">
      <h2 className="">Game Over</h2>
      <h3 className="font-medium text-4xl md:text-5xl">{props.winner}</h3>

      <button onClick={props.replay} className="">
        <img src={Replay} alt="replayIcon" className="w-12 h-12 md:w-16 h-16" />
      </button>
    </div>
  );
}

export default checkWinner;
export { easyGame, hardGame, GameOver };
