import React from "react";

const LaLiga = ({standings}) =>
    <table className="table-light table-responsive-md table-hover">
        <thead>
        <tr>
            <th scope="col">Rank</th>
            <th scope="col">Team Name</th>
            <th scope="col">Matches</th>
            <th scope="col">Points</th>
            <th scope="col">Wins</th>
            <th scope="col">Loses</th>
            <th scope="col">Draws</th>
            <th scope="col">Goals for</th>
            <th scope="col">Goals against</th>
            <th scope="col">Goal Difference</th>
        </tr>
        </thead>
        <tbody>
        {
            standings.map(
                team =>
                    <tr>
                        <th scope="row">{team.rank}</th>
                        <td>{team.teamName}</td>
                        <td>{team.matchsPlayed}</td>
                        <td>{team.points}</td>
                        <td>{team.win}</td>
                        <td>{team.lose}</td>
                        <td>{team.draw}</td>
                        <td>{team.goalsFor}</td>
                        <td>{team.goalsAgainst}</td>
                        <td>{team.goalsDiff}</td>
                    </tr>
            )
        }
        </tbody>
    </table>

export default LaLiga;