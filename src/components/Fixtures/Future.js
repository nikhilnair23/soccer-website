import React from "react";

const Future = ({fixtures, matchDetails}) =>
    <div className='tc'
         style={{
             overflow: 'scroll',
             border: '3px silver',
             height: '800px',
             margin: '10px'
         }}>
        {
            fixtures.filter(
                match => match.statusShort !== "FT"
            ).map(
                match =>
                    <div onClick={() => matchDetails(match.homeTeam_id, match.awayTeam_id,
                                                     match.fixture_id)}>

                        <div className="card outer_card border-0">
                            <ul className="list-group list-group-flush bg-black border-dark">
                                <li className="list-group-item hover-bg-black-80 fixture_card shadow-hover ma2">
                                    <div className="row">
                                        <div className="col-md-4 tc">
                                            <h3>
                                                {match.homeTeam}
                                            </h3>
                                        </div>
                                        <div className="col-md-4 tc">
                                            <h3>
                                                {match.event_date.split("T")[0]}
                                            </h3>
                                        </div>
                                        <div className="col-md-4 tc">
                                            <h3>
                                                {match.awayTeam}
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

export default Future;
