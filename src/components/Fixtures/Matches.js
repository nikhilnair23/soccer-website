import React from "react";

const Matches = ({fixtures}) =>

    fixtures.map(
        match =>
            <div>
                <details className="bg-light-gray hover-bg-lightest-blue">
                    <summary>
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
                            <div className="col-md-1 bg-light-green tc">
                                {match.elapsed}'
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

export default Matches;
