import React from "react";

const Roster = ({players}) => {
    return(
        <table className="table table-responsive-md table-hover table-light text-left">
            <tbody>
            {players
                .map((player)=>
                    <tr>
                        <td>{player.player}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Roster


/*
<ul className="list-group">
    {players.map((player)=>
        <li className="list-group-item text-sm-center">
            {player.player}
        </li>
    )}
</ul>*/
