import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import NewsCard from "../components/NewsCard";
import NewsService from "../services/NewsService"

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {articles : []};
        this.newsService = new NewsService();
    }

    componentDidMount(){
        /*this.newsService.get_news().then(response => {
            this.setState(
                { articles : response.articles}
            )
        })*/
        this.setState(
            { articles : this.newsService.get_news()}
        )
    }

    render(){
        return(
            <div className={"container-fluid"}>
            <nav className="navbar navbar-expand bg-dark">
            <div className = "container-fluid">
                <div className="navbar-header bg-dark">
                    <h2 className="float-left pt-2 mr-2 mt-2 font-italic font-weight-bold text-danger">FOOTBALL</h2>
                    <ul className="nav nav-pills bg-dark p-2 float-right">
                        <li className="nav-item m-2" id="">
                            <button className={"btn text-white"}>Fixtures</button>
                        </li>
                        <li className="nav-item m-2" id="">
                            <button className={"btn text-white"}>Teams</button>
                        </li>
                        <li className="nav-item m-2" id="">
                            <button className={"btn text-white"}>Leagues</button>
                        </li>
                        <li className="nav-item m-2" id="">
                            <button className={"btn text-white"}>Scores</button>
                        </li>
                    </ul>
                </div>

            </div>
            </nav>

                <div className="card-deck w-75 news-card p-3 grid-container">
                    {
                        this.state.articles.map(article =>
                            <NewsCard
                                article={article}
                            />
                        )
                    }
                </div>
            </div>

        )
        }

}