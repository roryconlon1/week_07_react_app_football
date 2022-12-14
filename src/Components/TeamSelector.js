import React from "react";

const TeamSelector = ({leagues, onLeagueSelected, selectedLeague}) => {
    
    const LeagueOptions = leagues.map((league, index) => {
        return <option value={index} key={index}>{league.team.name}</option>
    })

    const handleChange = (event) => {
        const chosenLeague = leagues[event.target.value];
        onLeagueSelected(chosenLeague);
    }

    return(
        <select className="dropdown" defaultValue="" onChange={handleChange}>
        <option value="">Choose a Team</option>
        {LeagueOptions}
        </select>
    )
}

export default TeamSelector;