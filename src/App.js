import "./App.css";
import Counter from "./components/Counter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseCounter from "./components/IncreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import IncreaseByTenCounter from "./components/IncreaseByTenCounter";
function App() {
  return (
    <div className="App">
      <Counter/>
      <DecreaseCounter/>
      <IncreaseCounter/>
      <IncreaseByTwoCounter/>
      <IncreaseByTenCounter/>
    </div>
  );
}

export default App;
