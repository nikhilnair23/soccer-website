import {BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from "../containers/MainPage";
import SearchResults from "./SearchResults";
import React from "react";

const Routes = () => {
    return (
        <div className={"socc-background"}>
            <Router>
                <div className={"container-fluid"} id="navbar-container">
                    <Route path={"/"} exact
                           render={() => <MainPage/>}/>
                    <Route path={"/search/:searchTerm"} exact
                           component={SearchResults}/>
                </div>
            </Router>
        </div>
    )
}

export default Routes