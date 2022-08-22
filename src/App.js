import './App.css';
import FitbaContainer from "./Container/FitbaContainer"

function App() {

  const allLeagues = [
    {name: "Argentine Liga Profesional de Fútbol", url:"https://api-football-standings.azharimm.site/leagues/arg.1/standings?"},
    {name: "Australian A-League Men", url:"https://api-football-standings.azharimm.site/leagues/aus.1/standings?"},
    {name: "Brazilian Serie A", url:"https://api-football-standings.azharimm.site/leagues/bra.1/standings?"},
    {name: "Chinese Super League", url: "https://api-football-standings.azharimm.site/leagues/chn.1/standings?"},
    {name: "Dutch Eredivisie", url:"https://api-football-standings.azharimm.site/leagues/ned.1/standings?"},
    {name: "French Ligue 1", url:"https://api-football-standings.azharimm.site/leagues/fra.1/standings?"},
    {name: "German Bundesliga", url:"https://api-football-standings.azharimm.site/leagues/ger.1/standings?"},
    {name: "English Premier League", url:"https://api-football-standings.azharimm.site/leagues/eng.1/standings?"},
    {name: "Italian Serie A", url: "https://api-football-standings.azharimm.site/leagues/ita.1/standings?"},
    {name: "Indonesian Liga 1", url:"https://api-football-standings.azharimm.site/leagues/idn.1/standings?"},
    {name: "Japanese J League", url: "https://api-football-standings.azharimm.site/leagues/jpn.1/standings?"},
    {name: "Malaysian Super League", url: "https://api-football-standings.azharimm.site/leagues/mys.1/standings?"},
    {name: "Mexican Liga BBVA MX", url: "https://api-football-standings.azharimm.site/leagues/mex.1/standings?"},
    {name: "Portuguese Liga", url:"https://api-football-standings.azharimm.site/leagues/por.1/standings?"},
    {name: "Russian Premier League", url: "https://api-football-standings.azharimm.site/leagues/rus.1/standings?"},
    {name: "Singaporean Premier League", url: "https://api-football-standings.azharimm.site/leagues/sgp.1/standings?"},
    {name: "Spanish Primera División", url: "https://api-football-standings.azharimm.site/leagues/esp.1/standings?"},
    {name: "Thai Premier League", url: "https://api-football-standings.azharimm.site/leagues/tha.1/standings?"},
    {name: "Turkish Super Lig", url: "https://api-football-standings.azharimm.site/leagues/tur.1/standings?"},

  ]

  

  return (
    <div className="App">
      <FitbaContainer allLeagues={allLeagues}/>
    </div>
  );
}

export default App;
