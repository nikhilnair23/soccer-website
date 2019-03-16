import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import MainPage from "../containers/MainPage";
export default class Soccer extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div>
            <Router>
                <div>
                    <Route path={"/"} exact render={() => <MainPage/>}/>
                </div>
            </Router>
            </div>
        )
    }

}