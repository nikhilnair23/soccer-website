import React from 'react';
import {Component} from 'react';
import pic from './vs.png'
import bg_card from './bg_card.jpg';
import odds from './odds.png';
import './Match_Details.css';
import TeamService from "../../../services/TeamService";
import {withRouter} from 'react-router';

class Match_Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            h2h: this.props.h2h,
            fixtureById: this.props.fixtureById,
            home_crest: 'https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg',
            away_crest: 'https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg'
        };

        this.teamService = new TeamService();
        this.getTeamCrests();

    }

    getTeamCrests() {
        // fetch('http://localhost:5000/teams/team/' + this.state.fixtureById[0]['homeTeam_id'])
        //     .then(response => response.json())
        this.teamService.getTeamCrests(this.state.fixtureById[0]['homeTeam_id'])
            .then(x => this.setState(
                {
                    home_crest: x['api']['teams'][this.state.fixtureById[0]['homeTeam_id']]['logo']
                }
            ));

        // fetch('http://localhost:5000/teams/team/' + this.state.fixtureById[0]['awayTeam_id'])
        //     .then(response => response.json())
        this.teamService.getTeamCrests(this.state.fixtureById[0]['awayTeam_id'])
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
                    className='tc match_card dib ma2 br3 pa1 shadow-5 vh-75 w-50 card'
                    style={{backgroundImage: `url(${bg_card})`}}>
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

                    <div className='row ma1'>
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

                    <div className='row ma1'>
                        <div className='col tc'>
                            <h3 className='round_name'>{this.state.fixtureById[0].round}</h3>
                        </div>
                    </div>

                    <div className='row ma2'>
                        <div className='col tc'>
                            <h4 className='date_name'>
                                {this.state.fixtureById[0].event_date.split("T")[0] + " "}
                                at
                                {" " + this.state.fixtureById[0].event_date.split("T")[1].split(
                                    "+")[0]}
                            </h4>
                        </div>
                    </div>



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
                                    className="btn btn-warning">
                                Squads
                            </button>
                        </div>
                        <div className='col-md-3 tc'>
                            <button type="button"
                                    onClick={() => this.props.reset()}
                                    className="btn btn-warning">
                                Table
                            </button>
                        </div>
                        <div className='col-md-3 tc'>
                            <button type="button"
                                    onClick={() => this.props.setOdds()}
                                    className="btn btn-warning">
                                Odds
                            </button>
                        </div>
                    </div>


                    <div>
                        <h3 className='previous_name'>
                            PREVIOUS MEETINGS
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
                                                    <h4 className='previous_game'>
                                                        {match.homeTeam}
                                                    </h4>
                                                </div>
                                                <div className="col-md-1 tc">
                                                    <h4 className='previous_game'>
                                                        {match.goalsHomeTeam}
                                                    </h4>
                                                </div>
                                                <div className="col-md-2 tc">
                                                    <h4 className='previous_game'>
                                                        -
                                                    </h4>

                                                </div>
                                                <div className="col-md-1 tc">
                                                    <h4 className='previous_game'>

                                                        {match.goalsAwayTeam}
                                                    </h4>
                                                </div>
                                                <div className="col-md-4 tc">
                                                    <h4 className='previous_game'>
                                                        {match.awayTeam}
                                                    </h4>
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