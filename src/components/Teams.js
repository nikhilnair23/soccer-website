import React, {Component} from 'react'
import Navigation from "./Navigation/Navigation";
import defaultTeams from '../data/teams'
import leagues from '../data/leagues'
import './Teams.css'
import Dropdown from "react-bootstrap/Dropdown";
import {DropdownButton} from "react-bootstrap";
import TeamService from '../services/TeamService';

let self;
export default class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            league_id: 2,
            leagues: leagues,
            league: 'Premier League',
            teams: []
        }
        self = this;
        this.teamService = new TeamService();
    }

    componentDidMount() {
        this.setState({
            teams: this.sortObjects(defaultTeams.teams)
        })
    }

    sortObjects = (obj) => {
        let newArr = [];
        Object.values(obj).map((team) =>
            newArr.push(team)
        )
        newArr.sort(this.compare);
        return newArr;
    }

    compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    changeLeague = (league) => {
        this.teamService.findTeams(league.league_id).then((api) => {
                self.setState({
                    teams: api.api.teams,
                    league: league.name,
                    league_id: league.league_id
                })
            }
        )
    }

    selectTeam = (team) =>
        this.props.history.push({
            pathname:'/teams/'+team.team_id,
            state : {
                team:team,
                league_id: this.state.league_id
            }
        })


    render() {
        return (
            <div className="socc-height-inherit socc-background">
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation/>
                </div>
                <div className="row socc-height-inherit">
                    <div className="col-3">
                        <h2 className="text-white text-wrap">Placeholder</h2>
                    </div>
                    <div className="col-6">
                        <div className="card mt-3">
                            <div>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    className="pull-right p-2"
                                    title={this.state.league}>
                                    {
                                        Object.values(this.state.leagues)
                                            .map((league) => {
                                                return (
                                                    <Dropdown.Item
                                                        onClick={() => this.changeLeague(league)}
                                                        id={league.league_id}>
                                                        {league.name}
                                                    </Dropdown.Item>
                                                )
                                            })
                                    }


                                    {/*<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                                </DropdownButton>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <ul id="double" className="list-group-flush pr-5"><span
                                        className="code-comment"></span>
                                        {
                                            Object.values(this.state.teams)
                                                .slice(0, 10)
                                                .map((team) => {
                                                    return (
                                                        <li className="list-group-item">
                                                            <div onClick={()=>this.selectTeam(team)}
                                                                className="team-container team-div">
                                                                    <img className="img mr-3"
                                                                         height="45px"
                                                                         width="40px"
                                                                         src={team.logo}/>
                                                                    <h5 className="text-center">{team.name}</h5>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                        }
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul id="double" className="list-group-flush pr-5"><span
                                        className="code-comment"></span>
                                        {
                                            Object.values(this.state.teams)
                                                .slice(10, (Object.keys(this.state.teams).length))
                                                .map((team) => {
                                                    return (
                                                        <li className="list-group-item">
                                                            <div onClick={()=>this.selectTeam(team)}
                                                                className="team-container team-div">
                                                                <img className="img mr-3"
                                                                     height="45px"
                                                                     width="40px"
                                                                     src={team.logo}/>
                                                                <h5 className="mt-2">{team.name}</h5>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        );
    }
}