import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <nav className="navbar navbar-expand bg-primary">
            <div className = "container-fluid">
                <div className="navbar-header bg-dark">
                    <h2 className="float-left pt-2 mr-2 mt-2 font-italic font-weight-bold text-danger">FOOTBALL</h2>
                    <ul className="nav nav-pills bg-dark p-2 float-right">
                        <li className="nav-item m-2" id="">
                            <button className={"btn text-white"}>Fixtures</button>
                        </li>
                        <li className="nav-item m-2" id="">
                            <button className={"btn text-white"}>Teams</button>
                        </li>
                        <li className="nav-item m-2" id="">
                            <button className={"btn text-white"}>Leagues</button>
                        </li>
                        <li className="nav-item m-2" id="">
                            <button className={"btn text-white"}>Scores</button>
                        </li>
                    </ul>
                </div>


            </div>
            </nav>
        )
        }

}