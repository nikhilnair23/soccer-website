import React from "react";
import './Navigation.css'
import SearchService from "../../services/SearchService";
import {Redirect} from "react-router-dom";
import {withRouter} from 'react-router';

let self
class Navigation extends React.Component {
    constructor(props) {
        super(props);
        self= this;
        this.state = {
            searchText: "",
            navigate: false,
            articles: []
        };
        this.searchService = new SearchService();
    }

    titleChanged = (event) => {
        this.setState(
            {
                searchText: event.target.value
            }
        )
    };

    search = () => {
        this.searchService.search_news(this.state.searchText).then((response) => {
            debugger;
            self.setState({
                navigate: true,
                articles: response.articles
            })
        })

        /*this.setState({
            navigate : true,
            articles : this.searchService.search_news(this.state.searchText)
        })*/
    }

    render() {
        if (this.state.navigate === true) {
            debugger;
            return (
                <Redirect to={{
                    pathname: '/search',
                    state: {articles: this.state.articles}
                }}/>)


        }
        return (
            <nav className="navbar navbar-expand bg-black-90">
                <div className="container-fluid">
                    <div className="navbar-header bg-black">
                        <h3 className="float-left pt-2 mr-1 mt-2 font-italic font-weight-bolder text-danger">FOOTBALL</h3>
                        <ul className="nav nav-pills bg-black p-2">
                            <li className="nav-item" id="">
                                <button className={"btn text-white"}>Teams</button>
                            </li>
                            <li className="nav-item" id="">
                                <button className={"btn text-white"}>Fixtures</button>
                            </li>
                            <li className="nav-item" id="">
                                <button className={"btn text-white"}>Leagues</button>
                            </li>
                            <li className="nav-item" id="">
                                <button className={"btn text-white"}>Scores</button>
                            </li>
                            <li className="nav-item mr-2" id="">
                                <button className={"btn text-white"}>Highlights</button>
                            </li>
                            <li className="nav-item ml-2" id="wrap">
                                <div className="search">
                                    <input onChange={this.titleChanged}
                                           type="text" id="searchTerm" className="form-control-sm mr-2"
                                           placeholder="What are you looking for?"/>
                                    <button
                                        onClick={()=> this.search()}
                                        className="searchButton">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </li>
                            {
                                this.props.routeStatus === 'logged_in'
                                ?
                                <li className="nav-item" id="signout_button">
                                    <button className="btn text-white"
                                            onClick={() => this.props.onRouteChange('signout')}
                                    >Sign out
                                    </button>
                                </li>
                                :
                                <li className="nav-item" id="signout_button">
                                    <button className="btn text-white"
                                            onClick={() => this.props.onRouteChange('signin')}
                                    >Sign in
                                    </button>
                                </li>
                            }

                        </ul>
                    </div>

                </div>
            </nav>
        );
    }

}

export default withRouter(Navigation)