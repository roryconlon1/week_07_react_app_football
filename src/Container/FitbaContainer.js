import React, { useEffect, useState } from "react";
import LeagueItemDetail from "../Components/LeagueItemDetail";
// import LeagueList from "../Components/LeagueList";
import LeagueSelector from "../Components/LeagueSelector"


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
            <h2>Container</h2>
            <LeagueSelector allLeagues={allLeagues} leagues={leagues} onLeagueSelected={onLeagueSelected}/>
            {selectedLeague ? <LeagueItemDetail url={allLeagues[0].url} league={selectedLeague}/>: null}
            {/* <LeagueItemDetail league={leagues}/> */}
        </div>
    )
}

export default FitbaContainer;