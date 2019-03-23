import React from "react";
import './Navigation.css'

const Navigation = ({onRouteChange}) =>
    <nav className="navbar navbar-expand bg-dark">
        <div className="container-fluid">
            <div className="navbar-header bg-dark">
                <h2 className="float-left pt-2 mr-2 mt-2 font-italic font-weight-bold text-danger">FOOTBALL</h2>
                <ul className="nav nav-pills bg-dark p-2 float-right">
                    <li className="nav-item m-2" id="">
                        <button className={"btn text-white"}>Fixtures</button>
                    </li>
                    <li className="nav-item m-2" id="">
                        <button className={"btn text-white"}>Teams</button>
                    </li>
                    <li className="nav-item m-2" id="">
                        <button className={"btn text-white"}>Leagues</button>
                    </li>
                    <li className="nav-item m-2" id="">
                        <button className={"btn text-white"}>Scores</button>
                    </li>
                    <li className="nav-item m-2" id="signout_button">
                        <button className={"btn text-white"}
                        onClick={() => onRouteChange('signout')}
                        >Sign out</button>
                    </li>
                </ul>
            </div>

        </div>
    </nav>

export default Navigation
