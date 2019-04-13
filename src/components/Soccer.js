import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import MainPage from "../containers/MainPage";
import "../css/Soccer.css"
import Navigation from "./Navigation/Navigation";
import SearchResults from "./SearchResults";
import {withRouter, Redirect} from 'react-router-dom';
import SearchService from "../services/SearchService";
import {Switch} from "react-router";
import Routes from './Routes'

let self

class Soccer extends Component {
    constructor(props) {
        super(props);
        const history = this.props;
    }


    render() {
        /*return (
            <div className={"socc-background"}>
                <Router>
                    {/!*<div className={"container-fluid"} id="navbar-container">
                        <Navigation
                            onRouteChange={this.onRouteChange}/>
                    </div>*!/}
                    <div className={"container-fluid socc-height-inherit"} id="navbar-container">
                        <Route path={"/"} exact render={() => <MainPage/>}/>
                        <Route path={"/search/:id"} exact render={() => <SearchResults/>}/>
                    </div>
                </Router>
            </div>
        )*/
        return(
            <Routes/>
        )
    }
}

export default withRouter(Soccer);