import React from "react";

const TeamTable = ({standings,teamId}) => {
    return(
        <table align="center"
            className="table table-striped team-table">
            <thead>
            <tr>
                <th scope="col">Rank</th>
                <th scope="col">Team Name</th>
                <th scope="col">GP</th>
                <th scope="col">Points</th>
                <th scope="col">GD</th>
            </tr>
            </thead>
            <tbody>
            {
                standings.map(
                    team =>{
                        if(team.team_id==teamId){
                            return(
                                <tr className="table-primary">
                                    <th scope="row">{team.rank}</th>
                                    <td>{team.teamName}</td>
                                    <td>{team.matchsPlayed}</td>
                                    <td className="text-center">{team.points}</td>
                                    <td>{team.goalsDiff}</td>
                                </tr>
                            )
                        }
                        else{
                            return(
                                <tr className="">
                                    <th scope="row">{team.rank}</th>
                                    <td>{team.teamName}</td>
                                    <td>{team.matchsPlayed}</td>
                                    <td className="text-center">{team.points}</td>
                                    <td>{team.goalsDiff}</td>
                                </tr>
                            )
                        }
                    }
                )
            }
            </tbody>
        </table>
    )
}

export default TeamTable