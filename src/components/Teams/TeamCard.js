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
        debugger;
        this.state = {
            team: props.location.state.team,
            news: news,
            standings:PlTable,
            coach:players.coachs[0],
            players:players.players,
            user:'',
            loggedIn: false
        }
        this.newsService= new NewsService();
        this.teamService = new TeamService();
        this.userService = new UserService();
        this.userService.is_logged_in().then(response => {
            if (response.data !== "NOT_LOGGED_IN") {
                this.setState({
                    loggedIn:true,
                    user:response.data
                })
            }
        })

    }

    componentDidMount() {
        this.teamService.getTeamPlayers(this.state.team.team_id).then(
            api => {
                debugger;
                this.setState({
                    coach:api.api.coachs[0],
                    players:api.api.players
                })
            }
        )

        this.teamService.getLeagueStanding(this.props.location.state.league_id).then((api)=>
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

    render() {
        return (
            <div className="socc-height-inherit socc-background">
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation loggedIn ={this.state.loggedIn}
                                user={this.state.user}/>
                </div>
                <div className="card mt-2">
                    <div className="card-header">
                        <div className="row m-3">
                            <div className="col-3 club-logo-container">
                                <img src={this.state.team.logo}
                                     height="110px"
                                     className="m-2 club-logo"/>
                            </div>
                            <div className="col-9 justify-content-center team-card-name">
                                <h1 className="font-weight-bolder ">{this.state.team.name}</h1>
                                <button className="btn btn-primary">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 mt-2 pl-4 pr-0">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="text-center">Roster</h5>
                            </div>
                            <div className="card-body">
                                <Roster
                                    players={this.state.players}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <ul className="list-group">
                            {this.state.news.map((article =>
                                    <li className="list-group-item mt-2">
                                    <div className="card">
                                        <div className="card-header">
                                            <img className="d-block p-2 rounded socc-news-img"
                                                 src={article.urlToImage}
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="font-weight-bolder text-center">{article.title}</h4>
                                        </div>
                                    </div>
                                    </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-3 pr-4 pt-2 pl-0">
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