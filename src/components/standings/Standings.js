import React from 'react';
import {Component} from 'react';
import './Standings.css';
import UCL from "./UCL";
import Leagues from "./Leagues";
import Table from "./Table";
import Navigation from "../Navigation/Navigation";
import UserService from "../../services/UserService";

class Standings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ucl: [],
            epl: [],
            laliga: [],
            bundesliga: [],
            seriea: [],
            league: 'ucl',
            user:'',
            loggedIn: false
        };

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

        fetch('http://localhost:5000/standings/132')
            .then(response => response.json())
            .then(x => this.setState(
                {
                    ucl: x['api']['standings'][0]
                }
            ));

        fetch('http://localhost:5000/standings/2')
            .then(response => response.json())
            .then(x => this.setState(
                {
                    epl: x['api']['standings'][0]
                }
            ));

        fetch('http://localhost:5000/standings/87')
            .then(response => response.json())
            .then(x => this.setState(
                {
                    laliga: x['api']['standings'][0]
                }
            ));

        fetch('http://localhost:5000/standings/8')
            .then(response => response.json())
            .then(x => this.setState(
                {
                    bundesliga: x['api']['standings'][0]
                }
            ));

        fetch('http://localhost:5000/standings/94')
            .then(response => response.json())
            .then(x => this.setState(
                {
                    seriea: x['api']['standings'][0]
                }
            ));

    }

    changeLeague = (league) => {
        //document.getElementById(this.state.league).classList.remove('active');
        this.setState(
            {
                league: league
            }
        );
        //document.getElementById(this.state.league).classList.add('active');
    };

    render() {
        return (
            // this.state.league === 'ucl'
            // ?
            <div className='container-fluid'>
                <div className={"container-fluid"} id="navbar-container">
                    <Navigation loggedIn ={this.state.loggedIn}
                                user={this.state.user}/>
                </div>
                <div className="row">
                    <div className='col-md-3 bg-light-green left_col'>
                        <button
                            className="btn btn-warning pd5 ma2"
                            type="button"
                            onClick={() => this.props.onRouteChange('home')}>Home Page
                        </button>
                        <Leagues changeLeague={this.changeLeague}
                                 league={this.state.league}/>
                    </div>

                    <div className="col-md-9 right_col">
                        {/*{console.log(this.state.ucl)}*/}
                        {
                            this.state.league === 'ucl'
                            ?
                            <UCL standings={this.state.ucl}/>
                            :
                            this.state.league === 'epl'
                            ?
                            <Table standings={this.state.epl}/>
                            :
                            this.state.league === 'laliga'
                            ?
                            <Table standings={this.state.laliga}/>
                            :
                            this.state.league === 'bundesliga'
                            ?
                            <Table standings={this.state.bundesliga}/>
                            :
                            this.state.league === 'seriea'
                            ?
                            <Table standings={this.state.seriea}/>
                            :
                            <div>

                            </div>
                        }
                    </div>
                </div>

            </div>

        )
    }

}

export default Standings;