import React, {Component} from 'react'
import Navigation from "../Navigation/Navigation";
import './Teams.css'
import NewsService from "../../services/NewsService"
import TeamService from "../../services/TeamService"
import news from '../../services/news'
import PlTable from '../../data/PL_Table'
import players from '../../data/players'
import TeamTable from "./TeamTable";
import Roster from "./Roster";
import UserService from "../../services/UserService";


export default class TeamCard extends Component {
    constructor(props) {
        super(props);
        console.log(players)
        this.state = {
            team: props.location.state.team,
            news: news,
            standings: PlTable,
            coach: players.coachs[0],
            players: players.players,
            user: '',
            loggedIn: false,
            followedTeams: []
        }
        this.newsService = new NewsService();
        this.teamService = new TeamService();
        this.userService = new UserService();
        let userData = ''
        this.userService.is_logged_in().then(response => {
            if (response.data !== "NOT_LOGGED_IN") {
                userData = response.data
                this.userService.getTeamsFollowed(userData.username).then((response) => {
                    this.setState({
                        loggedIn: true,
                        user: userData,
                        followedTeams: response.data
                    })
                })

                /*this.setState({
                    loggedIn:true,
                    user:response.data
                })*/
            }
        })
    }

    componentDidMount() {
        this.teamService.getTeamPlayers(this.state.team.team_id).then(
            api => {
                this.setState({
                    coach: api.api.coachs[0],
                    players: api.api.players
                })
            }
        )

        this.teamService.getLeagueStanding(this.props.location.state.league_id).then((api) =>
            this.setState({
                standings: api.api.standings[0]
            })
        )
        this.newsService.get_news_for_team(this.state.team.name).then(
            (news => {
                    this.setState({
                        news: news.articles
                    })
                }
            ))
    }

    followTeam = () => {
        if (this.state.loggedIn === false) {
            alert("You need to be logged in to follow a team");
            return;
        }
        this.userService.addTeamToFollowList(this.state.user.username, this.state.team.team_id, this.state.team.name)
            .then(response => {
                this.userService.getTeamsFollowed(this.state.user.username).then(response => {
                    debugger;
                    this.setState({
                        followedTeams: response.data
                    })

                })
            })
        /*this.state.teams.map(
            team => {
                fetch('https://soccer-website-server-sp19.herokuapp.com/team_registry', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        team_id: team.team_id,
                        name: team.name,
                        logo: team.logo
                    })
                })
                    .then(console.log)
            }
        )*/
    };

    checkIfTeamIsFollowed = (arr,team) => {
        for (let i =0;i<arr.length;i++){
            if (arr[0].TEAM===team){
                return true;
            }
        }
        return false;
    }

    render() {
        console.log(this.state.followedTeams)
        console.log(this.state.team.name)
        return (
            <div className="socc-height-inherit socc-background">
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation loggedIn={this.state.loggedIn}
                                user={this.state.user}/>
                </div>
                <div className="card mt-2 ml-2 mr-2">
                    <div className="card-header ml-2">
                        <div className="row m-3">
                            <div className="col-3 club-logo-container">
                                <img src={this.state.team.logo}
                                     height="110px"
                                     className="m-2 club-logo"/>
                            </div>
                            <div className="col-9 justify-content-center team-card-name">
                                <h1 className="font-weight-bolder">{this.state.team.name}</h1>
                                {   this.checkIfTeamIsFollowed(this.state.followedTeams,this.state.team.name)
                                    ?
                                    <button
                                        className="btn btn-success">Following</button>
                                    :
                                    <button
                                        onClick={this.followTeam}
                                        className="btn btn-primary">Follow</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 d-none d-lg-block mt-3 pl-4 pr-0">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="text-center">Roster</h5>
                            </div>
                            <div className="ml-2">
                                <Roster
                                    players={this.state.players}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-8 col-sm-12">
                        <ul className="list-group p-2">
                            {this.state.news.map((article =>
                                    <li className="list-group-item mt-2">
                                        <div className="card">
                                            <div className="card-header">
                                                <img className="d-block p-2 rounded socc-news-img"
                                                     src={article.urlToImage}
                                                />
                                            </div>
                                            <div className="card-body card-article-text">
                                                <h4 className="font-weight-bolder text-center">{article.title}</h4>
                                            </div>
                                        </div>
                                    </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 d-none d-md-block mt-2 pr-4 pt-2 pl-0">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="text-center">League Table</h5>
                            </div>
                            <div className="card-body">
                                <TeamTable standings={this.state.standings}
                                           teamId={this.state.team.team_id}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}