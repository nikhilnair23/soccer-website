import {BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from "../containers/MainPage";
import SignIn from './SignIn/SignIn'
import SearchResults from "./Search/SearchResults";
import Details from "./Search/Details"
import React from "react";
import Highlights from "./Highlights";
import Teams from "./Teams/Teams";
import TeamCard from "./Teams/TeamCard";
import Register from "./Register/Register";
import Fixtures from "./Fixtures/Fixtures";
import Leagues from "./standings/Leagues";
import Standings from "./standings/Standings";
import Profile from "./Profile/Profile";
import Users from "./Users/Users";
import FavoriteTeam from "./FavoriteTeam/FavoriteTeam";
import AnonProfile from "./Profile/AnonProfile";

const Routes = () => {
    return (
        <div className={"socc-background"}>
            <Router>
                <div className={"container-fluid"} id="navbar-container">
                    <Route path={"/"} exact render={() => <MainPage/>}/>
                    <Route path={"/login"} exact render={() => <SignIn/>}/>
                    <Route path={"/profile"} exact component={Profile}/>
                    <Route path={"/profile/:username"} exact component={AnonProfile}/>
                    <Route path={"/register"} exact render={() => <Register/>}/>
                    <Route path={"/fixtures"} exact component={Fixtures}/>
                    <Route path={"/leagues"} exact component={Standings}/>
                    <Route path={"/search/:searchTerm"} exact component={SearchResults}/>
                    <Route path={"/details/:title"} exact component={Details}/>
                    <Route path={"/highlights"} exact component={Highlights}/>
                    <Route path={"/teams"} exact component={Teams}/>
                    <Route path={"/teams/:teamId"} exact component={TeamCard}/>
                    <Route path={"/users"} exact component={Users}/>
                    <Route path={"/favouriteTeam"} exact component={FavoriteTeam}/>
                </div>
            </Router>
        </div>
    )
}

export default Routes