function ChooseSide(props) {
  return (
    <div className="text-center text-orange-500 mt-4">
      <h1 className="text-5xl font-medium md:text-7xl">0 or X</h1>
      <button
        className="bg-orange-200 hover:bg-orange-300 rounded-xl text-4xl m-2 pt-1 pb-1 pr-8 pl-8 md:text-6xl"
        onClick={props.userChooseO}
      >
        0
      </button>

      <button
        className="bg-orange-200 hover:bg-orange-300 rounded-xl text-4xl m-2 pt-1 pb-1 pr-8 pl-8 md:text-6xl"
        onClick={props.userChooseX}
      >
        X
      </button>
    </div>
  );
}
function Choose(props) {
  return (
    <div className="text-center text-2xl font-bold mt-8 text-[#fc8504] md:text-4xl">
      <h1>Computer or Player</h1>
      <button
        className="bg-orange-200  mt-8  rounded-3xl pt-4 pb-4 pr-8 pl-8"
        onClick={props.userChoosePlayer}
      >
        Player
      </button>{" "}
      <br />
      <button
        className="bg-orange-200 mt-8  rounded-3xl p-4"
        onClick={props.userChooseComputer}
      >
        Computer
      </button>{" "}
    </div>
  );
}
export default ChooseSide;
export { Choose };
