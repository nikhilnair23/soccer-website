import React from 'react';

import './Standings.css';


const Leagues = ({changeLeague, league}) =>
    <div className='container-fluid ma3' id="navbar-container">
        <ul className="nav nav-tabs flex-column">
            <li className="nav-item">
                <a id='epl'
                   className={league === 'epl'
                              ? "nav-link active ma3 bg-success text-light"
                              : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                   onClick={() => changeLeague('epl')}>English Premier League</a>
            </li>
            <li className="nav-item">
                <a id='bundesliga'
                   className={league === 'bundesliga'
                              ? "nav-link active ma3 bg-success text-light"
                              : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                   onClick={() => changeLeague('bundesliga')}>Bundesliga</a>
            </li>
            <li className="nav-item">
                <a id='laliga'
                   className={league === 'laliga'
                              ? "nav-link active ma3 bg-success text-light"
                              : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                   onClick={() => changeLeague('laliga')}>La Liga</a>
            </li>
            <li className="nav-item">
                <a id='seriea'
                   className={league === 'seriea'
                              ? "nav-link active ma3 bg-success text-light"
                              : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                   onClick={() => changeLeague('seriea')}>Serie A</a>
            </li>
            <li className="nav-item">
                <a id='ucl'
                   className={league === 'ucl'
                              ? "nav-link active ma3 bg-success text-light"
                              : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                   onClick={() => changeLeague('ucl')}>UCL</a>
            </li>
        </ul>
    </div>
    ;


    // <div className="col-md-3">
    //     <button className="league_button btn-light"
    //             onClick={() => changeLeague('epl')}>
    //         English Premier League
    //     </button>
    //     <button className="league_button btn-light"
    //             onClick={() => changeLeague('laliga')}>
    //         La Liga
    //     </button>
    //     <button className="league_button btn-light"
    //             onClick={() => changeLeague('bundesliga')}>
    //         Bundesliga
    //     </button>
    //     <button className="league_button btn-light"
    //             onClick={() => changeLeague('seriea')}>
    //         Serie A
    //     </button>
    //     <button className="league_button btn-light"
    //             onClick={() => changeLeague('ucl')}>
    //         UEFA Champions League
    //     </button>
    // </div>;

export default Leagues;