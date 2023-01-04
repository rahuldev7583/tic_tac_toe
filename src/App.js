import Start from "./components/Start.jsx";
import Bottom from "./components/Bottom/Bottom.jsx";
function App() {
  return (
    <div className="font-serif">
      <h1 className="font-bold text-4xl text-center py-4 text-[#fc8504]">
        Tic Tac Toe
      </h1>
      <Start text="Let's Start" />
      <Bottom />
    </div>
  );
}
export default App;
