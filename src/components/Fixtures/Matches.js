import React from "react";
import './Fixtures.css'

const Matches = ({fixtures, matchDetails}) =>
    <div className='tc'
         style={{
             overflow: 'scroll',
             border: '3px solid black',
             width: '1400px',
             height: '700px',
             margin: '10px'
         }}>
        {
            fixtures.map(
                match =>
                    <div onClick={() => matchDetails(match.homeTeam_id, match.awayTeam_id,
                                                     match.fixture_id)}>
                        {/*<details className="bg-light-gray hover-bg-lightest-blue">*/}
                        {/*<summary>*/}
                        {/*<div className="row">*/}

                        {/*<div className="col-md-4 tc">*/}
                        {/*{match.homeTeam}*/}
                        {/*</div>*/}
                        {/*<div className="col-md-1 tc">*/}
                        {/*{match.goalsHomeTeam}*/}
                        {/*</div>*/}
                        {/*<div className="col-md-1 tc">*/}
                        {/*-*/}
                        {/*</div>*/}
                        {/*<div className="col-md-1 tc">*/}
                        {/*{match.goalsAwayTeam}*/}
                        {/*</div>*/}
                        {/*<div className="col-md-4 tc">*/}
                        {/*{match.awayTeam}*/}
                        {/*</div>*/}
                        {/*<div className="col-md-1 bg-light-green tc">*/}
                        {/*{match.elapsed}'*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*</summary>*/}
                        {/*<div className="row">*/}
                            {/*<div className="col-md-4 tc">*/}
                                {/*{match.round}*/}
                            {/*</div>*/}
                            {/*<div className="col-md-3 tc">*/}
                                {/*{match.status}*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <div className="card">
                            <ul className="list-group list-group-flush bg-washed-yellow">
                                <li className="list-group-item hover-bg-light-blue bg-light-green shadow-hover ma2">
                                    <div className="row">

                                        <div className="col-md-4 tc">
                                            {match.homeTeam}
                                        </div>
                                        <div className="col-md-1 tc">
                                            {match.goalsHomeTeam}
                                        </div>
                                        <div className="col-md-1 tc">
                                            -
                                        </div>
                                        <div className="col-md-1 tc">
                                            {match.goalsAwayTeam}
                                        </div>
                                        <div className="col-md-4 tc">
                                            {match.awayTeam}
                                        </div>
                                        <div className="col-md-1 bg-light-green tc live_time blue">
                                            {match.elapsed}'
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
