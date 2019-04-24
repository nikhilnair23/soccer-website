import React from "react";
import {Component} from 'react';

class UCL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            standings: this.props.standings,
            group: 'Group A'
        }
    }

    changeGroup = (group) => {
        this.setState(
            {
                group: group
            }
        )
        document.getElementById('group_button').innerText = group;
    };


    render() {
        return(
            <div className='tc'
                 style={{
                     overflow: 'scroll',
                     border: '3px solid black',
                     width: '1400px',
                     height: '900px',
                     margin: '10px'
                 }}>
                <div className="dropdown ma3">
                    <button
                            id='group_button'
                            className="btn btn-warning dropdown-toggle" type="button"
                            data-toggle="dropdown">Group A
                        <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li className="nav-item">
                            <a id='groupA'
                               className={this.state.group === 'Group A'
                                          ? "nav-link active ma3 bg-success text-light"
                                          : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                               onClick={() => this.changeGroup('Group A')}>Group A</a>
                        </li>
                        <li className="nav-item">
                            <a id='groupB'
                               className={this.state.group === 'Group B'
                                          ? "nav-link active ma3 bg-success text-light"
                                          : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                               onClick={() => this.changeGroup('Group B')}>Group B</a>
                        </li>
                        <li className="nav-item">
                            <a id='groupC'
                               className={this.state.group === 'Group C'
                                          ? "nav-link active ma3 bg-success text-light"
                                          : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                               onClick={() => this.changeGroup('Group C')}>Group C</a>
                        </li>
                        <li className="nav-item">
                            <a id='groupD'
                               className={this.state.group === 'Group D'
                                          ? "nav-link active ma3 bg-success text-light"
                                          : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                               onClick={() => this.changeGroup('Group D')}>Group D</a>
                        </li>
                        <li className="nav-item">
                            <a id='groupE'
                               className={this.state.group === 'Group E'
                                          ? "nav-link active ma3 bg-success text-light"
                                          : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                               onClick={() => this.changeGroup('Group E')}>Group E</a>
                        </li>
                        <li className="nav-item">
                            <a id='groupF'
                               className={this.state.group === 'Group F'
                                          ? "nav-link active ma3 bg-success text-light"
                                          : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                               onClick={() => this.changeGroup('Group F')}>Group F</a>
                        </li>
                        <li className="nav-item">
                            <a id='groupG'
                               className={this.state.group === 'Group G'
                                          ? "nav-link active ma3 bg-success text-light"
                                          : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                               onClick={() => this.changeGroup('Group G')}>Group G</a>
                        </li>
                        <li className="nav-item">
                            <a id='groupH'
                               className={this.state.group === 'Group H'
                                          ? "nav-link active ma3 bg-success text-light"
                                          : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                               onClick={() => this.changeGroup('Group H')}>Group H</a>
                        </li>
                    </ul>
                </div>
                <table className="table-light table-striped table-responsive-md table-hover f6 w-100 mw8 center tc">
                    <thead>
                    <tr>
                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Rank</th>
                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Team Name</th>
                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Group</th>
                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Points</th>
                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Wins</th>
                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Loses</th>
                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Draws</th>
                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Goals for</th>
                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Goals against</th>
                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white tc" scope="col">Goal Difference</th>
                    </tr>
                    </thead>
                    <tbody className='lh-copy'>
                    {
                        this.state.standings
                            .filter(
                                team => team.group === this.state.group
                            )
                            .map(
                            team =>
                                <tr>
                                    <th scope="row">{team.rank}</th>
                                    <td className='pv3 pr3 bb b--black-20'>{team.teamName}</td>
                                    <td className='pv3 pr3 bb b--black-20'>{team.group}</td>
                                    <td className='pv3 pr3 bb b--black-20'>{team.points}</td>
                                    <td className='pv3 pr3 bb b--black-20'>{team.win}</td>
                                    <td className='pv3 pr3 bb b--black-20'>{team.lose}</td>
                                    <td className='pv3 pr3 bb b--black-20'>{team.draw}</td>
                                    <td className='pv3 pr3 bb b--black-20'>{team.goalsFor}</td>
                                    <td className='pv3 pr3 bb b--black-20'>{team.goalsAgainst}</td>
                                    <td className='pv3 pr3 bb b--black-20'>{team.goalsDiff}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>

        )
    }

}

export default UCL;