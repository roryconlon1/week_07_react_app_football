import React from "react";
import TeamItemDetail from "./TeamItemDetail";

const LeagueList = ({allLeagues, onLeagueSelected}) => {

    const LeagueOptions = allLeagues.map((league, index) => {
        return <option key={index}>{league.name}</option>
    })

    const handleChange = (event) => {
        const chosenLeague = allLeagues[event.target.value];
        onLeagueSelected(chosenLeague);
    }


    return(
        <select className="dropdown" defaultValue="" onChange={handleChange}>
        <option value="">Choose a League</option>
        {LeagueOptions}
        </select>

    )
}

export default LeagueList