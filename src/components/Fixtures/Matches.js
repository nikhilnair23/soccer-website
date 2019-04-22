import React from "react";
import './Fixtures.css'

const Matches = ({fixtures, matchDetails}) =>
    <div className="tc"
         style={{
             overflow: 'scroll',
             border: '3px silver',
             height: '800px',
             margin: '10px'
         }}>
        {
            fixtures.length === 0
            ?
            <div>
                <div className="card">
                    <ul className="list-group list-group-flush bg-washed-yellow">
                        <li className="list-group-item hover-bg-light-blue bg-light-green shadow-hover ma2">
                            <div className="row">
                                <div className="col tc">
                                    <h3>
                                        Sorry, no live matches to display currently.
                                    </h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            :
            fixtures.map(
                match =>
                    <div onClick={() => matchDetails(match.homeTeam_id, match.awayTeam_id,
                                                     match.fixture_id)}>

                        <div className="card">
                            <ul className="list-group list-group-flush bg-washed-yellow">
                                <li className="list-group-item hover-bg-light-blue bg-light-green shadow-hover ma2">
                                    <div className="row">

                                        <div className="col-md-4 tc">
                                            <h3>
                                                {match.homeTeam}
                                            </h3>
                                        </div>
                                        <div className="col-md-1 tc">
                                            <h3>
                                                {match.goalsHomeTeam}
                                            </h3>
                                        </div>
                                        <div className="col-md-1 tc">
                                            -
                                        </div>
                                        <div className="col-md-1 tc">
                                            <h3>
                                                {match.goalsAwayTeam}
                                            </h3>
                                        </div>
                                        <div className="col-md-4 tc">
                                            <h3>
                                                {match.awayTeam}
                                            </h3>
                                        </div>
                                        <div className="col-md-1 bg-light-green tc live_time blue">
                                            <h3>
                                                {match.elapsed}'
                                            </h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>


                    </div>
            )
        }
    </div>
export default Matches;
