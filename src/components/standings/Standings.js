import React from 'react';
import {Component} from 'react';
import './Standings.css';
import UCL from "./UCL";
import Leagues from "./Leagues";
import Table from "./Table";
import Navigation from "../Navigation/Navigation";
import StandingsService from "../../services/StandingsService";
import Leagues_Pro from "./Leagues_Pro";
import UCL_list from "./UCL_list";

class Standings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ucl: [],
            epl: [],
            laliga: [],
            bundesliga: [],
            seriea: [],
            championship: [], //3
            league1: [], //164
            bundesliga2: [], //9
            serieb: [], //95
            laliga2: [], //88
            ligue1: [], //4
            eredivisie: [], //10
            mls: [], //199
            league: 'epl',
            user: this.props.location.state.user
        };

        this.standingsService = new StandingsService();
        this.fetchTeams();
    }

    fetchTeams() {

        this.standingsService.findStandingsByLeagueId('2')
            .then(x => this.setState(
                {
                    epl: x['api']['standings'][0]
                }
            ));

        this.standingsService.findStandingsByLeagueId('132')
            .then(x => this.setState(
                {
                    ucl: x['api']['standings'][0]
                }
            ));

        this.standingsService.findStandingsByLeagueId('87')
            .then(x => this.setState(
                {
                    laliga: x['api']['standings'][0]
                }
            ));

        this.standingsService.findStandingsByLeagueId('8')
            .then(x => this.setState(
                {
                    bundesliga: x['api']['standings'][0]
                }
            ));

        this.standingsService.findStandingsByLeagueId('94')
            .then(x => this.setState(
                {
                    seriea: x['api']['standings'][0]
                }
            ));

        this.standingsService.findStandingsByLeagueId('3')
            .then(x => this.setState(
                {
                    championship: x['api']['standings'][0]
                }
            ));

        this.standingsService.findStandingsByLeagueId('164')
            .then(x => this.setState(
                {
                    league1: x['api']['standings'][0]
                }
            ));

        this.standingsService.findStandingsByLeagueId('9')
            .then(x => this.setState(
                {
                    bundesliga2: x['api']['standings'][0]
                }
            ));

        this.standingsService.findStandingsByLeagueId('95')
            .then(x => this.setState(
                {
                    serieb: x['api']['standings'][0]
                }
            ));

        this.standingsService.findStandingsByLeagueId('88')
            .then(x => this.setState(
                {
                    laliga2: x['api']['standings'][0]
                }
            ));

        this.standingsService.findStandingsByLeagueId('4')
            .then(x => this.setState(
                {
                    ligue1: x['api']['standings'][0]
                }
            ));

        this.standingsService.findStandingsByLeagueId('10')
            .then(x => this.setState(
                {
                    eredivisie: x['api']['standings'][0]
                }
            ));

        this.standingsService.findStandingsByLeagueId('199')
            .then(x => this.setState(
                {
                    mls: x['api']['standings'][0]
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
        //console.log(this.state)
        return (
            // this.state.league === 'ucl'
            // ?
            <div className='container-fluid'>
                <div className="container-fluid" id="navbar-container">
                    <Navigation/>
                </div>
                <div className="row">
                    <div className='col-md-3 bg-black-80 left_col'>
                        <button
                            className="btn btn-warning pd5 ma2 home_but"
                            type="button"
                            onClick={() => this.props.onRouteChange('home')}>Home Page
                        </button>
                        {
                            this.state.user['isPro'] === 0
                            ?
                            <Leagues changeLeague={this.changeLeague}
                                     league={this.state.league}/>
                            :
                            <Leagues_Pro changeLeague={this.changeLeague}
                                     league={this.state.league}/>
                        }

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
                            this.state.league === 'championship'
                            ?
                            <Table standings={this.state.championship}/>
                            :
                            this.state.league === 'league1'
                            ?
                            <Table standings={this.state.league1}/>
                            :
                            this.state.league === 'bundesliga2'
                            ?
                            <Table standings={this.state.bundesliga2}/>
                            :
                            this.state.league === 'serieb'
                            ?
                            <Table standings={this.state.serieb}/>
                            :
                            this.state.league === 'laliga2'
                            ?
                            <Table standings={this.state.laliga2}/>
                            :
                            this.state.league === 'ligue1'
                            ?
                            <Table standings={this.state.ligue1}/>
                            :
                            this.state.league === 'eredivisie'
                            ?
                            <Table standings={this.state.eredivisie}/>
                            :
                            this.state.league === 'mls'
                            ?
                            <Table standings={this.state.mls}/>
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