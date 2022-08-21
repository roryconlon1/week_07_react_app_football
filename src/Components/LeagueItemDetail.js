import React from "react";

const LeagueItemDetail = ({league}) => {

    return(
        <div>
            <h1>{league.team.name}</h1>
            <img src={league.team.logos[0].href}></img>
        </div>
    )

}

export default LeagueItemDetail;