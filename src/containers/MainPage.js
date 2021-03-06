import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import NewsService from "../services/NewsService"
import Navigation from "../components/Navigation/Navigation";
import SignIn from "../components/SignIn/SignIn";
import NewsCarousel from "../components/News/NewsCarousel";
import SearchService from "../services/SearchService";
import UserService from '../services/UserService';
import TeamService from '../services/TeamService'
import FavoriteTeam from "../components/FavoriteTeam/FavoriteTeam";
import Register from "../components/Register/Register";
import Standings from "../components/standings/Standings";
import Fixtures from "../components/Fixtures/Fixtures";
import Profile from "../components/Profile/Profile";
import Users from "../components/Users/Users";
import logo from "../img/Logo.png"
import './MainPage.css'
import crest from "../img/crest.png"
import { withRouter } from 'react-router';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            article_no: 0,
            route: 'home',
            routeStatus: 'not_logged_in',
            loggedIn: false,
            team_crest: crest,
            team_name: '',
            user: '',
        };
        this.newsService = new NewsService();
        this.userService = new UserService();
        this.teamService = new TeamService();
        var userData;
        this.userService = new UserService();
        this.userService.is_logged_in().then(response => {
            console.log(response.data);
            if (response.data !== "NOT_LOGGED_IN") {
                userData = response.data
                this.teamService.getTeamCrest(userData.favorite_team).then((response) => {
                    let team_crest = crest
                    if (response.data !== undefined) {
                        team_crest = response.data.logo
                    }
                    this.setState({
                        loggedIn: true,
                        user: userData,
                        team_crest: team_crest
                    })
                })
            }
        })
    }

    componentDidMount() {
        this.newsService.get_news().then(response => {
            this.setState(
                { articles: response.articles }
            )
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location != prevProps.location) {
            this.userService.is_logged_in().then(response => {
                console.log(response.data);
                if (response.data === "NOT_LOGGED_IN") {
                    this.setState({
                        loggedIn: false,
                    })
                }
            })
        }
    }

    navigate = (title, description, content, url, urlToImage, date, author) =>
        this.props.history.push({
            pathname: '/details/' + title,
            state: {
                title: title,
                description: description,
                content: content,
                url: url,
                urlToImage: urlToImage,
                date: date,
                author: author
            }
        })

    goToLogin = () =>
        this.props.history.push('/login')

    setTeam = (team_name) => {
        this.state.user['favorite_team'] = team_name;
    };

    render() {
        return (
            <div className="container-fluid socc-background" id="navbar-container">
                <div className="socc-height-inherit socc-background">
                    <div className={"container-fluid"} id="navbar-container">
                        <Navigation loggedIn={this.state.loggedIn}
                            user={this.state.user} />
                    </div>
                    <div className="container-fluid socc-height-inherit">
                        <div className="row socc-height-inherit">
                            {/* <div className="col-3 d-none d-lg-block">
                                <div className="card fav-team-card bg-black">
                                    <div className="team-information">
                                        <div className="fav-team-text">
                                            <h4 className="text-center text-white font-weight-bold pt-2 pb-2">Your Favourite Team</h4>
                                        </div>
                                        <div className="fav-team-logo text-center">
                                            <img className="img-thumbnail fav-team-logo-img mb-2"
                                                height="150px"
                                                width="150px"
                                                src={this.state.team_crest} />
                                            {this.state.loggedIn === false
                                                ?
                                                <a
                                                    onClick={() => this.goToLogin()}>
                                                    <p className="team-text-prompt ">Login to select your favourite team</p>
                                                </a>
                                                :
                                                <h4 className="fav-team-name">{this.state.user.favorite_team}</h4>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-lg-8 col-md-7 carousel-column">
                                <NewsCarousel
                                    articles={this.state.articles}
                                />
                            </div>
                            <div className="col-lg-4 col-md-5">
                                <div className="card news-articles-card mb-3 bg-black-90">
                                    <div className="card-header mt-3">
                                        <h4 className="text-white font-weight-bolder">News Articles</h4>
                                    </div>
                                    <div className="card-body article-card-body">
                                        <ul className="list-group">
                                            {this.state.articles.slice(0, 5).map((article) => {
                                                return (
                                                    <li className="list-group-item border-danger bg-black-90 news-links-right"
                                                        onClick={() => this.navigate(article.title, article.description, article.content,
                                                            article.url, article.urlToImage, article.publishedAt, article.author
                                                        )}
                                                    >
                                                        <a className="text-white font-weight-bold">
                                                            {article.title}
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(MainPage)


