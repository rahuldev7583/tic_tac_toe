function Level(props) {
  return (
    <div className="text-orange-500">
      <h1 className="text-5xl font-medium text-center md:pb-2">Level</h1>
      <button
        className="bg-orange-200 hover:bg-orange-300 rounded-xl text-2xl  pt-2 pb-2 pl-4 pr-4 m-2 md:text-3xl"
        onClick={props.easy}
      >
        Easy
      </button>

      <button
        className="bg-orange-200 hover:bg-orange-300 rounded-xl text-2xl pt-2 pb-2 pl-4 pr-4 m-2 md:text-3xl"
        onClick={props.hard}
      >
        Hard
      </button>
    </div>
  );
}
export default Level;
