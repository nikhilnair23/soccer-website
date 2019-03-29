import React from 'react'
import TeamCard from './TeamCard';

const TeamList = ( {Teams} ) => {
    return (
        <div>
            {
                Teams.map(
                    team => {
                        return (
                            <TeamCard
                                key = {team.id}
                                id = {team.id}
                                name = {team.name}
                                crest = {team.crestUrl}/>
                        );
                    }
                )
            }
        </div>
    );
};

export default TeamList;