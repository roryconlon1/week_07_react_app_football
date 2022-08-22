import React, { useEffect, useState } from "react";
import TeamItemDetail from "../Components/TeamItemDetail";
import LeagueList from "../Components/LeagueList";
import TeamSelector from "../Components/TeamSelector";
import LeagueItemDetail from "../Components/LeagueItemDetail";


const FitbaContainer = ({allLeagues}) => {

    const [leagues, setLeagues] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState(null);

    useEffect(() => {
        getLeagues(allLeagues[0].url);
    }, [])

    
    const getLeagues = url => {
        fetch(url).
        then(res => res.json()).
        then(leagues => setLeagues(leagues.data.standings));
    }
    
    const onLeagueSelected = (league) => {
        setSelectedLeague(league);
    }
    
    return (
        <div className="FitbaContainer">
            <h1 className="header">World Football Teams</h1>
            <hr></hr>
            <LeagueList allLeagues={allLeagues} league={leagues} onLeagueSelected={onLeagueSelected}/>
            {/* {selectedLeague ? <LeagueItemDetail league={leagues}/>: null} */}
            <TeamSelector allLeagues={allLeagues} leagues={leagues} onLeagueSelected={onLeagueSelected}/>
            <hr></hr>
            {selectedLeague ? <TeamItemDetail url={allLeagues[0].url} league={selectedLeague}/>: null}


        </div>
    )
}

export default FitbaContainer;