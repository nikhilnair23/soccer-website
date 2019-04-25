import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
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
import crest from "../img/crest.png"
import {withRouter} from 'react-router';

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
            user: '',
        };
        this.newsService = new NewsService();
        this.userService = new UserService();
        this.teamService = new TeamService();
        var userData;
        this.userService.is_logged_in().then(response => {
            console.log(response.data);
            if (response.data !== "NOT_LOGGED_IN") {
                userData = response.data
                this.teamService.getTeamCrest(userData.favorite_team).then((response) => {
                    debugger;
                    this.setState({
                        loggedIn: true,
                        user: userData,
                        team_crest: response.data
                    })
                })

            }
        })
    }

    componentDidMount() {
        this.newsService.get_news().then(response => {
            this.setState(
                {articles: response.articles}
            )
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location != prevProps.location) {
            debugger;
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

    goToLogin = () =>
        this.props.history.push('/login')

    setTeam = (team_name) => {
        this.state.user['favorite_team'] = team_name;
    };

    render() {
        console.log(this.state.user);
        return (
            <div className="container-fluid socc-background" id="navbar-container">
                <div className="socc-height-inherit socc-background">
                    <div className={"container-fluid"} id="navbar-container">
                        <Navigation loggedIn={this.state.loggedIn}
                                    user={this.state.user}/>
                    </div>
                    <div className="container-fluid socc-height-inherit">
                        <div className="row socc-height-inherit">
                            <div className="col-3">
                                <div className="card fav-team-card bg-black">
                                    <div className="fav-team-text">
                                        <h4 className="text-center text-white font-weight-bold pt-2 pb-2">Your Favourite Team</h4>
                                    </div>
                                    <div className="fav-team-logo text-center">
                                        <img className="img-thumbnail fav-team-logo-img mb-2"
                                            height="100px"
                                             width="100px"
                                            src={this.state.team_crest}/>
                                        {this.state.loggedIn === false
                                            ?
                                            <a
                                                onClick={() => this.goToLogin()}>
                                            <p className="team-text-prompt ">Login to select your favourite team</p>
                                            </a>
                                            :
                                            <p></p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <NewsCarousel
                                    articles={this.state.articles}
                                />
                            </div>
                            <div className="col-3">
                                <div className="card news-articles-card">
                                    <div className="card-header mt-3">
                                        <h4>News Articles</h4>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            {this.state.articles.slice(0,5).map((article)=>{
                                                return(
                                                <li className="list-group-item">
                                                    <a  className="text-black-50"
                                                        href={article.url} target="_blank">
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


/*onRouteChange = (routeTo) => {
        if (routeTo === 'signout') {
            this.setState(
                {
                    routeStatus: 'not_logged_in'
                }
            )
        }
        if ((this.state.route ==='signin' || this.state.route ==='favorite_team') && routeTo === 'home') {
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
    };*/

/*getUser = (user) => {
        this.setState(
            {
                user: user
            }
        );
    };*/

/*
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
            <Fixtures onRouteChange={this.onRouteChange}
                      user={this.state.user}/>

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
 */
/*<div className={"container-fluid"} id="navbar-container">
    <div className="socc-height-inherit">
        <div className={"container-fluid"} id="navbar-container">
            <Navigation routeStatus={this.state.routeStatus}
                        loggedIn={this.state.loggedIn}
                        user={this.state.user}
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
    {/!*<FavoriteTeam/>*!/}
</div>
)
}

}*/
