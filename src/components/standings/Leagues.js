import React from 'react';

const Leagues = ({changeLeague}) =>
    <div className="col-md-3">
        <button className="league_button btn-light"
                onClick={() => changeLeague('epl')}>
            English Premier League
        </button>
        <button className="league_button btn-light"
                onClick={() => changeLeague('laliga')}>
            La Liga
        </button>
        <button className="league_button btn-light"
                onClick={() => changeLeague('bundesliga')}>
            Bundesliga
        </button>
        <button className="league_button btn-light"
                onClick={() => changeLeague('seriea')}>
            Serie A
        </button>
        <button className="league_button btn-light"
                onClick={() => changeLeague('ucl')}>
            UEFA Champions League
        </button>
    </div>;

export default Leagues;