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
    }


    render() {
        return(
            <Routes/>
        )
    }
}

export default withRouter(Soccer);