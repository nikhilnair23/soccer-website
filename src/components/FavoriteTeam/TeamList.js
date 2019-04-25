import React from 'react'
import TeamCard from './TeamCard';

const TeamList = ({Teams, teamSelect}) => {
    return (
        <div>
            {
                Teams.map(
                    team => {
                        return (
                            <TeamCard
                                key={team.team_id}
                                id={team.team_id}
                                name={team.name}
                                crest={team.logo}
                                teamSelect={teamSelect}/>
                        );
                    }
                )
            }
        </div>
    );
};

export default TeamList;