import React from 'react';

import './Standings.css';

const Leagues_Pro = ({changeLeague, league}) =>
    <div className='container-fluid ma3'>
        <ul className="nav nav-tabs flex-column">
            <div className="dropdown ma3">
                <button className="btn btn-primary dropdown-toggle toggle_league" type="button"
                        data-toggle="dropdown">England
                    <span className="caret fr"></span>
                </button>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a id='epl'
                           className={league === 'epl'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('epl')}>English Premier League</a>
                    </li>
                    <li className="nav-item">
                        <a id='championship'
                           className={league === 'championship'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('championship')}>Championship</a>
                    </li>
                    <li className="nav-item">
                        <a id='league1'
                           className={league === 'league1'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('league1')}>League 1</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown ma3">
                <button className="btn btn-primary dropdown-toggle toggle_league" type="button"
                        data-toggle="dropdown">Germany
                    <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a id='bundesliga'
                           className={league === 'bundesliga'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('bundesliga')}>Bundesliga</a>
                    </li>
                    <li className="nav-item">
                        <a id='bundesliga2'
                           className={league === 'bundesliga2'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('bundesliga2')}>Bundesliga 2nd Div</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown ma3">
                <button className="btn btn-primary dropdown-toggle toggle_league" type="button"
                        data-toggle="dropdown">Spain
                    <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a id='laliga'
                           className={league === 'laliga'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('laliga')}>Primera Division</a>
                    </li>
                    <li className="nav-item">
                        <a id='laliga2'
                           className={league === 'laliga2'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('laliga2')}>Segunda Division</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown ma3">
                <button className="btn btn-primary dropdown-toggle toggle_league" type="button"
                        data-toggle="dropdown">Italy
                    <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a id='seriea'
                           className={league === 'seriea'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('seriea')}>Serie A</a>
                    </li>
                    <li className="nav-item">
                        <a id='serieb'
                           className={league === 'serieb'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('serieb')}>Serie B</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown ma3">
                <button className="btn btn-primary dropdown-toggle toggle_league" type="button"
                        data-toggle="dropdown">United States
                    <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a id='mls'
                           className={league === 'mls'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('mls')}>Major League Soccer</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown ma3">
                <button className="btn btn-primary dropdown-toggle toggle_league" type="button"
                        data-toggle="dropdown">France
                    <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a id='ligue1'
                           className={league === 'ligue1'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('ligue1')}>Ligue 1</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown ma3">
                <button className="btn btn-primary dropdown-toggle toggle_league" type="button"
                        data-toggle="dropdown">Netherlands
                    <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a id='eredivisie'
                           className={league === 'eredivisie'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('eredivisie')}>Eredivisie</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown ma3">
                <button className="btn btn-primary dropdown-toggle toggle_league" type="button"
                        data-toggle="dropdown">Europe
                    <span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a id='ucl'
                           className={league === 'ucl'
                                      ? "nav-link active ma3 bg-success text-light"
                                      : "nav-link ma3 border-dark bg-lightest-blue hover-bg-light-blue"}
                           onClick={() => changeLeague('ucl')}>UEFA Champions League</a>
                    </li>
                </ul>
            </div>
        </ul>
    </div>
;

export default Leagues_Pro;