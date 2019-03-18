import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import MainPage from "../containers/MainPage";
import "../css/Soccer.css"
export default class Soccer extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className={"socc-background"}>
            <Router>
                <div className={"socc-background"}>
                    <Route path={"/"} exact render={() => <MainPage/>}/>
                </div>
            </Router>
            </div>
        )
    }

}