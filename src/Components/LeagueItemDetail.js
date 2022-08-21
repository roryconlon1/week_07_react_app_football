import React from "react";

const LeagueItemDetail = ({league}) => {


    return(
        <div>
            <h1>This is a League</h1>
            <h2>{league.name}</h2>
        </div>
    )
}

export default LeagueItemDetail;