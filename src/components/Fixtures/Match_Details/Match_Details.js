import React from 'react';
import {Component} from 'react';
import pic from './vs.png'
import odds from './odds.png';
import './Match_Details.css';
import {withRouter} from 'react-router';

class Match_Details extends Component {
    constructor(props) {
        debugger;
        super(props);
        this.state= {
            h2h: this.props.h2h,
            fixtureById: this.props.fixtureById,
            home_crest: 'https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg',
            away_crest: 'https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg'
        };

        fetch('http://localhost:5000/teams/team/' + this.state.fixtureById[0]['homeTeam_id'])
            .then(response => response.json())
            .then(x => this.setState(
                {
                    home_crest: x['api']['teams'][this.state.fixtureById[0]['homeTeam_id']]['logo']
                }
            ));

        fetch('http://localhost:5000/teams/team/' + this.state.fixtureById[0]['awayTeam_id'])
            .then(response => response.json())
            .then(x => this.setState(
                {
                    away_crest: x['api']['teams'][this.state.fixtureById[0]['awayTeam_id']]['logo']
                }
            ));

    }

    goToTeamPage = (teamId,name,logo) => {
        debugger;
        let team = {
            team: {
                team_id: teamId,
                name: name,
                logo: logo
            },
            league_id:this.props.fixtureById[0].league_id
        }
        this.props.history.push({
            pathname: '/teams/' + teamId,
            state: team
        });
    }


    render() {

        return (
            <div className="container-fluid">
                <div
                    className='tc bg-washed-green dib ma2 br3 pa1 shadow-5 vh-75 w-50 card'>
                    <div className='row ma3'>
                        <div className='col-md-4 tc'>
                            <img
                                className=''
                                src = {this.state.home_crest}
                                onClick={() =>
                                    this.goToTeamPage
                                    (this.state.fixtureById[0].homeTeam_id,
                                        this.state.fixtureById[0].homeTeam,
                                        this.state.home_crest)}
                                alt = 'https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg'
                                height={120}
                                width={120}/>
                        </div>
                        <div className='col-md-4 tc'>
                            <img className=''
                                src={pic}
                                 height={120}
                                 width={120}/>
                        </div>
                        <div className='col-md-4 tc'>
                            <img
                                className=''
                                src = {this.state.away_crest}
                                onClick={() => this.goToTeamPage(this.state.fixtureById[0].awayTeam_id,
                                    this.state.fixtureById[0].awayTeam,
                                    this.state.away_crest)}
                                alt = 'https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg'
                                height={120}
                                width={120}/>
                        </div>
                    </div>

                    <div className='row ma3'>
                        <div className='col-md-4 tc'>
                            <h4 onClick={() => this.goToTeamPage(this.state.fixtureById[0].homeTeam_id,
                                this.state.fixtureById[0].homeTeam,
                                this.state.home_crest)}>
                                {this.state.fixtureById[0].homeTeam}
                                </h4>
                        </div>
                        <div className='col-md-4 tc'>

                        </div>
                        <div className='col-md-4 tc'>
                            <h4 onClick={() => this.goToTeamPage(this.state.fixtureById[0].awayTeam_id,
                                this.state.fixtureById[0].awayTeam,
                                this.state.away_crest)}>
                                {this.state.fixtureById[0].awayTeam}</h4>
                        </div>
                    </div>

                    <div className='row ma3'>
                        <div className='col tc'>
                            <h3>{this.state.fixtureById[0].round}</h3>
                        </div>
                    </div>

                    <div className='row ma3'>
                        <div className='col tc'>
                            <h4>
                                {this.state.fixtureById[0].event_date.split("T")[0] + " "}
                                at
                                {" " + this.state.fixtureById[0].event_date.split("T")[1].split("+")[0]}
                            </h4>
                        </div>
                    </div>


                    {/*<div className='row'>*/}
                        {/*<div className='col tc'>*/}
                            {/*<img className='ma2'*/}
                                 {/*src={odds}*/}
                                 {/*height={85}*/}
                                 {/*width={85}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    <div className='row ma4'>
                        <div className='col-md-3 tc'>
                            <button type="button"
                                    onClick={() => this.props.reset()}
                                    className="btn btn-secondary">
                                Team news
                            </button>
                        </div>
                        <div className='col-md-3 tc'>
                            <button type="button" className='col-md-3 tc'
                                    onClick={() => this.props.reset()}
                                    className="btn btn-secondary">
                                Squads
                            </button>
                        </div>
                        <div className='col-md-3 tc'>
                            <button type="button"
                                    onClick={() => this.props.reset()}
                                    className="btn btn-secondary">
                                Table
                            </button>
                        </div>
                        <div className='col-md-3 tc'>
                            <button type="button"
                                    onClick={() => this.props.setOdds()}
                                    className="btn btn-secondary">
                                Odds
                            </button>
                        </div>
                    </div>


                    <div>
                        <h3>
                            Previous meetings
                        </h3>
                        <h5>
                            {
                                this.state.h2h
                                    .filter(
                                        match =>
                                            match.statusShort === "FT"
                                    )
                                    .map(
                                    match =>
                                        <div className="row ma3">

                                            <div className="col-md-4 tc">
                                                {match.homeTeam}
                                            </div>
                                            <div className="col-md-1 tc">
                                                {match.goalsHomeTeam}
                                            </div>
                                            <div className="col-md-2 tc">
                                                -
                                            </div>
                                            <div className="col-md-1 tc">
                                                {match.goalsAwayTeam}
                                            </div>
                                            <div className="col-md-4 tc">
                                                {match.awayTeam}
                                            </div>
                                        </div>
                                )
                            }
                        </h5>
                    </div>
                </div>
                <button onClick={() => this.props.reset()}>
                    Go Back
                </button>
            </div>
        )
    }
}

export default withRouter(Match_Details);