function Players(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      className="text-center text-xl text-orange-500 mt-4"
    >
      <label for="player1">1st Player 0</label>
      <br />
      <input
        className="border border-gray-200 rounded-lg p-1"
        name="player1"
        onChange={props.handlePlayer1}
        value={props.player1}
        placeholder="Enter 1st Player name"
        required
      />
      <br />
      <label for="player2" className="mt-2">
        2nd Player X
      </label>
      <br />
      <input
        className="border border-gray-200 rounded-lg p-1"
        name="player2"
        onChange={props.handlePlayer2}
        value={props.player2}
        placeholder="Enter 2nd Player name"
        required
      />
      <br />
      <button
        type="submit"
        className="bg-orange-200 text-2xl pt-1 pb-1 pl-4 pr-4 rounded-xl mt-4"
      >
        start
      </button>
    </form>
  );
}
export default Players;
