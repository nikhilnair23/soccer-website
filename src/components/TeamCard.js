import React, {Component} from 'react'
import Navigation from "./Navigation/Navigation";
import './Teams.css'
import NewsService from "../services/NewsService"
import news from '../services/news'


export default class TeamCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: props.location.state.team,
            news: news
        }
        this.newsService= new NewsService();

    }

    /*componentDidMount() {
        this.newsService.get_news_for_team(this.state.team.name).then(
            (news => {
                debugger;
                    this.setState({
                        news: news.articles
                    })
                }
            ))
    }*/

    render() {
        console.log(this.state.news);
        return (
            <div className="socc-height-inherit socc-background">
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation/>
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
                    <div className="col-2 p-2">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="text-center">League Table</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
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
                    <div className="col-2 pr-4 pt-2 pl-0">
                        <div className="card">
                            <div className="card-body">
                                <table className="table table-dark">
                                    <thead className='thead-dark'>
                                    <tr className="text-center">League table</tr>
                                    </thead>
                                    <tbody className="text-center">
                                    <tr>abc</tr>
                                    <tr>abc</tr>
                                    <tr>abc</tr>
                                    <tr>abc</tr>
                                    <tr>abc</tr>
                                    <tr>abc</tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}