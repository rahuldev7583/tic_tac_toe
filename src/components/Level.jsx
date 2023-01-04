function Level(props) {
  return (
    <div className="text-orange-500">
      <h1 className="text-5xl font-medium text-center">Level</h1>
      <button
        className="bg-orange-200 hover:bg-white rounded-xl text-2xl  pt-2 pb-2 pl-4 pr-4 m-2"
        onClick={props.easy}
      >
        Easy
      </button>

      <button
        className="bg-orange-200 hover:bg-white rounded-xl text-2xl pt-2 pb-2 pl-4 pr-4 m-2"
        onClick={props.hard}
      >
        Hard
      </button>
    </div>
  );
}
export default Level;
