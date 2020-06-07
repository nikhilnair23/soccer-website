import React from "react";

const Roster = ({players}) => {
    return(
        <table align="center"
            className="table table-responsive-xs text-justify  text-left">
            <tbody>
            {players
                .map((player)=>
                    <tr>
                        <td className="roster-names">{player.player_name}</td>
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
