import Replay from "./replay.png";
function easyGame(arr) {
  let index = Math.floor(Math.random() * arr.length);
  // alert("easy");
  return arr[index];
}
function hardGame(arr) {
  let index = Math.floor(Math.random() * arr.length);
  // alert("hard");
  return arr[index];
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
  }if (arr.indexOf(null) === -1) {
      return "Draw";
    }
}
function GameOver(props) {
  return (
    <div className="text-2xl mt-2">
      <h2 className="">Game Over</h2>
      <h3 className="font-medium text-4xl">{props.winner}</h3>

      <button onClick={props.replay} className="">
        <img src={Replay} alt="replayIcon" className="w-12 h-12" />
      </button>
    </div>
  );
}
export default checkWinner;
export { easyGame, hardGame, GameOver };
