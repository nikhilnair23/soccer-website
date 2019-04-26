import React, {Component} from 'react'
import Navigation from "../Navigation/Navigation";
import defaultTeams from '../../data/teams'
import leagues from '../../data/leagues'
import './Teams.css'
import Dropdown from "react-bootstrap/Dropdown";
import {DropdownButton} from "react-bootstrap";
import UserService from '../../services/UserService';
import TeamService from '../../services/TeamService';

let self;
export default class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            league_id: 2,
            leagues: leagues,
            league: 'Premier League',
            teams: [],
            user: '',
            loggedIn: false
        }
        self = this;
        this.teamService = new TeamService();
        this.userService = new UserService();
        this.userService.is_logged_in().then(response => {
            if (response.data !== "NOT_LOGGED_IN") {
                this.setState({
                                  loggedIn: true,
                                  user: response.data
                              })
            }
        })
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

    followTeam = (username, teamId,team) => {
        if (this.state.loggedIn === false) {
            alert('You need to be logged in to follow a team')
        }
        else{
            this.userService.addTeamToFollowList(username,teamId,team).then(response => {
                this.userService.is_logged_in().then(response => {
                    if (response.data !== "NOT_LOGGED_IN") {
                        this.setState({
                            user: response.data
                        })
                    }
                })
            })
        }
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
                                    pathname: '/teams/' + team.team_id,
                                    state: {
                                        team: team,
                                        league_id: this.state.league_id
                                    }
                                });

    render() {
        return (
            <div className="socc-height-inherit socc-background">
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation loggedIn={this.state.loggedIn}
                                user={this.state.user}/>
                </div>
                {/*<button type='button'*/}
                        {/*className='btn btn-success ma5'*/}
                        {/*onClick={this.addTeams}>*/}
                    {/*Add teams*/}
                {/*</button>*/}
                <div className="row socc-height-inherit">
                    <div className="col-2 d-none d-sm-block ">
                        <h2 className="text-white text-wrap"></h2>
                    </div>
                    <div className="col-12 ml-3">
                        <div className="card mt-3 mb-3 bg-black">
                            <div>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    className="pull-right mr-3 mt-3 mb-3"
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
                            <div className="row no-gutters">
                                <div className="col-6 ">
                                    <ul id="double" className="list-group-flush pl-3"><span
                                        className="code-comment"></span>
                                        {
                                            Object.values(this.state.teams)
                                                .slice(0, 10)
                                                .map((team) => {
                                                    return (
                                                        <li className="list-group-item bg-white-10">
                                                            <div onClick={() => this.selectTeam(
                                                                team)}
                                                                 className="team-container team-div">
                                                                <img className="img mr-3"
                                                                     height="45px"
                                                                     width="40px"
                                                                     src={team.logo}/>
                                                                <div className="text-left">{team.name}</div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                        }
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul id="double" className="list-group-flush "><span
                                        className="code-comment"></span>
                                        {
                                            Object.values(this.state.teams)
                                                .slice(10, (Object.keys(this.state.teams).length))
                                                .map((team) => {
                                                    return (
                                                        <li className="list-group-item bg-white-10 mr-3">
                                                            <div onClick={() => this.selectTeam(
                                                                team)}
                                                                 className="team-container team-div">
                                                                <img className="img mr-3"
                                                                     height="45px"
                                                                     width="40px"
                                                                     src={team.logo}/>
                                                                <div className="text-left">{team.name}</div>
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
                    <div className="col-2 d-none-d-sm-block">
                    </div>
                </div>
            </div>
        );
    }
}