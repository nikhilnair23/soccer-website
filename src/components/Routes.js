import {BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from "../containers/MainPage";
import SignIn from './SignIn/SignIn'
import SearchResults from "./Search/SearchResults";
import SearchResultItem from "./Search/SearchResultItem"
import React from "react";
import Highlights from "./Highlights";
import Teams from "./Teams/Teams";
import TeamCard from "./Teams/TeamCard";
import Register from "./Register/Register";

const Routes = () => {
    return (
        <div className={"socc-background"}>
            <Router>
                <div className={"container-fluid"} id="navbar-container">
                    <Route path={"/"} exact render={() => <MainPage/>}/>
                    <Route path={"/login"} exact render={() => <SignIn/>}/>
                    <Route path={"/register"} exact render={() => <Register/>}/>
                    <Route path={"/search/:searchTerm"} exact component={SearchResults}/>
                    <Route path={"/searchItem"} exact component={SearchResultItem}/>
                    <Route path={"/highlights"} exact component={Highlights}/>
                    <Route path={"/teams"} exact component={Teams}/>
                    <Route path={"/teams/:teamId"} exact component={TeamCard}/>
                </div>
            </Router>
        </div>
    )
}

export default Routes