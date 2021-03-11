import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import TeamDetails from '../TeamDetails/TeamDetails';
import './Team.css'

const Team = (props) => {
    const { idTeam, strTeamBadge, strTeam, strSport } = props.team;
    return (
        <div className="team-container">
            <div className="team">
                <div className="team-badge">
                    <img src={strTeamBadge} alt={strTeam} />
                </div>
                <div className="team-name">{strTeam}
                </div>
                <div className="sports-type">Sports type: {strSport}
                </div>
                <div className="button-container">
                    <Link to={`/teams/${idTeam}`} className="explore" role="button">Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default Team;