import './App.css';
import FitbaContainer from "./Container/FitbaContainer"

function App() {

  const allLeagues = [
    {name: "EPL", url:"https://api-football-standings.azharimm.site/leagues/eng.1/standings?"}
  ]

  

  return (
    <div className="App">
      <FitbaContainer allLeagues={allLeagues}/>
    </div>
  );
}

export default App;
