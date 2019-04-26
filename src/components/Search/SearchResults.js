import React, {Component} from 'react'
import Navigation from "../Navigation/Navigation";
import SearchService from "../../services/SearchService";
import NewsCarousel from "../News/NewsCarousel";
import UserService from "../../services/UserService";

let self
export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        self= this;
        this.state = {
            articles: [],
            navigate: false,
            user:'',
            loggedIn: false
        };
        this.searchService = new SearchService();
        this.userService = new UserService();
        this.userService.is_logged_in().then(response => {
            console.log(response.data);
            if (response.data !== "NOT_LOGGED_IN") {
                this.setState({
                    loggedIn:true,
                    user:response.data
                })
            }
        })
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
        console.log(this.state)
        return (
            <div className="socc-height-inherit socc-background">
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation loggedIn ={this.state.loggedIn}
                                user={this.state.user}/>
                </div>
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-6">
                        {this.state.articles.length === 0
                            ?
                            <h2 className="mt-3 text-white text-center font-weight-bolder bg-black-90">Sorry no results were found. Please try a different search query</h2>
                            :
                            <ul className="list-group p-2">
                                {
                                    this.state.articles.slice(0, 10).map((article) =>
                                        <li className="list-group-item mb-3">
                                            <div className="img-text-container">
                                                <img className="img-thumbnail mr-3"
                                                     height="200px"
                                                     width="200px"
                                                     src={article.urlToImage}/>
                                                <a className="socc-link"
                                                   onClick={() => this.navigate(article.title, article.description, article.content,
                                                       article.url, article.urlToImage, article.publishedAt, article.author
                                                   )}>
                                                    <p className="font-weight-bold text-left text-dark">{article.title}</p>
                                                </a>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        }
                    </div>
                    <div className="col-3">
                    </div>
                </div>
                </div>

        );
    }

}