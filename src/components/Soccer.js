import React, {Component} from 'react'
import "../css/Soccer.css"
import {withRouter, Redirect} from 'react-router-dom';
import Routes from './Routes'

/**
 * NOT BEING USED AS OF NOW
 */

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