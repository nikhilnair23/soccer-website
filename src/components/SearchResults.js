import React, {Component} from 'react'
import Navigation from "./Navigation/Navigation";
import SearchService from "../services/SearchService";
import NewsCarousel from "./NewsCarousel";

let self
export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        self= this;
        this.state = {
            articles: [],
            navigate: false
        };
        this.searchService = new SearchService();
    }

    search = () => {
        this.searchService.search_news(this.props.match.params.searchTerm).then((response) => {
            debugger;
            self.setState({
                articles: response.articles
            })
        })
    }

    componentDidMount () {
        self.search();
    }

    render() {
        return (
            <div className="socc-height-inherit socc-background">
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation/>
                </div>
                <div className="row socc-height-inherit">
                    <div className="col-3">
                        <h2 className="text-white text-wrap">Placeholder</h2>
                    </div>
                    <div className="col-6">
                        <ul className="list-group p-2">
                            {
                                this.state.articles.slice(0,10).map((article) =>
                                    <li className="list-group-item mb-3">
                                        <div className="img-text-container">
                                            <img className="img-thumbnail mr-3"
                                                 height="200px"
                                                 width="200px"
                                                 src={article.urlToImage}/>
                                            <a><h4>{article.title}</h4></a>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="col-3">
                        <h2 className="text-white">sample</h2>
                    </div>
                </div>
                {/*<h1 className="text-white">{this.props.location.state.articles.length}</h1>*/}
            </div>
        );
    }

}