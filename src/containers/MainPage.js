import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import NewsCard from "../components/NewsCard";
import NewsService from "../services/NewsService"
import Card from "../components/Card";
import Navigation from "../components/Navigation/Navigation";
import SignIn from "../components/SignIn/SignIn";
import NewsCarousel from "../components/NewsCarousel";
import SearchService from "../services/SearchService";
import {Redirect} from 'react-router';
import FavoriteTeam from "../components/FavoriteTeam/FavoriteTeam";

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            article_no: 0,
            route: 'signin',
            routeStatus: 'not_logged_in'
        };
        this.newsService = new NewsService();
    }

    componentDidMount() {
        /*this.newsService.get_news().then(response => {
            this.setState(
                { articles : response.articles}
            )
        })*/
        this.setState(
            {articles: this.newsService.get_news()}
        )
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
                    routeStatus: 'logged_in'
                }
            )
        }
        this.setState(
            {
                route: routeTo
            }
        )
    };

    render() {
        return (
            /*this.state.route === 'signin' || this.state.route === 'signout'
            ?
            <SignIn onRouteChange={this.onRouteChange}/>
            :*/


            <div className={"container-fluid"} id="navbar-container">
                {/*<div className={"container-fluid"} id="navbar-container">*/}
                    {/*<Navigation/>*/}
                {/*</div>*/}
                {/*<div className={"container-fluid"}>*/}
                    {/*<div className="row">*/}
                        {/*<div className="col-3">*/}
                            {/*<h2 className="text-white text-wrap">Placeholder</h2>*/}
                        {/*</div>*/}
                        {/*<NewsCarousel*/}
                            {/*articles={this.state.articles}*/}
                        {/*/>*/}
                        {/*<div className="col-3">*/}
                            {/*<h2 className="text-white">sample</h2>*/}
                        {/*</div>*/}

                    {/*</div>*/}
                {/*</div>*/}
                <FavoriteTeam/>
            </div>
        )
    }

}