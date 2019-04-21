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
                                key={team.id}
                                id={team.id}
                                name={team.name}
                                crest={team.crestUrl}
                                teamSelect={teamSelect}/>
                        );
                    }
                )
            }
        </div>
    );
};

export default TeamList;