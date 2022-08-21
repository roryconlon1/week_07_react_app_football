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
    }, [allLeagues])

    
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
            <h1>World Football Teams</h1>
            <LeagueList allLeagues={allLeagues} league={leagues} onLeagueSelected={onLeagueSelected}/>
            <TeamSelector allLeagues={allLeagues} leagues={leagues} onLeagueSelected={onLeagueSelected}/>
            {selectedLeague ? <TeamItemDetail url={allLeagues[0].url} league={selectedLeague}/>: null}
        </div>
    )
}

export default FitbaContainer;