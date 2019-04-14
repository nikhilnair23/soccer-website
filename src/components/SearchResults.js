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
            self.setState({
                articles: response.articles
            })
        })
    }

    componentDidMount () {
        self.search();
    }

    navigate = (title, description, content, url, urlToImage, date, author ) =>
        this.props.history.push({
            pathname:'/searchItem',
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

    render() {
        console.log(this.props)
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
                                            <a  className="socc-link"
                                                onClick={() => this.navigate(article.title,article.description,article.content,
                                                    article.url, article.urlToImage, article.publishedAt, article.author
                                                )}>
                                                <p className="font-weight-bold text-left text-dark">{article.title}</p>
                                            </a>
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