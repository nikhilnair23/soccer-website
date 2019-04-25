import React from 'react'
import './TeamCard.css'
import def_logo from "../../img/crest.png";

const TeamCard = (props) => {
    const {name, crest} = props;
    return (
        <div
            className='tc bg-washed-yellow dib ma2 br3 pa1 shadow-5 team'>
            <img
                className='ma2'
                src = {crest === null || crest === ""
                        ?
                        def_logo
                        :
                        crest}
                 alt = {def_logo}
                 height={180}
                 width={180}/>
            <div>
                <h3>
                    {name}
                </h3>
            </div>
            <div>
                <button className='btn btn-outline-dark'
                        onClick={() => props.teamSelect(name)}>
                    Select
                </button>
            </div>
        </div>
    );
};

export default TeamCard