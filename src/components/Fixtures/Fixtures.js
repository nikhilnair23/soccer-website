import React from 'react';
import {Component} from 'react';
import './Fixtures.css';
import Matches from "./Matches";
import Future from "./Future";
import Match_Details from "./Match_Details/Match_Details";
import Odds from "../Odds/Odds";
import FixtureService from "../../services/FixtureService";

class Fixtures extends Component {

    constructor(props) {
        super(props);

        this.state = {
            live: [],
            epl: [],
            laliga: [],
            bundesliga: [],
            seriea: [],
            league: 'live',
            h2h: [],
            fixtureById: [],
            details: false,
            odds: false,
            user: this.props.location.state.user
        };
        this.fixtureService = new FixtureService();
        this.getFixtures();
    }

    getFixtures() {
        this.fixtureService.getFixturesByLeague('live')
            .then(x => this.setState(
                {
                    live: Object.values(x['api']['fixtures'])
                }
            ));

        this.fixtureService.getFixturesByLeague('epl')
            .then(x => this.setState(
                {
                    epl: Object.values(x['api']['fixtures'])
                }
            ));

        this.fixtureService.getFixturesByLeague('laliga')
            .then(x => this.setState(
                {
                    laliga: Object.values(x['api']['fixtures'])
                }
            ));

        this.fixtureService.getFixturesByLeague('bundesliga')
            .then(x => this.setState(
                {
                    bundesliga: Object.values(x['api']['fixtures'])
                }
            ));

        this.fixtureService.getFixturesByLeague('seriea')
            .then(x => this.setState(
                {
                    seriea: Object.values(x['api']['fixtures'])
                }
            ));
    }

    changeLeague = (league) => {
        this.setState(
            {
                league: league,
                h2h: [],
                fixtureById: [],
                details: false,
                odds: false
            }
        )
    };

    matchDetails = (homeTeam, awayTeam, fixture_id) => {

        this.fixtureService.getH2H(homeTeam, awayTeam)
            .then(x => this.setState(
                {
                    h2h: Object.values(x['api']['fixtures'])
                }
            ));

        this.fixtureService.getFixtureById(fixture_id)
            .then(x => this.setState(
                {
                    fixtureById: Object.values(x['api']['fixtures'])
                }
            ));

        this.setState(
            {
                details: true
            }
        )

    };

    reset = () => {
        this.setState(
            {
                h2h: [],
                fixtureById: [],
                details: false
            }
        )
    };

    setOdds = () => {

        //console.log(this.state);
        if (this.state.user.length === 0) {
            alert("Please log in as pro to view this.");
            this.setState(
                {
                    odds: false
                }
            )
        }
        else {
            if(this.state.user['isPro'] === 1) {
                this.setState(
                    {
                        odds: true
                    }
                )
            }
            else {
                alert("Please log in as pro to view this.");
                this.setState(
                    {
                        odds: false
                    }
                )
            }
        }
    };

    resetOdds = () => {
        this.setState(
            {
                odds: false
            }
        )
    };

    render() {
        return (
            <div className="container-fluid tc">
                {/*<div className={"container-fluid"} id="navbar-container">*/}
                    {/*<Navigation/>*/}
                {/*</div>*/}
                <div className="col tc bg-black-60">
                    <button type='button'
                            className={"home_button league_button btn-warning ma3 active rounded"}
                            onClick={() => this.props.onRouteChange('home')}>
                        Home page
                    </button>
                    <button type='button'
                            className={this.state.league === 'live'
                                       ? "league_button btn-success ma3 active rounded"
                                       : "league_button btn-secondary ma3 rounded black"}
                            onClick={() => this.changeLeague('live')}>
                        LIVE scores
                    </button>
                    <button type='button'
                            className={this.state.league === 'epl'
                                       ? "league_button btn-success ma3 active rounded"
                                       : "league_button btn-secondary ma3 rounded black"}
                            onClick={() => this.changeLeague('epl')}>
                        English Premier League
                    </button>
                    <button type='button'
                            className={this.state.league === 'laliga'
                                       ? "league_button btn-success ma3 active rounded"
                                       : "league_button btn-secondary ma3 rounded black"}
                            onClick={() => this.changeLeague('laliga')}>
                        La Liga
                    </button>
                    <button type='button'
                            className={this.state.league === 'bundesliga'
                                       ? "league_button btn-success ma3 active rounded"
                                       : "league_button btn-secondary ma3 rounded black"}
                            onClick={() => this.changeLeague('bundesliga')}>
                        Bundesliga
                    </button>
                    <button type='button'
                            className={this.state.league === 'seriea'
                                       ? "league_button btn-success ma3 active rounded"
                                       : "league_button btn-secondary ma3 rounded black"}
                            onClick={() => this.changeLeague('seriea')}>
                        Serie A
                    </button>
                </div>
                <div className="tc ma5">
                    {

                        this.state.odds === true && this.state.details === true
                        && this.state.h2h.length > 0
                        && this.state.fixtureById.length > 0
                        ?
                        <Odds fixtureById={this.state.fixtureById}
                              resetOdds={this.resetOdds}/>
                        :
                        this.state.details === true && this.state.h2h.length > 0
                        && this.state.fixtureById.length > 0
                        ?
                        <Match_Details h2h={this.state.h2h}
                                       fixtureById={this.state.fixtureById}
                                       setOdds={this.setOdds}
                                       reset={this.reset}/>
                        :
                        this.state.league === 'live'
                        ?
                        <Matches fixtures={this.state.live}
                                 matchDetails={this.matchDetails}/>
                        :
                        this.state.league === 'epl'
                        ?
                        <Future fixtures={this.state.epl}
                                matchDetails={this.matchDetails}/>
                        :
                        this.state.league === 'laliga'
                        ?
                        <Future fixtures={this.state.laliga}
                                matchDetails={this.matchDetails}/>
                        :
                        this.state.league === 'bundesliga'
                        ?
                        <Future fixtures={this.state.bundesliga}
                                matchDetails={this.matchDetails}/>
                        :
                        this.state.league === 'seriea'
                        ?
                        <Future fixtures={this.state.seriea}
                                matchDetails={this.matchDetails}/>
                        :
                        <div>

                        </div>
                    }

                </div>
            </div>

        )
    }
}

export default Fixtures;