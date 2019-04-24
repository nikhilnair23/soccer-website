import React from "react";
import './Fixtures.css';
import TeamService from "../../services/TeamService";

let x = '';
let y = '';
let teamService = new TeamService();

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
                match => {
                    // let x = (fetch('http://localhost:5000/teams/team/'
                    //                       + match.homeTeam_id)
                    //     .then(response => response.json())
                    //     .then(x => x['api']['teams'][match.homeTeam_id]['logo']));
                    // teamService.getTeamCrests(match.homeTeam_id)
                    //     .then(res => x = 5
                    //         // res['api']['teams'][match.homeTeam_id]['logo']
                    //     );
                    console.log(x);

                    return (
                        <div onClick={() => matchDetails(match.homeTeam_id, match.awayTeam_id,
                                                         match.fixture_id)}>

                            <div className="card outer_card border-0">
                                <ul className="list-group list-group-flush bg-black border-dark">
                                    <li className="list-group-item hover-bg-dark-green fixture_card shadow-hover ma2">
                                        <div className="row">

                                            <div className="col-md-4 tc">
                                                <h3>
                                                {match.homeTeam}

                                                </h3>
                                                {/*<img className=''*/}
                                                     {/*src={x}*/}
                                                     {/*alt='https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg'*/}
                                                     {/*height={120}*/}
                                                     {/*width={120}/>*/}
                                            </div>
                                            <div className="col-md-1 tc">
                                                <h3>
                                                    {match.goalsHomeTeam}
                                                </h3>
                                            </div>
                                            <div className="col-md-2 tc blue">
                                                <h3 className="live_time blue">
                                                    {match.elapsed}'
                                                </h3>
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

                                        </div>
                                    </li>
                                </ul>

                            </div>


                        </div>
                    );
                }
            )
        }
    </div>
export default Matches;
