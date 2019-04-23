import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import NewsService from "../services/NewsService"
import Navigation from "../components/Navigation/Navigation";
import SignIn from "../components/SignIn/SignIn";
import NewsCarousel from "../components/News/NewsCarousel";
import SearchService from "../services/SearchService";
import UserService from '../services/UserService';
import FavoriteTeam from "../components/FavoriteTeam/FavoriteTeam";
import Register from "../components/Register/Register";
import Standings from "../components/standings/Standings";
import Fixtures from "../components/Fixtures/Fixtures";
import Profile from "../components/Profile/Profile";
import Users from "../components/Users/Users";

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            article_no: 0,
            route: 'home',
            routeStatus: 'not_logged_in',
            loggedIn: false,
            user: [],
            userInfo: ''
        };
        this.newsService = new NewsService();
        this.userService = new UserService();
        this.userService.is_logged_in().then(response => {
            if (response.data !== "NOT_LOGGED_IN") {
                this.setState({
                    loggedIn:true,
                    userInfo:response.data
                })
            }
        })
    }

    componentDidMount() {
        this.newsService.get_news().then(response => {
            this.setState(
                { articles : response.articles}
            )
        })
        /*this.setState(
            {articles: this.newsService.get_news()}
        )*/
    }

    onRouteChange = (routeTo) => {
        if (routeTo === 'signout') {
            this.setState(
                {
                    routeStatus: 'not_logged_in'
                }
            )
        }
        if (routeTo === 'home') {
            this.setState(
                {
                    routeStatus: 'is_logged_in'
                }
            )
        }
        this.setState(
            {
                route: routeTo
            }
        )
    };

    getUser = (user) => {
        this.setState(
            {
                user: user
            }
        );
        //console.log(this.state.user);
    };

    setTeam = (team_name) => {
        this.state.user['favorite_team'] = team_name;
    };

    render() {
        return (
            this.state.route === 'signin' || this.state.route === 'signout'
            ?
            <SignIn onRouteChange={this.onRouteChange}
                    getUser={this.getUser}/>
            :
            this.state.route === 'register'
            ?
            <Register onRouteChange={this.onRouteChange}
                      getUser={this.getUser}/>
            :
            this.state.route === 'favorite_team'
            ?
            <FavoriteTeam onRouteChange={this.onRouteChange}
                          setTeam={this.setTeam}
                          user={this.state.user}/>
            :
            this.state.route === 'standings'
            ?
            <Standings onRouteChange={this.onRouteChange}/>
            :
            this.state.route === 'fixtures'
            ?
            <Fixtures onRouteChange={this.onRouteChange}/>
            :
            this.state.route === 'profile'
            ?
            <Profile user={this.state.user}
                     onRouteChange={this.onRouteChange}/>
            :
            this.state.route === 'users'
            ?
            <Users onRouteChange={this.onRouteChange}/>
            :
            <div className={"container-fluid"} id="navbar-container">
            <div className="socc-height-inherit">
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation routeStatus={this.state.routeStatus}
                                loggedIn ={this.state.loggedIn}
                                onRouteChange={this.onRouteChange}/>
                </div>
                <div className="container-fluid socc-height-inherit">
                    <div className="row socc-height-inherit">
                        <div className="col-3">
                            <h2 className="text-white text-wrap">Placeholder</h2>
                        </div>
                        <div className="col-6">
                            <NewsCarousel
                                articles={this.state.articles}
                            />
                        </div>
                        <div className="col-3">
                            <h2 className="text-white">sample</h2>
                        </div>
                    </div>
                </div>
            </div>
                {/*<FavoriteTeam/>*/}
            </div>
        )
    }

}