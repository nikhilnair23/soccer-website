import React from "react";

const Future = ({fixtures, matchDetails}) =>

    fixtures.filter(
        match => match.statusShort !== "FT"
    ).map(
        match =>
            <div onClick={() => matchDetails(match.homeTeam_id, match.awayTeam_id, match.fixture_id)}>
                <details className="bg-light-gray hover-bg-lightest-blue">
                    <summary>
                        <div className="row">
                            <div className="col-md-4 tc">
                                {match.homeTeam}
                            </div>
                            <div className="col-md-4 tc">
                                {match.event_date}
                            </div>
                            <div className="col-md-4 tc">
                                {match.awayTeam}
                            </div>
                        </div>
                    </summary>
                    <div className="row">
                        <div className="col-md-4 tc">
                            {match.round}
                        </div>
                        <div className="col-md-3 tc">
                            {match.status}
                        </div>
                    </div>

                </details>

            </div>
    );

export default Future;
