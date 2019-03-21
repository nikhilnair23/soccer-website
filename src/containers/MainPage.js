import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import NewsCard from "../components/NewsCard";
import NewsService from "../services/NewsService"
import Card from "../components/Card";
import Navigation from "../components/Navigation/Navigation";
import SignIn from "../components/SignIn/SignIn";

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
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
            this.state.route === 'signin' || this.state.route === 'signout'
            ?
            <SignIn onRouteChange={this.onRouteChange}/>
            :
            <div className={"container-fluid"}>
                <Navigation onRouteChange={this.onRouteChange}/>
                <div align="center" className="card-deck w-75 news-card p-3 grid-container tc App">
                    {
                        this.state.articles.map(article =>
                                                    <Card
                                                        article={article}
                                                    />
                        )
                    }
                </div>
            </div>

        )
    }

}