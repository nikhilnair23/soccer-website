import React from 'react';
import {Component} from 'react';

class Odds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fixtureById: this.props.fixtureById,
            home_team: this.props.fixtureById[0]['homeTeam'],
            away_team: this.props.fixtureById[0]['awayTeam'],
            odds: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/odds/' + this.state.fixtureById[0]['fixture_id'])
            .then(response => response.json())
            .then(
                console.log
                // res => this.setState(
                //     {
                //         odds: res
                //     }
                // )
            )
    }

    render() {
        return (
            this.state.odds.length === 0
            ?
            <div>
                No odds
            </div>
            :
            <div className='bg-white-50 container-fluid'>
                <div>
                    <h3 className='underline font-weight-bold'>
                        ODDS FOR {this.state.home_team} VS {this.state.away_team}
                    </h3>
                    <p>
                        The odds of {this.state.home_team} winning
                        is {this.state.odds['Win the match']['1']['odd']},
                        while the odds for the away team - {this.state.away_team} - to win is
                        {this.state.odds['Win the match']['1']['odd']}.
                        The odds of a draw is {this.state.odds['Win the match']['N']['odd']}
                    </p>
                    <p>
                        By half time, the scenario of {this.state.home_team} leading possesses the
                        odds of
                        {this.state.odds['Half time']['1']['odd']}. Them trailing
                        to {this.state.away_team}
                        has odds of {this.state.odds['Half time']['1']['odd']}, while the
                        possibility of
                        both team at deadlocks with each other
                        has {this.state.odds['Half time']['N']['odd']}
                        odds of happening.
                    </p>
                    <p>
                        The odds of both teams scoring
                        is {this.state.odds['Both teams score']['Yes']['odd']},
                        while the odds of one or neither team scoring
                        is {this.state.odds['Both teams score']['No']['odd']}.
                    </p>
                    <p>
                        The odds in regulatory time of there being:
                        <ul>
                            <li>
                                over 1.5 goals is
                                {this.state.odds['Over / Under 1.5 goal (Regulatory time)']['Over']['odd']}.
                            </li>
                            <li>
                                over 2.5 goals is
                                {this.state.odds['Over / Under 2.5 goal (Regulatory time)']['Over']['odd']}.
                            </li>
                            <li>
                                over 3.5 goals is
                                {this.state.odds['Over / Under 3.5 goal (Regulatory time)']['Over']['odd']}.
                            </li>
                            <li>
                                over 4.5 goals is
                                {this.state.odds['Over / Under 4.5 goal (Regulatory time)']['Over']['odd']}.
                            </li>
                        </ul>
                    </p>

                    <p>
                        The first goal-scorer of the game is likely to be
                        {this.state.odds['1st Goal scorer (90 Mins)'][0]}.
                    </p>
                    <h3>
                        Here is a table of odds for some exact potential scorelines for this game.
                    </h3>
                    <table className="table bg-moon-gray css-serial tc">
                        <caption>Exact score</caption>
                        <thead>
                        <tr>
                            <th scope="col">Score</th>
                            <th scope="col">Odds</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className='tc'>
                            <td>0 - 0</td>
                            <td>{this.state.odds['Exact score']['0 - 0']['odd']}</td>
                        </tr>
                        <tr className='tc'>
                            <td>1 - 1</td>
                            <td>{this.state.odds['Exact score']['1 - 1']['odd']}</td>
                        </tr>
                        <tr className='tc'>
                            <td>2 - 2</td>
                            <td>{this.state.odds['Exact score']['2 - 2']['odd']}</td>
                        </tr>
                        <tr className='tc'>
                            <td>3 - 3</td>
                            <td>{this.state.odds['Exact score']['3 - 3']['odd']}</td>
                        </tr>
                        <tr className='tc'>
                            <td>1 - 0</td>
                            <td>{this.state.odds['Exact score']['1 - 0']['odd']}</td>
                        </tr>
                        <tr className='tc'>
                            <td>2 - 0</td>
                            <td>{this.state.odds['Exact score']['2 - 0']['odd']}</td>
                        </tr>
                        <tr className='tc'>
                            <td>3 - 0</td>
                            <td>{this.state.odds['Exact score']['3 - 0']['odd']}</td>
                        </tr>
                        <tr className='tc'>
                            <td>3 - 1</td>
                            <td>{this.state.odds['Exact score']['3 - 1']['odd']}</td>
                        </tr>
                        <tr className='tc'>
                            <td>3 - 2</td>
                            <td>{this.state.odds['Exact score']['3 - 2']['odd']}</td>
                        </tr>
                        <tr className='tc'>
                            <td>2 - 3</td>
                            <td>{this.state.odds['Exact score']['2 - 3']['odd']}</td>
                        </tr>
                        <tr className='tc'>
                            <td>1 - 3</td>
                            <td>{this.state.odds['Exact score']['1 - 3']['odd']}</td>
                        </tr>
                        <tr className='tc'>
                            <td>0 - 3</td>
                            <td>{this.state.odds['Exact score']['0 - 3']['odd']}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <button onClick={() => this.props.reset()}>
                    Go Back
                </button>
            </div>
        )
    }

}

export default Odds;