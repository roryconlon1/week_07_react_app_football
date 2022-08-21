import React, { useEffect, useState } from "react";
import LeagueItemDetail from "../Components/LeagueItemDetail";
// import LeagueList from "../Components/LeagueList";
import LeagueSelector from "../Components/LeagueSelector"


const FitbaContainer = () => {

    const [leagues, setLeagues] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState(null);

    useEffect(() => {
        getLeagues();
    }, [])

    
    const getLeagues = () => {
        fetch("https://api-football-standings.azharimm.site/leagues/eng.1/standings?").
        then(res => res.json()).
        then(leagues => setLeagues(leagues.data.standings));
    }
    
    const onLeagueSelected = (league) => {
        setSelectedLeague(league);
    }
    
    return (
        <div className="FitbaContainer">
            <h2>Container</h2>
            <LeagueSelector leagues={leagues} onLeagueSelected={onLeagueSelected}/>
            {selectedLeague ? <LeagueItemDetail league={selectedLeague}/>: null}
            {/* <LeagueItemDetail league={leagues}/> */}
        </div>
    )
}

export default FitbaContainer;