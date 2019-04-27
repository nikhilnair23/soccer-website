import React from "react";


const Table = ({standings}) =>
    <div className='tc scroll_table'
         style={{
             overflow: 'scroll',
             border: '3px solid black',
             //width: '1400px',
             //width: '80%',
             height: '900px',
             margin: '10px'
         }}>
        <table
            className=" standings_table table-light table-striped table-responsive-md table-hover f6 w-100 mw8 center tc">
            <thead>
            <tr>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Rank</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Team Name</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Matches</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Points</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Wins</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Loses</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc hide_small" scope="col">Draws</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc hide_small hide_small2" scope="col">Goals for</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc hide_small hide_small2" scope="col">Goals against</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc hide_small" scope="col">Goal Difference
                </th>
            </tr>
            </thead>
            <tbody className='lh-copy'>
            {
                standings.map(
                    team =>
                        <tr>
                            <th scope="row">{team.rank}</th>
                            <td className='pv3 pr3 bb b--black-20'>{team.teamName}</td>
                            <td className='pv3 pr3 bb b--black-20 '>{team.matchsPlayed}</td>
                            <td className='pv3 pr3 bb b--black-20'>{team.points}</td>
                            <td className='pv3 pr3 bb b--black-20 '>{team.win}</td>
                            <td className='pv3 pr3 bb b--black-20 '>{team.lose}</td>
                            <td className='pv3 pr3 bb b--black-20 hide_small'>{team.draw}</td>
                            <td className='pv3 pr3 bb b--black-20 hide_small hide_small2'>{team.goalsFor}</td>
                            <td className='pv3 pr3 bb b--black-20 hide_small hide_small2'>{team.goalsAgainst}</td>
                            <td className='pv3 pr3 bb b--black-20 hide_small'>{team.goalsDiff}</td>
                        </tr>
                )
            }
            </tbody>
        </table>
    </div>

export default Table;